import React from 'react'

const WelcomePage = (props) => {
  return (
      <div>
        <h1>Wecome!</h1>
        <button onClick={() => props.pageChange('def')} >Next</button>
      </div>
    )
  }

export default WelcomePage
