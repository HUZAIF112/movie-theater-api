const app = require('./app')
const port = 3000;
const {db} = require('./db/connection')

//TODO: Create your GET Request Route Below: 


app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/movies`);
})

