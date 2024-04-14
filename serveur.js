var express = require("express");
var app = express();
app.listen(8888);

app.get('/fichier/:nom', function(request, response) {
    console.log("renvoi d'un fichier");   
    console.log(request.params.nom) 
    console.log("test")
    response.sendFile(request.params.nom, {root: __dirname});    
});

app.get('/', function(request, response) {
    response.sendFile('main.html', {root: __dirname});
});


