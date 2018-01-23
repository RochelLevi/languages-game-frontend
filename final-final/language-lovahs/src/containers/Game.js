import React from 'react'
import WordPage from '../components/WordPage'
import DefPage from '../components/DefPage'
import SpellingPage from '../components/SpellingPage'
import WelcomePage from '../components/WelcomePage'
import TranslationPage from '../components/TranslationPage'
import {getLangWords} from '../adapters/index.js'

export default class Game extends React.Component {
  constructor(props){
    super(props)


    this.state = {
      page: '',
      currentWord: {},
      words: [],
      learnedWords: [],
      wordPoints: 0,
    }
  }

  getLanguage(){
    const arr = this.props.history.location.pathname.split('/')
    return arr[arr.length - 1]
  }

  componentWillMount(){
    this.setState({page: 'welcome'})
  }

  componentDidMount(){
    getLangWords(1, 1)
    .then(json => this.setState({page: 'welcome', words: json.words, currentWord: json.words[0]}))

  }


  handlePageChange = (nextPage) => {
    let words = this.state.words
    let currentIndex = words.indexOf(this.state.currentWord)

    console.log("curr index", currentIndex)

    if (currentIndex === 4 && this.state.page === 'spelling'){
      window.location.replace(`http://localhost:3001/home`)
    } else if (currentIndex <= 4 && this.state.page !== 'spelling') {
        this.setState({page: nextPage})
    } else {
      this.setState({page: nextPage, currentWord: words[currentIndex + 1]})
    }
  }

  render(){
    console.log(this.state.words.indexOf(this.state.currentWord));
    const englishLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    console.log("page", this.state.page)

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
          letters={englishLetters}
          currentWord={this.state.currentWord}
          pageChange={this.handlePageChange} />
    }

    }
}
