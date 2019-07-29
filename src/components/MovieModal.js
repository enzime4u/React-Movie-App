import React from 'react';
import { Button, Header, Icon, Image, Modal, Container, Embed } from 'semantic-ui-react';
import { API_URL, API_KEY, IMAGE_BASE_URL, MODAL_IMAGE} from '../constants';
import YoutubeVideo from './YoutubeVideo';


const MovieModal = (props) => (
  <Modal size='fullscreen' dimmer='blurring' trigger={<Button>{props.children}</Button>} closeIcon>
    <Modal.Content style={{
      display: `flex`,
      felxFlow: 'row wrap',
      justifyContent: 'space-around'
    }}>
        <Image wrapped size='medium' src={`${MODAL_IMAGE}${props.movie.poster_path}`} />
    <Modal.Description size='medium'>
        <Header>{props.movie.original_title}</Header>
        <p>{props.movie.overview}</p>
      </Modal.Description>
    </Modal.Content>
   <YoutubeVideo name={props.movie.original_title}/>
  </Modal>
)

export default MovieModal;