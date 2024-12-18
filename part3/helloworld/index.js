const express = require('express')
const app = express()

let notes = [  
	{    
		id: "1",
		content: "HTML is easy",
		important: true  
	},
	{    
		id: "2",
		content: "Browser can execute only JavaScript",
		important: false  
	},
	{    
		id: "3",
		content: "GET and POST are the most important methods of HTTP protocol",
		important: true  
	}
]

app.get('/',(req, res) => {
	res.send('<h1>Helloooo</h1>')
})

app.get('/api/notes',(req, res) => {
	res.json(notes)
})

const PORT = 3001

app.listen(PORT)
console.log(`Server port ${PORT}`)
