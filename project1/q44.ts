interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...options: Array<[string, any]>): Car {
    const car: Car = {
      manufacturer,
      model
    };
  
    for (const [key, value] of options) {
      car[key] = value;
    }
  
    return car;
  }
  
  const myCar = createCar('Toyota', 'Camry', 'color', 'red', 'year', 2023);
  console.log(myCar);
  