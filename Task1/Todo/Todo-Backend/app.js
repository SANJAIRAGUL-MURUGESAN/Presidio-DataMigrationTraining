const express = require('express') // Importing Express
const app = express() // Calling Express Function
const cookieParser = require('cookie-parser') // Importing Cookie-Parser
const bodyParser = require('body-parser') // Importing Body-Parser
const cors = require('cors') // importing cors for cient and server communication

const todosprovider = require('./Routes/providetodos') // Function to return All Todos
const todosadder = require('./Routes/addtodos') // Function to add Todos

// Enabling Cors Options to enhace the communication between server and client
const corsOptions = {
    origin : true, // making origin as true
    credentials : true // making credentials as true
}

app.use(express.json())   // making express.json() as an middleware for every routes
app.use(cors(corsOptions)) // making cors() as an middleware for every routes
app.use(bodyParser.urlencoded({extended:true})) // making body-parser as an middleware for every routes
app.use(cookieParser()) // making cookie-parser as an middleware for every routes


// Function to get all Todos of a User
app.use('/get/todos',todosprovider)

// Function to add Todo of a User
app.use('/add/todo',todosadder)



// Server Listening Function
app.listen(3001,()=>{
    console.log('Server Listening to Port Number 5000...')
})