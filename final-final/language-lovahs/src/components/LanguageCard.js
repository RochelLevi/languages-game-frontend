import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

const LanguageCard = (props) => {

  return(
    <div class="card">
    <div class="image">
      <img src={require("../greekFlag.png")} class="fluid small image visible content"></img>
    </div>
    <div class="content">
      <div class="header">Greek</div>
    </div>
  </div>
  )
}

export default LanguageCard
