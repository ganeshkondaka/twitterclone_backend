import express, { Router } from "express";

const p_router = express.Router()
p_router.get('/homepage',(req,res)=>{
    res.json({
        msg:"homepage",
    })
})

p_router.get('/alltweets')
p_router.get('/usertweets/:id')

p_router.post('/posttweet')
p_router.put('/edit/:id')
p_router.delete('/edit/:id')

export default p_router;
