var fs = require('fs');

fs.writeFile('posts.txt', '"userId": 1,\n"id": 1, \n"title": "delectus aut autem", \n"completed": fasle', (err) => {

   //Return error if there is an error from creating the file 
    if (err) throw err;
    console.log('file successfully created');
})