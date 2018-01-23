import React from 'react'

const SpellingPage = (props) => {
  console.log(props.letters)

  return (

    <div>
      <h1>Spell Time!</h1>
      <h1>{props.currentWord.name}</h1>
      <button onClick={() => props.pageChange('def')} >Next</button>
    </div>
  )
}

export default SpellingPage
