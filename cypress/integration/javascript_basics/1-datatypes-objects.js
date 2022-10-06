

var name = 'Ali';
var age = 46;
var name_object = {firstname: 'Ali', lastname:'Turkoglu'};
var truth = true;
var sheets =['html','CSS'];
var a = null;


var students ={
    firstName:'Ali',
    lastName: 'Turkoglu',
    age:46,
    height:177,

    fullName: function(){
        return this.firstName+' '+this.lastName
    }

}

const ageValue = students.age

console.log(ageValue);
console.log(students.fullName());