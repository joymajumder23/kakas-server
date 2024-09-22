const express = require ('express');
const app = express();
require('dotenv').config();
const cors = require ('cors'); 
const port = process.env.PORT || 5000;

// middleware 
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('KAKAS Server is running');
}); 
app.listen(port, () => {
    console.log(`KAKAS Server on PORT ${port}`);
}); 