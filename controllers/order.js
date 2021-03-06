/**
 * Created by Pavel on 12.09.2017.
 */
const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = (orderService, config) => {
    const router = express.Router();


    //add
    router.post('/add', (req, res) => {
        res.header('Content-Type', 'application/json');
        orderService.add(req.body,req.cookies['x-access-token'])
            .then((userId) => {
                res.send({success: true});
            })
            .catch((err) => res.error(err));
    });
router.get('/get',(req,res)=>{

    orderService.getOrderByID(req.cookies['x-access-token'])
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=> res.error(err));
})


  return router;
}