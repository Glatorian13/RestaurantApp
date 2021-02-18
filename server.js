const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//setup express to handle data push/pull
//



//file locations for express

//start server
app.listen(PORT, () => {
    console.log(`Application is listening on PORT: ${PORT}`);
})