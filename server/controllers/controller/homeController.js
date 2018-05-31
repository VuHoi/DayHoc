


module.exports=function(app){
    const items=[
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
        {title:"vu khac hoi",content:"hoi dep trai hahahahahahah"},
    ]

    app.get('/api/allroom', (req, res) => {
       
            res.send(items);
        
      });
      app.post('/api/room',(req,res)=>{
        var room=req.body;
        items.push(room);
        res.end("yes")
      })
    //   app.update('/api/room',(req,res)=>{
    //     var room=req.body;
    //     items.push(room);
    //   })


}