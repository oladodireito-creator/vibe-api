const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
app.get('/', (req,res)=>res.send('Vibe API'));
app.listen(process.env.PORT || 3000, ()=>console.log('Vibe running'));
