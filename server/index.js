const express = require('express'); //Import express
const app= express(); //Generate new express app

app.get('/', (req, res)=>{ //Running express server to run route handler 
    res.send({hi: 'there'}); //Rounte handler request responds with creating a JSON object 'hi:there"
});

const PORT = process.env.PORT || 5000; //Web deploy app uses whatever port is dynamically given, if not defaults to por: 5000
app.listen(PORT);

/*app.listen(5000); //Port 5000*/




 