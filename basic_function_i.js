
//I got 2 1/2 incorrect

function a(){
    return 35;
}
console.log(a())

//My prediction:
//35


function a(){
    return 4;
}
console.log(a()+a());

//My prediction:
//8


function a(b){
    return b;
}
console.log(a(2)+a(4));

//My prediction:
//6


function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));

//My prediction:
//3
//9


function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

//My prediction:
//40
//10


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//My prediction:
//4
//15 
//(Incorrect...both return statements in the if/else blcok would prevent the inner console.log from running)


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//My prediction:
//10 3
//30


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//My prediction:
//3
//4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//My prediction: 2, 4, 6, 8 (Incorrect: Forgot about the i++)


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//My prediction:
//0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9



function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

//My prediction:
//Nothing will happen...the function is defined but never called



function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

//My prediction:
//Nothing will happen...the function is defined but never called



var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//My prediction:
//10


var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//My prediction:
//15
//10



var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//My prediction:
//15

//Half point...I missed the output from the console.log inside the function