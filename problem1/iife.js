// Immediately Invoked Function Experssion(IIFE)

(function chai(){
    console.log(`Db connected`);
}) ();

((name)=>{
    console.log(`DB connected Two ${name}`);
})("yahya")