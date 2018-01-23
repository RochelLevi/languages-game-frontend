import React from 'react'
import { Button } from 'semantic-ui-react'

const SpellingPage = (props) => {

  return (

    <div>
      <h1>Spell Time!</h1>
      <h1>{props.currentWord.name}</h1>

      <button>í</button>
      <button>ó</button>

      í
      <button onClick={() => props.pageChange('def')} >Next</button>
    </div>
  )
}

export default SpellingPage
