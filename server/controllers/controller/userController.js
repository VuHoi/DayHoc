var mongoose = require('mongoose');
var dbConfig=require('../db')
mongoose.connect(dbConfig.url);

const Schema = mongoose.Schema;
var db = mongoose.connection;
var user =require('../models/User')

  
module.exports = function(app)
{

    // app.get('/api/hello', (req, res) => {
    //     user.find({"$or": [{"title": "haha"}, {"author": "113kjkjfa"}]}).skip(0).limit(2).then(item=>{
    //         res.send(item);
    //       })
        
    //   });

      app.get('/api/hello', (req, res) => {
        user.find({}).then(item=>{
            res.send(item);
          })
        
      });

      app.post('/api/hello',(req,res)=>{
          var User=req.body;
        user.create(User) .then(() => {
            res.json(User)
          })
          .catch((err) => {
            res.json(err)
          })
        
      })

}