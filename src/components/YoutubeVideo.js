import React from 'react'
import { Embed, Container, Segment } from 'semantic-ui-react'
// import { YT_KEY, YT_SEARCH_URL } from '../constants'

const YT_KEY = 'AIzaSyCVxoLBPHGS9CHgWaY5_PAfo9fxlVm6i-k';
const YT_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'


class Youtube extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: props.name,
      resultsYoutube: [],
      videoID: '',
      placeholder: ''
    };
    this.fetchingVideos = this.fetchingVideos.bind(this);
  }
componentDidMount() {
  this.fetchingVideos()
}
  fetchingVideos() {
    const goToURL = `${YT_SEARCH_URL}?part=snippet&q=${this.state.query}-oficial-trailer&maxResults=1&key=${YT_KEY}`

    fetch(goToURL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
          this.setState({
            videoID: response.items[0].id.videoId,
            placeholder: response.items[0].snippet.thumbnails.high.url
          })
      })
      
  }
  render() {
    console.log(this.state.videoID)
    return (
      <Container style={{width: '600px', marginBottom: '50px'}}>
        <Segment size='tiny' inverted >
          <Embed aspectRatio='4:3' id={this.state.videoID} placeholder={this.state.placeholder} source='youtube' />
        </Segment>
      </Container>
    )
  }
}
export default Youtube
