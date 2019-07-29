import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import MoviesList from './MoviesList';
import HeroImage from './HeroImage';
import LoadMoreButton from './LoadMoreButton';
import { API_URL, API_KEY, IMAGE_BASE_URL, SEARCH_URL} from '../constants';
import Navigation from './Navigation';



class HomePage extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    movies: [],
    heroImage: null,
    currentPage: 1,
    searchTerm: ''
   }
}
 
 componentDidMount() {
  this.fetchingFromApi();
 }

 fetchingFromApi = () => {
  let apiBase = ''
  if (this.state.searchTerm === '') {
    apiBase = `${API_URL}popular?api_key=${API_KEY}&language-en-US&page=${this.state.currentPage}`
    fetch(apiBase)
    .then((response) => response.json())
    .then((response) => {
      this.setState(prevState => {
        return {
        movies: [...prevState.movies, ...response.results],
        heroImage: this.state.currentPage === 1 ? response.results[0] : prevState.heroImage,
        currentPage: response.page,
      }
     })
     console.log(this.state.movies)
    })
    } else {
      apiBase = `${SEARCH_URL}${this.state.searchTerm}`
      fetch(apiBase)
      .then((response) => response.json())
      .then((response) => {
          this.setState({
              movies: response.results,
              currentPage: response.page,
          })
        }, 300)
    }
  }


 loadMoreItems = () => {
   this.setState((prevState) => {
   return  {
     currentPage: prevState.currentPage + 1
    }
  }, () => this.fetchingFromApi())
  
 }

  handleSearch = (value) => {
      this.setState({
        searchTerm: value
      },() => this.fetchingFromApi())
  }

 // start rendering
 render() {
    
  const movies = this.state.movies;
  const heroImage = this.state.heroImage;

    return (
        <Container className='app-container' fluid>
            { heroImage && <HeroImage 
              image={`${IMAGE_BASE_URL}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.title}  
              text={this.state.heroImage.overview}
              /> 
            }  
          <Header as='h1' textAlign='center'>{this.state.searchTerm ? 'Search Results' : 'Popular Movies'}</Header>
          <Container> 
            <MoviesList movies={movies} />  
          </Container>
            <LoadMoreButton handleClick={this.loadMoreItems}/>  
        </Container>
      
    )
  }
}

export default HomePage;