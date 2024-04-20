const findTheOldest = function(peoples) {
    let name=""; let max=0;
    for(let i=0;i<peoples.length;i++){
        let age=0;
        if(peoples[i].yearOfDeath==undefined){
            age=2024-peoples[i].yearOfBirth;
        }
        else{
            age=peoples[i].yearOfDeath-peoples[i].yearOfBirth;
        }
        if(age>max){
            name=peoples[i];
            max=age;
        }
    }
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
