import React, { Component } from "react";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button'
import Loader from '../Loader'
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/pixabay';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

        api
          .getImages(this.state.query, this.state.page)
          .then(result => this.setState(prevState => {
            return { images: [...prevState.images, ...result], status: 'resolved' }
          }))
          .catch(error => {
            this.setState({ error, status: 'rejected' })
            toast.error(error.message)
          })
      
    }
    if (this.state.page > 1) { this.scrollSmoothly() };
  }

  scrollSmoothly = () => {
    const cardHeight = 320;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      })
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images, status } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {status === 'rejected' && <ToastContainer autoClose={1000} />}
        {images.length > 0 && <ImageGallery images={images} />}
        {status === 'pending' && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
      </Container>
      )
  }
}

export default App;