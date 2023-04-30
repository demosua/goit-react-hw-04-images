import React, { PureComponent } from "react";
import { GalleryItem, Image } from './ImageGalleryItem.styled'
import Modal from '../Modal';
import PropTypes from 'prop-types';


export class ImageGalleryItem extends PureComponent {
  state = {
    isModalOpen: false,
  };

  

  openModal = () => {this.setState({ isModalOpen: true })};
  closeModal = () => {this.setState({ isModalOpen: false })};

  handleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Image src={webformatURL} alt={id} />
        </GalleryItem>
        {isModalOpen && (<Modal id={id} largeImageURL={largeImageURL} onClose={this.handleModal}/>) }
      </>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};