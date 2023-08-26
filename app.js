const express = require('express');
const { connect } = require('./config/db'); 
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', noteRoutes);

app.listen(port, async () => {
    await connect();
    console.log(`Server is running on port ${port}`);
});
