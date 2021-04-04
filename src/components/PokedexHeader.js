import React from 'react';
import {
    Header,

    Segment
} from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const PokedexHeader = ({author, name}) => {
  return(
      <Segment basic inverted padded='very' vertical>
    <Header as='h1'>This is a Header for {name} Pokedex!</Header>
    <Image src={'Maan.jpg'} alt="Maan" centered size={'small'} />      
    <Header as='h3'>Author: {author}</Header>
    
    </Segment>
  
  )
}

export default PokedexHeader;