const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");

//models
const Product = require('./models/product')
const Food = require('./models/food')


mongoose.connect('mongodb://localhost:27017/node-api-101', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(bodyParser.json());
app.use(cors());

const products = [
    {}
]

app.post('/foods', async (req, res) => {
    var obj = new Food(req.body);
    obj.save((err, data) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
    });
})

app.get('/foods', async (req, res) => {
    Food.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    });
})

app.post('/products', async (req, res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
})

app.get('/products', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.status(204).end()
})

app.listen(9000, () => {
    console.log('Application is running on port 9000')
})