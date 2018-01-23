import React from 'react'
import WordPage from '../components/WordPage'
import DefPage from '../components/DefPage'
import SpellingPage from '../components/SpellingPage'
import WelcomePage from '../components/WelcomePage'
import TranslationPage from '../components/TranslationPage'
import {getLangWords} from '../adapters/index.js'
import {withRouter} from 'react-router-dom'
import {fetchLanguages} from '../adapters/index'


class Game extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      page: '',
      currentWord: {},
      languages: [],
      words: [],
      learnedWords: [],
      wordPoints: 0,
    }
  }

  getLanguageId(){
    const arr = this.props.history.location.pathname.split('/')
    return arr[arr.length - 1]
  }

  getLaguage(){
    return this.state.languages.filer(l =>{
      return l.id === this.getLanguageId()
    })
  }

  componentWillMount(){
    this.setState({page: 'welcome'})
  }

  componentDidMount(){
    let lang = this.getLanguageId()
    fetchLanguages().then(json => this.setState({languages: json}))
    getLangWords(lang, 1)
    .then(json => this.setState({page: 'welcome', words: json.words, currentWord: json.words[0]}))

  }


  handlePageChange = (nextPage) => {
    let words = this.state.words
    let currentIndex = words.indexOf(this.state.currentWord)


    if (currentIndex === 4 && this.state.page === 'spelling'){
      window.location.replace(`http://localhost:3001/home`)
    } else if (currentIndex <= 4 && this.state.page !== 'spelling') {
        this.setState({page: nextPage})
    } else {
      this.setState({page: nextPage, currentWord: words[currentIndex + 1]})
    }
  }

  render(){

    console.log(this.getLaguage)
    switch (this.state.page) {
      case 'welcome':
        return <WelcomePage
          currentWord={this.state.currentWord}
          pageChange={this.handlePageChange} />
      case 'def':
        return <DefPage
          currentWord={this.state.currentWord}
          pageChange={this.handlePageChange} />
      case 'word':
        return <WordPage
          currentWord={this.state.currentWord}
          words={this.state.words}
          pageChange={this.handlePageChange} />
      case 'translation':
        return <TranslationPage
          currentWord={this.state.currentWord}
          words={this.state.words}
          pageChange={this.handlePageChange} />
      case 'spelling':
        return <SpellingPage
          currentWord={this.state.currentWord}
          pageChange={this.handlePageChange} />
    }

  }
}

export default withRouter(Game)
