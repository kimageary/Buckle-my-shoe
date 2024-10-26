// Get the express package 
const express = require('express');

// Instantiate an express (web) app
const app = express();

// Define a port number for the app to listen on
const PORT = 3000;

// Tell the app to encode data into JSON format
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


// Set your view (templating) engine to "EJS"
// (We use a templating engine to create dynamic web pages)
app.set('view engine', 'ejs');

// Define a "default" route, 
app.get("/", (req, res) => {
    res.render("home", { message: null }); 
});

// Define a "confirm" route, using the GET method
app.get('/confirm', (req, res) => {

    // Send a response to the client
    res.send('You need to post to this page!');
});

// Define a "confirm" route, using the POST method
app.post('/', (req, res) => {
    if (req.body.number) {
        let number = req.body.number;
        console.log("Number received:", number);
        
        // Render 'home.ejs' with a message
        res.render('home', { message: buckleConverter(number) });
    } else {
        res.render('home', { message: "No number was provided." });
    }
});

// buckleConverter method
function buckleConverter(number){
    if (number >= 1 && number <= 10){
        if(number == 1 || number == 2){
            return "1, 2, buckle my shoe.";
        } else if(number == 3 || number == 4){
            return "3, 4, shut the door.";
        } else if(number == 5 || number == 6){
            return "5, 6, pick up sticks.";
        } else if(number == 7 || number == 8){
            return "7, 8, lay them straight.";
        } else if(number == 9 || number == 10){
            return "9, 10, a big fat hen!";
        }
        else{
            return "Please enter a number between 1 and 10.";
        }
    }
}



// Tell the app to listen for requests on the designated port
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});