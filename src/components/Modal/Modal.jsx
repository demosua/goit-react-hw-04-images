import { useEffect } from "react";
import { Container, Overlay } from './Modal.styled'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ id, largeImageURL, onClose}) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, [onClose])

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Container >
      {createPortal(
        <Overlay onClick={handleBackdropClick}>
        <img src={largeImageURL} alt={id} />
        </Overlay>,
      document.body)}
    </Container>
    )
}

export default Modal;

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};