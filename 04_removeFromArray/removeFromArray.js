const removeFromArray = function(arr,...args) {
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        let add=true;
        for(let j=0;j<args.length;j++){
            if(arr[i]===args[j]){
                add=false;
                break;
            }
        }
        if(add){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
