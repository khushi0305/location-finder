const express = require('express');
const userRouter = require('./routers/userRouter');
const placeRouter = require('./routers/placeRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use(express.json());
app.use('/user', userRouter);
app.use('/place', placeRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/home', (req, res)=>{
    res.send('response from home');
})

app.get('/add', (req, res) => {
    res.send('response from add');
})

app.get('/all',(req, res)=> {
    res.send('response from all');
})

app.listen(port, ()=> {
    console.log('server started');
})