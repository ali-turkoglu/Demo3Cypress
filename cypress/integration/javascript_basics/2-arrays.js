
let tools = ['selenium','cypress','wdio','Uft','protoctor']

const string = tools.toString();

console.log(string);


console.log(tools);
const join = tools.join(' * ');
console.log(join);

const pop = tools.pop();
console.log(tools);

const push = tools.push('webshare');
console.log(tools);

const splice = tools.splice(1,0,'cucumber');
console.log(tools);

const sort = tools.sort();
console.log(tools);

const reverse = tools.reverse();
console.log(tools);

tools.forEach((value) => {
    if(value== 'cypress'){
        console.log('cypress is trending');
    }else{
        console.log('Element not found');
    }
})

