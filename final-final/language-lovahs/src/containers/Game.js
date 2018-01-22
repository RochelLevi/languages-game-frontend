import React from 'react'
import WordPage from '../components/WordPage'
import DefPage from '../components/DefPage'
import SpellingPage from '../components/SpellingPage'
import WelcomePage from '../components/WelcomePage'


export default class Game extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      page: '',
      currentWord: {},
      learnedWords: [{name: 'yiasu', english_translation: 'hello'}, {name: 'fruita', english_translation: 'fruit'}],
      wordPoints: 0,
    }
  }

  // getWords = (json) => {
  //   let words = json.words.splice(0, 5)
  //   this.setState({learnedWords: words})
  // }

  getLanguage(){
    const arr = this.props.history.location.pathname.split('/')
    return arr[arr.length - 1]
  }


  componentWillMount(){
    this.setState({page: 'welcome', currentWord: this.state.learnedWords[0]})

  }

  setCurrentWord = (nextWord) =>{
    this.setState({currentWord: nextWord})
  }

  handlePageChange = (nextPage) => {
    let words = this.state.learnedWords
    let currentIndex = words.indexOf(this.state.currentWord)

    if (currentIndex === 1 && this.state.page === 'spelling'){
      window.location.replace(`http://localhost:3001/home`)
    } else if (currentIndex <= 1 && this.state.page !== 'spelling') {
        this.setState({page: nextPage})
    } else {
      this.setState({page: nextPage, currentWord: words[currentIndex + 1]})
    }
  }

  render(){

    switch (this.state.page) {
      case 'welcome':
        return <WelcomePage currentWord={this.state.currentWord} pageChange={this.handlePageChange} />
      case 'def':
        return <DefPage currentWord={this.state.currentWord} pageChange={this.handlePageChange} />
      case 'word':
        return <WordPage currentWord={this.state.currentWord} pageChange={this.handlePageChange} />
      case 'translation':
        return <WordPage currentWord={this.state.currentWord} pageChange={this.handlePageChange} />
      case 'spelling':
        return <SpellingPage currentWord={this.state.currentWord} setCurrentWord={this.setCurrentWord} pageChange={this.handlePageChange} />
    }

    }
}
