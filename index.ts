console.log("bonjour");
//addition a+b sans déclaration de variable préalable
let a=10
let b=20
console.log("résultat=",a+b);
//a+b dehors de la fonctio
function add(a:number ,b:number):void

{
    
   console.log("résultat",a + b);
}
// bonjour dans 2sec
setTimeout(()=>{
    console.log("message apres 2sc");
},2000);



//message x fois boucle for 
for(let i = 0; i < 10; i++) {
    console.log("message", i);
}

// message x fois avec while 
let rep=10;
while(rep<10){
    console.log("message2")
}


//correction
function addition (a : number, b: number) : number {
    return a +b;
}
console.log(addition(5,5))




let rep1 = 0;
while (rep1 < 10) {
    console.log("message2");
    rep1++; 
}
