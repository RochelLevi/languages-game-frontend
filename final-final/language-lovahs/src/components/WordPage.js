import React from 'react'
import '../word.css';
import {Segment, Container} from 'semantic-ui-react'

const WordPage = (props) => {
  return (

    <div>
      <h1>{props.currentWord.name}</h1>
      <button onClick={() => props.pageChange('translation')} >Next</button>
    </div>
  )
}

export default WordPage
