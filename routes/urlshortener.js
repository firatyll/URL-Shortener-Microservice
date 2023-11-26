const router = require("express").Router()
const isValidURL = require("../helpers/isValid")

let shorturls=[]
router.post("/api/shorturl" ,(req,res)=>{
    const longurl = req.body.url
    if(!isValidURL(longurl)){
        return res.json({
            error : "invalid url"
        })
    }
    let shorturl= Math.floor(Math.random()*100)
    for(let i =0;i<shorturls.length;i++){
        if(shorturl == shorturls[i].short_url){
            shorturl = Math.floor(Math.random()*100)
        }
    }
    shorturls.push({
        short_url : shorturl,
        original_url : longurl
    })
    console.log(shorturls)
    return res.json({
        original_url : longurl,
        short_url : shorturl
    })
})

router.get("/api/shorturl/:urlcode" ,(req,res)=>{
    const shorturlcode = req.params.urlcode
    let redirecturl
    for(let i =0;i<shorturls.length;i++){
        if(shorturlcode == shorturls[i].short_url){
            redirecturl = shorturls[i].original_url
        }
    }
    return res.redirect(redirecturl)
})

module.exports = router