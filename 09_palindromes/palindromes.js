const palindromes = function (s) {
    let str="";
    for(let i=0;i<s.length;i++){
        if(s[i]!='.'&&s[i]!=','&&s[i]!=' '&&s[i]!='!'){
            str+=s.substring(i,i+1);
        }
    }
    let t=true;
    str=str.toLowerCase();
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-1-i]){
            t=false;
        }
    }
    return t;
};

// Do not edit below this line
module.exports = palindromes;
