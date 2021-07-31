import React, { useEffect, useState } from 'react';
import PostsList from './components/PostsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const [data, setData] = useState([]);
	const [inputVal, setInputVal] = useState('');
	const [submit, setSubmit] = useState(false);

	const sortBy = 'hot';
	const searchLimit = 25;

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				`http://localhost:3001/search.json?q=${inputVal.trim()}&sort=${sortBy}&limit=${searchLimit}`
			);
			const json = await res.json();

			console.log(json.data.children);
			console.log(json);

			setData(json.data.children);
		}
		fetchData();
	}, [submit]);

	return (
		<div className="App">
			<Header
				inputVal={inputVal}
				handleInput={(e) => {
					setInputVal(e);
				}}
				handleSubmit={(e) => {
					setSubmit(e);
				}}
			/>
			<PostsList posts={data}>
				{data === [] && submit === false ? (
					<p className="search-text">
						Na razie nic tu nie ma. Zacznij szukać korzystając z wyszukiwarki
						powyżej
					</p>
				) : (
					<p className="search-text">Nie znaleziono postów pod szukaną frazą</p>
				)}
			</PostsList>
			<Footer />
		</div>
	);
}

export default App;
