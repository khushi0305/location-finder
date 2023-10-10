const express= require('express');
const Model = require('../models/placeModel');
const router = express.Router();

router.post('/add', (req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
        res.json(err);
    });
    console.log('something');
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.get('/getbylocation/:location', (req, res) => {

    console.log(req.params.location);

    Model.find({location : req.params.location})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

router.get('/getbyid/:id', (req, res) => {
        Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });

});

router.put('/update/:id', (req, res) => {
        Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });
});


module.exports = router;