console.log(6/2);
console.log(5/2);
console.log(Math.floor(5/2));
console.log(parseInt('123',20));
console.log(parseInt('010'));
console.log(parseInt('11',2));
console.log(parseInt('hello',10));
let name = "jahed";
console.log(name.length);
console.log(name.charAt(0));
console.log(name.replace('jahed','jebon'));
console.log(name.toUpperCase());
console.log('3' + 3 +4);


function newName(){
    var nam = "jahed";
    nam ="jebon"
    if (nam == "jebon"){
        return  nam+=" khan";
    }
    else if(nam == "jahed"){
        return nam+=" hossen";
    }
    else{
        return nam+="maow";
    };

}

console.log(newName());
//ternary operator
const age =18;
const allow =( age >=18) ? 'yes' :'no';
console.log(allow);