import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.isLoading ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;