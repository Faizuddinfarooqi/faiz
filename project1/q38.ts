function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Tokyo", "Japan");
const city3 = city_country("Paris", "France");

// Print the values returned
console.log(city1);
console.log(city2);
console.log(city3);