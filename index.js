'use sctrict'

 var mongoose = require('mongoose');
 var app = require ('./app');
 var port = 3800;
 //var uri = 'mongodb://localhost:27017/pooleddemo';
 var uri = 'mongodb+srv://agrupados:agrupados@cluster0-eo1s1.mongodb.net/test?retryWrites=true&w=majority';
 mongoose.set('useFindAndModify', false);
 mongoose.Promise - global.Promise;
 
 mongoose.connect( uri, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('++ DB is Connect');

        //create server
        app.listen(port, () => {
            console.log(uri, port );
        });
    })
    .catch(err => console.log(err));
