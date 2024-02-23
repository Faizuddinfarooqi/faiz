// Define the describe_city function
function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan"); // Non-default country
describe_city("New York"); // Default country (USA)
describe_city("Tokyo", "Japan"); // Non-default country