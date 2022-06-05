import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		// 2 argument - empty array (tells to run a function only 1 time)
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async (term) => {
		//console.log(term);
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
