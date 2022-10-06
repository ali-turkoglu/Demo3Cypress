
class Car{
    constructor(name,model,year,color){
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    carAge(){
        let date = new Date();
        return date.getFullYear()-this.year;
    }
}

var myCar = new Car('Honda','Civic',2006,'White');

console.log('car age is : '+ myCar.carAge());

