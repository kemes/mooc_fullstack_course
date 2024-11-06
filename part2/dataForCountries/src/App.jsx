import { useState, useEffect } from 'react'
import axios from 'axios'
import ListCountries from './ListCountries.jsx' 

function App() {
	const [searchText, setSearchText] = useState('')
	const [result, setResult] = useState([])
	const url = "https://studies.cs.helsinki.fi/restcountries/api/all"

	useEffect(() => {
		axios
		.get(url)
		.then(response => {
			setResult([response.data])
		})
		.catch(error => {
			console.log(`Fetch error ${error}`)
		})

	},[])

	const handleSearch = (event) => {
		setSearchText(event.target.value)
	}


	return (
		<div>
			find countries:<input onChange={handleSearch}/><br/>
			<ListCountries result={result} searchText={searchText} />
			
		</div>
	)
}

export default App
