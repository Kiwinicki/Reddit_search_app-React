import React from 'react';
import '../scss/Post.scss';

function Post(props) {
	const detailsBgColor = {
		backgroundColor: props.data.link_flair_background_color,
		color: props.data.link_flair_text_color === 'light' ? 'white' : 'black',
	};

	return (
		<section className="post" style={detailsBgColor}>
			<div className="post__details">
				{props.data.link_flair_text && (
					<small className="post__category">{props.data.link_flair_text}</small>
				)}
				<small className="post__author">{props.data.author}</small>
			</div>
			<div className="post__content">
				<h3 className="post__title">{props.data.title}</h3>
				{props.data.thumbnail && (
					<img
						className="post__img"
						src={props.data.thumbnail}
						alt=""
						width={props.data.thumbnail_width}
						height={props.data.thumbnail_height}
					/>
				)}
				{props.data.selftext && (
					<>
						<p className="post__text">{props.data.selftext}</p>
						<a className="post__read-more" href={props.data.url}>
							Więcej
						</a>
					</>
				)}
			</div>
		</section>
	);
}

export default Post;
