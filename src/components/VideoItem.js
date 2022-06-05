import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		// when user clicks, onVideoSelect is called with particular video inside of it. using arrow function to call onVideoSelect with some argument
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
				{/* <div>{video.snippet.description}</div> */}
			</div>
		</div>
	);
};

export default VideoItem;
