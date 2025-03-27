// function calcA(){
//     console.log('a');
//     return undefined;
// }

// function calcB(){
//     console.log('b');
//     return true;
// }

// console.log(calcA() && calcB());


function calcA() {  
    console.log('a');
    return true;
}



function calcB() {  
    console.log('b');
    return false;
}


console.log(calcA || calcB())