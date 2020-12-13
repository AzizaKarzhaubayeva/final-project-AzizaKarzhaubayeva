const express = require('express');
const app = express();

const router = express.Router();

const exphbs = require('express-handlebars');
const hbs = exphbs.create();

router.use(express.static('public'));
router.use(express.static('files'));

const MongoClient = require('mongodb').MongoClient;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



router.get('/headwears',(req,res)=>{
    const collection = req.app.collection;
        collection.find({class:"headwears"}).toArray((err,result)=>{
            if (err) throw err;
            
            res.render('headwears.handlebars',{result:result,style:'headwears.css'});
            
        })
})
     
router.get('/dresses',(req,res)=>{
    const collection = req.app.collection;
    collection.find({class:"dresses"}).toArray((err,result)=>{
        if (err) throw err;
        
        res.render('dresses.handlebars',{result:result,style:'dresses.css'});
    })
})

router.get('/shapan',(req,res)=>{
    const collection = req.app.collection;
    collection.find({class:"Shapan"}).toArray((err,result)=>{
        if (err) throw err;
        
            res.render('shapan.handlebars',{result:result,style:'shapan.css'});

    })
})

router.get('/pants',(req,res)=>{
    const collection = req.app.collection;
    collection.find({class:"pants"}).toArray((err,result)=>{
        if (err) throw err;
        
            res.render('pants.handlebars',{result:result,style:'pants.css'});
    })
})

router.get('/belts',(req,res)=>{
    const collection = req.app.collection;
    collection.find({class:"belts"}).toArray((err,result)=>{
        if (err) throw err;
        
            res.render('belts.handlebars',{result:result,style:'belts.css'});

    })
})

router.get('/jewelery',(req,res)=>{
    const collection = req.app.collection;
//    collection.find({class_t:""}).toArray((err,result)=>{
//        
//    })
    collection.find({class:"jewelery"}).toArray((err,result)=>{
        if (err) throw err;
        
            res.render('jewelery.handlebars',{result:result,style:'jewelery.css'});

    })
})

router.get('/headwears/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
            console.log(result);
                res.render('Element.handlebars',{element:result});
            
        });
    });

router.get('/dresses/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
                res.render('Element.handlebars',{element:result});
            
        });
    });

router.get('/shapan/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
                res.render('Element.handlebars',{element:result});
            
        });
    });

router.get('/pants/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
                res.render('Element.handlebars',{element:result});
            
        });
    });

router.get('/belts/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
                res.render('Element.handlebars',{element:result});
            
        });
    });

router.get('/jewelery/:id',(req,res)=>{
    const collection = req.app.collection;
        collection.findOne({id:req.query.id},(err,result)=>{
        if (err) throw err;
            
                res.render('Element.handlebars',{element:result});
            
        });
    });

module.exports = router;
