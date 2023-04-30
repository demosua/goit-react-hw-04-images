import React, { Component } from "react";
import { Container, Overlay } from './Modal.styled'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
export class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
  const {id, largeImageURL} = this.props

  return (
    <Container >
      {createPortal(
        <Overlay onClick={this.handleBackdropClick}>
        <img src={largeImageURL} alt={id} />
        </Overlay>,
      document.body)}
    </Container>
    )
  }
};
  
export default Modal;

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  };