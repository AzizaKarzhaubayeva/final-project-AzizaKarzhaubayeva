const express = require('express');
const app = express();

const router = express.Router();

const exphbs = require('express-handlebars');
const hbs = exphbs.create();

const MongoClient = require('mongodb').MongoClient;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

router.get('/login_form', (req,res)=>{
    res.render('login.handlebars');
});

router.post('/login', (req,res)=>{
    let message ='';
    
     MongoClient.connect('mongodb://localhost:27017',(err,db)=>{
        if (err) throw err;
        
        var dbo = db.db("logins");
        
        const collection = dbo.collection("login");
        
    collection.find({login:req.body.login}).toArray((err,result)=>{
        console.log(req.body.login);
        if (result.length == 0){
            message = 'You are not authorized!';
        }
            let user_l='';
            let user_p;
                for (var i=0;i<result.length;i++){
                    user_l=result[i].login;
                    user_p=result[i].password;
                }
        
            if(user_l==req.body.login && user_p==req.body.password){
                
                if (!req.session.user)
                req.session.user = user_l;
                
                console.log("User saved")
                let template = "<div style='font-size:25px;margin:20px;' >Welcome " + req.session.user+"</div><a style='font-size:25px;margin:20px;' href='/admin'>View list of items</a><br/><a style='font-size:25px;margin:20px;' href='/admin/createItems'>Create and add item</a><br/><a href='/auth/logout' style='font-size:25px;margin:20px;'>Log out</a>"
                res.send(template);
            }
            else{
                message = 'You are not authorized!';
                res.send("<div style=font-size:20px>"+message+"</div>");
            } 
        });
     });
});

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
