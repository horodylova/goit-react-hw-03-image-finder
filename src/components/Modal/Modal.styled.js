import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;