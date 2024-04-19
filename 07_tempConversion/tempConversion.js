const convertToCelsius = function(temp) {
  temp=(temp-32)*5/9;
  temp*=10;
  temp=Math.round(temp);
  temp/=10;
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp=temp*9/5+32;
  temp*=10;
  temp=Math.round(temp);
  temp/=10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
