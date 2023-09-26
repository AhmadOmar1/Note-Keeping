const express = require('express');
const { connect } = require('./config/db');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const port = 3001;

app.use(express.json());

//allow cors

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    

    next();

});

app.use('/', noteRoutes);

app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
});
