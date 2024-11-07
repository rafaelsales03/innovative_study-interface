import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { api } from '../../services/api';
import { ChatContainer, MessageInput, MessageList, SendButton } from './styles';

const Chat = () => {
	const { itemId } = useParams();
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const socket = io('http://localhost:4001');
	useEffect(() => {
		socket.emit('joinRoom', { itemId });

		socket.on('newMessage', (message) => {
			setMessages((prevMessages) => [...prevMessages, message]);
		});

		return () => {
			socket.disconnect();
		};
	}, [itemId]);
	const fetchMessages = async () => {
		try {
			const response = await api.get(`/messages?itemType=${itemId}`);
			setMessages(response.data);
		} catch (error) {
			console.error('Error fetching messages:', error);
		}
	};
	useEffect(() => {
		fetchMessages();
	}, [itemId]);

	const handleSendMessage = async () => {
		if (newMessage.trim()) {
			try {
				await api.post('/messages', {
					content: newMessage,
					user_id: 'user-id',
					item_type: itemId,
				});
				setNewMessage('');
			} catch (error) {
				console.error('Error sending message:', error);
			}
		}
	};
	return (
		<ChatContainer>
			<MessageList>
				{messages.map((msg, index) => (
					<div key={index}>{msg.content}</div>
				))}
			</MessageList>
			<MessageInput
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				placeholder="Type a message..."
			/>
			<SendButton onClick={handleSendMessage}>Send</SendButton>
		</ChatContainer>
	);
};
export default Chat;
