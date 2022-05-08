import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({ channel, type }) => {
	const { channel: activeChannel, client } = useChatContext();

	const ChannelPreview = () => (
		<p className="channel-preview__item">
			# {channel?.data?.name || channel?.data?.id}
		</p>
	);

	const DirectPreiew = () => {
		const members = Object.values(channel?.data?.members).filter(({ user }) => user.id !== client.userID);
		return (
			<>
				<div className="channel-preview__item single">
					<Avatar
						image={members(0)?.user?.image}
						name={members(0)?.user?.fullName}
						size={24}
					/>
					<p>
						name={members(0)?.user?.fullName}
					</p>
				</div>
			</>
		)
	}
	return (
		<div className={
			channel?.id === activeChannel?.id
				? 'channel-preview__wrapper__selected'
				: 'channel-preview__wrapper'}
			onClick={() => {
				console.log(channel);
			}}
		>
			{type === 'team' ? <ChannelPreview /> : <DirectPreiew />}
		</div>
	)

}
export default TeamChannelPreview;
