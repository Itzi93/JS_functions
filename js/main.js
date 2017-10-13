// Function Celcius to Fahrenheit

function celsiusToFahrenheit(celcius) {
  var temperatureFahrenheit = (celcius * (9/5)) + 32;
  console.log(celcius + 'ºC is ' + temperatureFahrenheit + 'ºF');
}

celsiusToFahrenheit(3);

// Function Fahrenheit to Celcius
function fahrenheitToCelcius(fahrenheit) {
  var temperatureCelcius = (fahrenheit - 32) * 5/9;
  console.log(fahrenheit + 'ºF is ' + temperatureCelcius + 'ºC');
}

fahrenheitToCelcius(100);


// Function Radius to Circumference

function radiusToCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log('If the radio size is ' + radius + ' then the size of the circumference will be ' + circumference);
}

radiusToCircumference(3);

// Function Pythagorean theorem

function pythagorean(a, b){
  var c = Math.sqrt((a * a) + (b * b));
  console.log(a + ' square + ' + b + ' square = ' + c + ' square');
}

pythagorean(2, 4);
