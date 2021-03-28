import exprees from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import create from './controllers/product.js'
import router from './routers/productRouter.js'
import routerCategory from './routers/categoryRouter.js'
import mongoose from 'mongoose'


//config
const app = exprees();
dotenv.config();
app.use(bodyParser.json());

// Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: false,
    useCreateIndex: true
}).then(() => {
    console.log(`Database connected`)
});

mongoose.connection.on('Error', err => {
    console.log(`Data connect failed, ${err.message}`)
})

//router
app.use(morgan('dev'));
const port = process.env.PORT || 8000
//create server
app.listen(port, () => {
    console.log(`Server is runing on port: ${port}`);
})
app.use('/api', router, routerCategory);