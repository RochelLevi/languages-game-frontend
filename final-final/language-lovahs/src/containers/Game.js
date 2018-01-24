import React from 'react'
import WordPage from '../components/WordPage'
import DefPage from '../components/DefPage'
import SpellingPage from '../components/SpellingPage'
import WelcomePage from '../components/WelcomePage'
import TranslationPage from '../components/TranslationPage'
import ScorePage from '../components/ScorePage'
import {getLangWords, updatePoints, createLearnedWords} from '../adapters/index.js'
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

  getUserCurrLang(){
    const languageId = this.getLanguageId()
    const languages = this.props.userLanguages.users
    if (languages){
      return languages[languageId - 1]
    }
  }

  componentWillMount(){
    this.setState({page: 'welcome'})

  }

  componentDidMount(){
    const lang = this.getLanguageId()
    fetchLanguages().then(json => this.setState({languages: json}))
    getLangWords(lang, this.props.currentUser.id)
    .then(json => {
      this.setState({page: 'welcome', words: json.words},
        () => {
          if (this.state.words.length){
          this.setState({currentWord: this.state.words[0]})
            }})}
      )
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
      this.setState({page: 'score'})
      // console.log(parseInt(this.state.total) + parseInt(this.getUserCurrLang().points))
      updatePoints(this.state.gamePoints + this.getUserCurrLang().points, this.getUserCurrLang().points_id)
      this.state.learnedWords.forEach(word => {
        createLearnedWords(this.props.currentUser.id, word.id)
      })

    } else if (currentIndex <= 4 && this.state.page !== 'spelling') {
        this.setState({page: nextPage})
    } else {
      if (parseInt(this.state.currWordPoints) > 1){
        this.setState({gamePoints: this.state.gamePoints + 1, learnedWords: this.state.learnedWords.concat(this.state.currentWord), currWordPoints: 0, page: nextPage, currentWord: words[currentIndex + 1]})
      }
      else{
        this.setState({currWordPoints: 0, page: nextPage, currentWord: words[currentIndex + 1]})
      }
    }
  }

  render(){
    console.log(this.getUserCurrLang())
    switch (this.state.page) {
      case 'welcome':
        return <WelcomePage
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
      case 'score':
        return <ScorePage
          // currentLanguage={this.getUserCurrLang()}
          score={this.state.gamePoints}
          />
    }

  }
}
export default withRouter(Game)
