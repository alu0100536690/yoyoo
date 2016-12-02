// importar
    var express = require('express');
    
    // instanciar
    var app = express();
    var path = require('path');
    
    var exec = require('child_process').exec; 

    
   // ruteo

   app.use(express.static(path.join(__dirname,'./txt')));


   app.get('/', function(request, response) {
     response.send('index');  
   });


app.post('/sync', function(request, response) {
        function puts(error, stdout, stderr) {
           console.log("Salida:"+stdout);
           if(error) console.log("Error:"+error);
         }

                           
   exec('git clone https://github.com/alu0100536690/yoyoo.git'); 
   exec("git pull https://github.com/alu0100536690/yoyoo.git  master", puts);
   response.redirect('/');
}); 

     
    // escuchar
   // app.listen(8080);
   app.set('port', process.env.PORT || 8080);


//heroku git:remote -a heroku-project-name    
app.listen(app.get('port'), function() {
  console.log('Servidor escuchando en el puerto:'+app.get('port'));
});


module.exports = app;
