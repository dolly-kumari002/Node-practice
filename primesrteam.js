const fs = require("fs");
const writeStrem = fs.createWriteStream("sample.txt");

function isPrime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
}
for(let i=1; i<=100; i++){
    if(isPrime(i)){
        writeStrem.write(i + "\n");
    }
}
writeStrem.end();

writeStrem.on("finish",()=>{
    console.log("Task Completed");
});
writeStrem.on("error",(err)=>{
    console.log("Error:",err);
})