import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsBoard({ category }) {
	const [article, setArticle] = useState([]);

	useEffect(() => {
		// const apiKey = process.env.REACT_APP_NEWS_API_KEY;
		// console.log("API Key:", apiKey);
		// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
		const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=603e31875c5f4305b6f6933be282f5cf`;

		axios
			.get(url)
			.then((response) => {
				setArticle(response.data.articles);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [category]);

	return (
		<div>
			<h2 className='text-center'>
				Latest <span className='badge bg-danger'>News</span>
			</h2>
			{article.map((news, index) => (
				<NewsItem
					key={index}
					title={news.title}
					description={news.description}
					src={news.urlToImage}
					url={news.url}
				/>
			))}
		</div>
	);
}

export default NewsBoard;
