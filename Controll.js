const Mailer = require('./Mailer')
const fs = require('fs')
const path = require('path')
const Db = require('./db')

exports.send = function(req,res){
    console.log(req.body)
    let M = new Mailer(req.body)
     M.mail().then(
     (response) => res.status(200).json({response: response})
     ).catch(
    (error) => res.status(401).json({response: error})
     )

}
exports.sendAssets = function(req,res){
    //console.log("recieved")
    new Db().get().then( assets => {
        //console.log(assets)
        res.status(200).json({asset:assets})
    } ).catch( err =>   res.status(404).json({msg: err}) )
    
}
exports.sendAsset = function(req,res){
    let id = req.params.id
    const db = new Db(id)
    db.get_one().then( asset => {
        res.status(200).json({asset: asset})
    } ).catch( err => {
        res.status(404).json({err: err})
    } )
   
}
exports.addAsset = function(req,res){
let db = new Db(req.body)
//console.log(req.body)
db.add_prop().then(msg => {
res.status(200).json({msg: msg})
}).catch((err) => {
    console.log(err)
    res.status(400).json({msg: "error updating."})
})
}
exports.PropImgHandler = (req,res) => {
    //console.log(req.image,"hello")
    let data = {
        id: req.params.id,
        image:req.image
    }
    //console.log(data)
    let db = new Db(data,"add_asset_images")
    db.edit_asset().then(msg => {
    res.status(200).json({msg: msg})
    }).catch((err) => {
        console.log(err)
    res.status(400).json({msg: "error updating."})
    })
    //write changes to properties.json  
}
exports.deleteProp  =function(req,res){
 
    
    let db = new Db(req.params.id,"delete_asset")
    //console.log(req.params.id)
    const dir = `./public/properties/${req.params.id}`
    db.edit_asset().then(msg => {
        fs.exists(dir, exist => {
            if (exist) {
              return fs.rmdir(dir,{ recursive: true },err => {
                if( err ){
                    console.error(err)
                }
                else{
                    res.status(200).json({msg: msg})
                }
    
              })
            }else{
                res.status(200).json({msg: msg})
            }
            })
   
    }).catch((err) => {
        //console.log(err)
    res.status(400).json({msg: "error updating."})
        })
}