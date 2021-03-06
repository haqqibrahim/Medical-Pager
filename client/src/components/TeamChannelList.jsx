import React from 'react'

import { addChannel } from '../assets/AddChannel'

const TeamChannelList = ({ children, error = false, loading, type }) => {
	if (error) {
		return type === 'team' ? (
			<div className="team-channel-list">
				<p className="team-channel-list__message">
					Connection error, please wait and try again
				</p>
			</div>
		) : null
	}
	if (loading) {
		return (
			<div className="team-channel-list">
				<p className="team-channel-list__message loading">
					{type === 'team' ? 'channels' : 'messages'} loading...
				</p>
			</div>
		)
	}
	return (
		<div className="team-channel-list">
			<div className="team-channel-list__header">
				<p className="team-channel-list__header__title">
					{type === 'team' ? 'channels' : 'Direct Message'}
				</p>
				{/*Button - add channel*/}
			</div>
			{children}
		</div>
	)
}

export default TeamChannelList