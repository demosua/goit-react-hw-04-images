
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled'

const ImageGallery = ({ images }) => {

  return (
    <Gallery>
      { images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
          )) }
    </Gallery>
  )
};
  
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};