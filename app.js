const express = require('express');
const userR = require('./router/userRoute')
// Initialize express 
const app = express();


app.use(userR);
const PORT = 3000;

// /getUser and deleteUser ENDPOINTS

app.get('/', (req, res) => {
    res.send(`Hello Wolrd we are running on PORT ${PORT}`);
});


app.listen(PORT, (req, res) => {
    console.log(`Application running succesfully`);
});



