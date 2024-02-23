var car = 'subaru';
// Test 1: Is car == 'subaru'? Prediction: True.
console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 2: Is car == 'toyota'? Prediction: False.
console.log("Is car == 'toyota'? I predict False.");
console.log(car === 'toyota');
// Test 3: Is car != 'ford'? Prediction: True.
console.log("Is car != 'ford'? I predict True.");
console.log(car !== 'ford');
// Test 4: Is car != 'subaru'? Prediction: False.
console.log("Is car != 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 5: Is car starts with 'su'? Prediction: True.
console.log("Does car start with 'su'? I predict True.");
console.log(car.startsWith('su'));
// Test 6: Is car ends with 'baru'? Prediction: True.
console.log("Does car end with 'baru'? I predict True.");
console.log(car.endsWith('baru'));
// Test 7: Is car includes 'bar'? Prediction: True.
console.log("Does car include 'bar'? I predict True.");
console.log(car.includes('bar'));
// Test 8: Is car includes 'foo'? Prediction: False.
console.log("Does car include 'foo'? I predict False.");
console.log(car.includes('foo'));
// Test 9: Is car length greater than 5? Prediction: True.
console.log("Is car length greater than 5? I predict True.");
console.log(car.length > 5);
// Test 10: Is car length less than 3? Prediction: False.
console.log("Is car length less than 3? I predict False.");
console.log(car.length < 3);
