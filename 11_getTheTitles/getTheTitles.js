const getTheTitles = function(Books) {
    const arr=[];
    for(let i=0;i<Books.length;i++){
        arr.push(Books[i].title);
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
