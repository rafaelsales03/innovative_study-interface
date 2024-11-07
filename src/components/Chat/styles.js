import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`;

export const MessageInput = styled.input`
  border: 1px solid #ccc;
  padding: 10px;
  width: calc(100% - 20px);
  margin-bottom: 10px;
`;

export const SendButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
