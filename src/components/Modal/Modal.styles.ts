import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  height: 250px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Button = styled.button`
  border: 0;
  background-color: inherit;
  margin-left: auto;
  cursor: pointer;

  & svg {
    font-size: 50px;
  }
`;

export { ModalContent, ModalOverlay, Button };
