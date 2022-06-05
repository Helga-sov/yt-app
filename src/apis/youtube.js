import axios from "axios";
const KEY = "AIzaSyBwTZ6dWZY5RQeWpdotNgpp8noLYXVGZE8";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
