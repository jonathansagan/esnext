/* // Let
let favoriteCityId = "Rome";
console.log(favoriteCityId);
favoriteCityId = 'Paris';
console.log(favoriteCityId);*/

/* // Const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
citiesId.push("Tokyo");
console.log(citiesId); */

/* // Création d’objet
const weather = function getWeather(cityId) {
  let city = cityId.toUpperCase();
  const temperature = 20;
  return { city, temperature };
};
console.log(weather("paris"));


// Affectation destructurée
const city = weather("paris").city;
console.log(city);
const temperature = weather("paris").temperature;
console.log(temperature); */

/* // Rest operator
let [parisId, nycId, ...leResteDesValeurs] = citiesId;
console.log(parisId);
console.log(nycId); 
console.log(leResteDesValeurs.length); */

// Classe
class Trip {
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  toString() {
    return (
      "Trip [" +
      this.id +
      ", " +
      this.name +
      ", " +
      this.imageUrl +
      ", " +
      this._price +
      "]"
    );
  }

  static getDefaultTrip() {
    return new Trip(
      "rio-de-janeiro",
      "Rio de Janeiro",
      "img/rio-de-janeiro.jpg"
    );
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

// Héritage
class FreeTrip extends Trip {
  constructor(id, name, imageUrl) {
    super(id, name, imageUrl);
    super.price = 0;
  }
  // redéfinition de méthode
  toString() {
    return "Free" + super.toString();
  }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());


//Promise, Set, Map, Arrow Function
class TripService {
  constructor() {
    this.setTrip = new Set();
    setTrip.add(new Trip("paris", "Paris", "img/paris.jpg"));
    setTrip.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
    setTrip.add(
      new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    );
  }

  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
      }, 2000);
    });
  }
}
/**/

class PriceService {
  constructor() {
    this.mapTrip = new Map();
    this.mapTrip.set("paris", 100);
    this.mapTrip.set("rio-de-janeiro", 800);
  }
  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ici l'exécution du code est asynchrone
        // TODO utiliser resolve et reject en fonction du résultat de la recherche
      }, 2000);
    });
  }
}
