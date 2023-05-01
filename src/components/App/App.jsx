import { useState, useEffect } from "react";
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Button from '../Button'
import Loader from '../Loader'
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../api/pixabay';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = () => {
    setPage(prevState => (prevState + 1));
  }

  useEffect(() => {
    if (query) {
      setStatus('pending');
      api        
        .getImages(query, page)
        .then(result => {
          setImages(prevState => [...prevState, ...result])
          setStatus('resolved')
        })
        .catch(error => {
          setStatus('rejected')
          toast.error(error.message)
        })
    }
  }, [query, page]);
  
  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {status === 'rejected' && <ToastContainer autoClose={1000} />}
      {images.length > 0 && <ImageGallery images={images} />}
      {status === 'pending' && <Loader />}
      {images.length > 0 && <Button onClick={handleLoadMore} />}
    </Container>
    )
}

export default App;