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
      gamePoints: 0,
      currWordPoints: 0
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


  handlePageChange = (nextPage, response) => {

    if (parseInt(response) === parseInt(this.state.currentWord.id)){
      this.setState({currWordPoints: this.state.currWordPoints + 1}, this.changePage(nextPage))
    }
    else{
      this.changePage(nextPage)
    }

  }

  changePage(nextPage){
    let words = this.state.words
    let currentIndex = words.indexOf(this.state.currentWord)

    if (currentIndex === 4 && this.state.page === 'spelling'){
      if (parseInt(this.state.currWordPoints) > 1){
        this.setState({gamePoints: this.state.gamePoints + 1, learnedWords: this.state.learnedWords.concat(this.state.currentWord), currWordPoints: 0})
      }
      else{
        this.setState({currWordPoints: 0})
      }
      window.location.replace(`http://localhost:3001/home`)
    } else if (currentIndex <= 4 && this.state.page !== 'spelling') {
        this.setState({page: nextPage})
    } else {
      if (parseInt(this.state.currWordPoints) > 1){
        this.setState({gamePoints: this.state.gamePoints + 1, learnedWords: this.state.learnedWords.concat(this.state.currentWord), currWordPoints: 0, page: nextPage, currentWord: words[currentIndex + 1]})
      }
      else{
        this.setState({currWordPoints: 0, page: nextPage, currentWord: words[currentIndex + 1]})
      }
      // this.setState({page: nextPage, currentWord: words[currentIndex + 1]})
    }
  }

  render(){
    const englishLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


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
