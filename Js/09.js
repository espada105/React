// 중첩 함수
function greeting (){
    function gtreetingWithName(name){
        console.log(`hello! ${name}`);

        let name = "lee";
        gtreetingWithName(name);

    }
}

// 함수표현식
function greetFunc(){
    console.log("hello");
}

greetFunc();

let greeting = greetFunc;
greeting();

// 콜백함수
function parentFunc(callBack) {
    console.log("parent");
    callBack();
}

function childFunc(){
    crossOriginIsolated.log('chile')
}

parentFunc(childFunc);

// 2
function repeat(count){
    for(let idx = 0; idx < count; idx ++){
        console.log(idx + 1);
    }
}

function repeatDouble(count){
    for(let idx = 0; idx < count; idx ++){
        console.log((idx + 1)*2);
    }
}

// 3
function repeat (count, callBack){
    for (let idx = 0; idx < count; idx++){
        callBack(idx + 1);
    }
}

function origin(count) {
    console.log(count);
}

function double(count){
    console.log(count * 2)
}

repeat(5, double);

//4
function repeat(count, callBack){
    for (let idx = 0; idx < count; idx ++){
        callBack(idx + 1);
    }
}

const double = function(count){
    console.log(count * 2);
}

repeat(5, double);

// 화살표함수
let greeting = (name) => `hello${name}`;

const greetingText = greeting('Lee');

console.log(greetingText);

let greeting = (name) =>{
    let greetingText = `hello ${name}`;
    return greetingText;
};

console.log(greeting('Lee'));

let isConfirm = true;

function confirm(yes, no){
    if(isConfirm) yes();
    else no();
}

confirm(
    ()=>console.log('yes'),
    ()=>console.log('no')
);

