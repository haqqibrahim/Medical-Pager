import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
//import Cookies from 'universal-cookie';
import './App.css';
// COMPONENTS IMPORT
import { ChannelContainer, ChannelListContainer, Auth } from './components';

// STREAM CHAT APIKEY
const apiKey = 'uf7fns3bzxz8';

// INSTANCE OF A STREAM CHAT
const client = StreamChat.getInstance(apiKey);

const authToken = false;

function App() {
	if(!authToken) return <Auth />
	return (
		<div className="app__wrapper">
			<Chat client={client} customStyles="team light">
				<ChannelListContainer
				/>
				<ChannelContainer />
			</Chat>
		</div>
	)
}

export default App