let command = process.argv.arvg[2];
let input = process.argv.slice(3);
console.log("command is:",command)
console.log("input is:",input)
let controllers = [
    {
        name: "sum",
        func: function (input){
            console.log("result is:",Number(input[0])+Number(input[1]))
        }
    },
    {
        name: "minus",
        func: function (input){
            console.log("result is:",Number(input[0])-Number(input[1]))
        }
    },
    {
    name: "print",
    func: function (input){
        let x ={
            name: input[0],
            email: input[1],
            age: input[2]
        }
        console.log("object is:",x)
        }
    } 
    ]
    for(let i=0; i<controllers.length;i++)
{
console.log("index:",i)
console.log("controllers[i],name:",controllers[i],name)
if(controllers[i.name===name]){
    controllers[i].func(input)
}
}