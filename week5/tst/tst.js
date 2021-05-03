var a = 0;
var b = 1;
var c = 2;

if(a || c){
    do stuff;
} else{
    do other stuff;
}

//for Loops

for(var i = 0; i < 10; i++){
    console.log("hello" + i)
}


for(var i = 0; i < 15; i++){
    console.log("hello" + ( i + 2 ));
}

for(var i = 0; i < 15; i += 2){//use += 
    console.log("hello" + (i));
}
