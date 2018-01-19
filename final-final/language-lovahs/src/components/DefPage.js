import React from 'react'

const DefPage = (props) => {
  return (
    <div>
      <h1>Definition Time!</h1>
      <button onClick={() => props.pageChange('word')} >Next</button>
    </div>
  )
}

export default DefPage
