const tableData = require('../data/tabledata');
const waitData = require('../data/table');

//export to app

module.exports = (app) => {
    //
    app.get('/api/tables', (req, res) => res.json(tableData));
    app.get('/api/waitlist', (req, res) => res.json(waitData));


    //submit form data
    app.post('/api/tables', (req,res) => {

        if (tableData.length < 6) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitData.push(req.body);
            res.json(false);
        }
    })
}