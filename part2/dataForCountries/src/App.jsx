import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
	const [searchText, setSearchText] = useState('')
	const [result, setResult] = useState([])
	const url = "https://studies.cs.helsinki.fi/restcountries/api/all"

	useEffect(() => {
		axios
		.get(url)
		.then(response => {
			const countries = response.data.filter((x) => x.name.common.toLowerCase().includes(searchText)).map((x) => x.name.common)
			if(countries.length > 10 && searchText.length !== 0){
				setResult(['Too many countries, specify another filter.'])
			}else if(countries.length === 1){
				axios
				.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countries[0]}`)
				.then(response => {
					setResult([<br />, <b>{response.data.name.common}</b>, ' ', <br />, <p>Capital: {response.data.capital[0]}</p>, <p>Population: {response.data.population}</p>, <img src={response.data.flags.png}/>])
				})

			}else if(searchText.length !== 0){
				setResult(countries.map((x) => <p key={x}>{x}</p>))
			}else{
			setResult([])
			}

		})
		.catch(error => {
			console.log(`Fetch error ${error}`)
		})

	},[searchText])

	const handleSearch = (event) => {
		setSearchText(event.target.value)
	}


	return (
		<div>
			find countries:<input onChange={handleSearch}/><br/>
			{result}
			
		</div>
	)
}

export default App
