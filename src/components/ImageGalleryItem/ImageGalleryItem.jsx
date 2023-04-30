import { useState } from "react";
import { GalleryItem, Image } from './ImageGalleryItem.styled'
import Modal from '../Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {setModalIsOpen(true)};
  const closeModal = () => {setModalIsOpen(false)};
  
  return (
    <>
      <GalleryItem onClick={openModal}>
        <Image src={webformatURL} alt={id} />
      </GalleryItem>
      {modalIsOpen && (<Modal id={id} largeImageURL={largeImageURL} onClose={closeModal}/>) }
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};