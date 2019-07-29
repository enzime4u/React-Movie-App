import React from 'react'
import { Container, Image } from 'semantic-ui-react'


const HeroImage = ({ image, title, text }) => (
  
  <Container textAlign='justified' fluid className='hero-image'
    style={{
      display: 'flex',
      alignItems: 'flex-end',
      margin: '0',
      height: '500px',
      background:
      `linear-gradient(to bottom, rgba(0,0,0,0)
        45%,rgba(0,0,0,0)
        55%,rgba(0,0,0,0.65)
        100%),
        url('${image}'), #1c1c1c`, 
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      width: `100%`,
      color: '#ffffff'
    }}
  >
    <div>
      <h5>sadasdasdaslk</h5>
      <h2 className='movie-title'>{title}</h2>
      <p className='movie-description'>{text}</p>
    </div>
  </Container>  
)

export default HeroImage