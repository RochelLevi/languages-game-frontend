import React from 'react'
import WordPage from '../components/WordPage'
import DefPage from '../components/DefPage'
import SpellingPage from '../components/SpellingPage'
import WelcomePage from '../components/WelcomePage'


export default class Game extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      page: 'welcome',
      currentWord: '',
      learnedWords: [],
      wordPoints: 0
    }
  }

  handlePageChange = (nextPage) =>{
    console.log(this.state.page);
    this.setState({page: nextPage})
  }

  render(){
    switch (this.state.page) {
      case 'welcome':
        return <WelcomePage pageChange={this.handlePageChange} />
      case 'def':
        return <DefPage pageChange={this.handlePageChange} />
      case 'word':
        return <WordPage pageChange={this.handlePageChange} />
      case 'translation':
        return <WordPage pageChange={this.handlePageChange} />
      case 'spelling':
        return <SpellingPage pageChange={this.handlePageChange} />
    }

    }
}
