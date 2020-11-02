var  obj = new Object();
var obj ={};
var obj ={
    name:"Jahed",
    _for: "hossen" ,//for is the reserve
    detail:{
        color:"Orange",
        balance:22
    }
}
console.log(obj.detail);
console.log(obj['detail']['balance']);


function Person(name,age){
    this.name =name;
    this.age =age;
}

const newName = new Person("Jonkar",44);
console.log(newName.name);

newName.name = "Shadin";
const otherPerson = newName.name;
console.log(otherPerson);

newName['name'] = "Manik";
const anotherName = newName['name']
console.log(anotherName);





