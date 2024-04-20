const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let sum=0;
  for(let i=0;i<a.length;i++){
    sum+=a[i];
  }
  return sum;
};

const multiply = function(a) {
  let product=1;
  for(let i=0;i<a.length;i++){
    product*=a[i];
  }
  return product;
};

const power = function(base, power) {
	let answer=1;
  for(let i=1;i<=power;i++){
    answer*=base;
  }
  return answer;
};

const factorial = function(a) {
	let answer=1;
  for(let i=1;i<=a;i++){
    answer*=i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
