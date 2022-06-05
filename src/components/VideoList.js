import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
	//any time this component is rendered onto the screen, it will have a prop - props.videos (array of different records rendered as HTML)
	//we take array - videos, and map over it
	const renderedList = videos.map((video) => {
		// we will take video argument and pass it as a prop into videoItem
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		);
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
