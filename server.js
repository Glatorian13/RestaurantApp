const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//setup express to handle data push/pull
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//file locations for express 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoute')(app);

//start server
app.listen(PORT, () => {
    console.log(`Application is listening on PORT: ${PORT}`);
})