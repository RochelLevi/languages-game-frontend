import React from 'react'

const DefPage = (props) => {
  if (props.currentWord !== {}){
 return (
    <div>
      <h1>Def Page</h1>
      <h1>{props.currentWord.name}</h1>
      <button onClick={() => props.pageChange('word')} >Next</button>
    </div>
    )
  }
}

export default DefPage
