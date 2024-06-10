import img from "../assets/download.jpg";
const NewsItem = ({ title, description, src, url }) => {
	return (
		<div
			className='card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2'
			style={{ maxWidth: "345px" }}
		>
			<img src={src ? src : img} className='card-img-top' alt='image' />
			<div className='card-body'>
				<h5 className='card-title'>{title.slice(2, 50)}</h5>
				<p className='card-text'>
					{description
						? description.slice(0, 90)
						: "News is coming.."}
				</p>
				<a href={url} className='btn btn-primary'>
					Read More
				</a>
			</div>
		</div>
	);
};

export default NewsItem;
