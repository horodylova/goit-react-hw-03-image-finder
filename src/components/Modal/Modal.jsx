import React, { Component } from 'react'; 
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <Overlay onClick={this.handleClickOutside}>
        <ModalContainer>
          <ModalImage src={image.largeImageURL} alt={`ID ${image.id}`} />
        </ModalContainer>
      </Overlay>
    );
  };
}





