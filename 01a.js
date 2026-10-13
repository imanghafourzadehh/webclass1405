let command = process.arvg[2];
let input = process.arvg.slice(3);
function sum (a,b){
    console.log("sum is: ", Number(a) + Number(b));
}
function minus (a,b){
    console.log("result is :", Number(a) - Number(b));
}

function minus (a,b){
    console.log("result is :");
}
function print (input){
    let x ={
        name: input[0],
        email: input[1],
        age: input[2]
    }
    console.log("object is :",x)
}

if (command ==='sum'){
    sum(input[0] , input[1])
}
else if (command ==='minus'){
    minus(input[0] , input[1])
} 
else if (command === 'print'){
    print(input)
        
}
else{
    console.log('command not found')
}


