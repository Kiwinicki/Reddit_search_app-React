import React, { useEffect } from 'react';
import '../scss/Header.scss';

export default function Header(props) {
	useEffect(() => {
		const inputEnterListener = (event) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				event.preventDefault();
				props.handleSubmit((perv) => !perv);
			}
		};
		const searchInput = document.querySelector('.site-header__input');
		searchInput.addEventListener('keydown', inputEnterListener);
		return () => {
			searchInput.removeEventListener('keydown', inputEnterListener);
		};
	});

	return (
		<header className="site-header">
			<h1 className="site-header__title">Redditowa szukajka w React</h1>
			<form>
				<input
					className="site-header__input"
					type="text"
					value={props.inputVal}
					onChange={(e) => {
						props.handleInput(e.target.value);
					}}
				/>
				<input
					className="site-header__submit"
					type="submit"
					value="Szukaj"
					onClick={(e) => {
						e.preventDefault();
						props.handleSubmit((perv) => !perv);
					}}
				/>
			</form>
		</header>
	);
}
