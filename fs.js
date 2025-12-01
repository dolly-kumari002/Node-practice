// const { error } = require('console');
// const fs = require('fs');
// fs.writeFileSync('example.txt','hello dolly,This is node js');
// console.log('file created and written successfully');

// const fs = require('fs');
// fs.writeFile('example 2 .txt','Async write example',(err)=>{
//     if(err) throw err;
//     console.log('file created successfully');
// });

//read

// const fs = require('fs');
// const data = fs.readFileSync('example.txt','utf-8');
// console.log('file content',data);

// const fs = require('fs');
// const data = fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log('file content',data);
// });

fs.appendFileSync('example.txt', '\nAppended text added here!');
console.log('Data appended successfully!');

fs.appendFile('example.txt', '\nMore data appended!', (err) => {
  if (err) throw err;
  console.log('Appended data (async)!');
});

fs.renameSync('example.txt', 'newExample.txt');
console.log('File renamed successfully!');

fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});

fs.unlinkSync('newExample.txt');
console.log('File deleted successfully!');

fs.unlink('newExample.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});

if(fs.existsSync('example.txt')){
    console.log('file exists');
}else{
    console.log('file not exis');
}