import React from 'react';
import Post from './Post';
import '../scss/PostsList.scss';

export default function PostsList(props) {
	const generatePostList = () => {
		const postList = props.posts.map((postData) => {
			return <Post data={postData.data} key={postData.data.id} />;
		});
		return postList;
	};

	return (
		<main className="post-list">
			{props.posts.length !== 0 ? generatePostList() : props.children}
		</main>
	);
}
