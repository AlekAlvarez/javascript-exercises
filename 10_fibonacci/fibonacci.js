const fibonacci = function(index) {
    index=index*1;
    if(index<0)return "OOPS";
    if(index==0)return 0;
    let prev=0;let current=1;
    for(let i=1;i<index;i++){
        let temp=current;
        current+=prev;
        prev=temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
