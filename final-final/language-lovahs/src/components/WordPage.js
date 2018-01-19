import React from 'react'

const WordPage = (props) => {
  return (
    <div>
      <h1>Word Time!</h1>
      <button onClick={() => props.pageChange('spelling')} >Next</button>
    </div>
  )
}

export default WordPage
