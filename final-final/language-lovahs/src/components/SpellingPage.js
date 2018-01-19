import React from 'react'

const SpellingPage = (props) => {
  return (
    <div>
      <h1>Spell Time!</h1>
      <button onClick={() => props.pageChange('def')} >Next</button>
    </div>
  )
}

export default SpellingPage
