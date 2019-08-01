
class Town {
    constructor(parks, streets) {
        this.parks = parks;
        this.streets = streets;
    }

    averageAge() {
        let totalAges = 0;
        this.parks.forEach(v => {
            totalAges += v.age();
        })
        let average = totalAges / this.parks.length;
        console.log(`Our ${this.parks.length} have an average of ${average} years!`);
    }

    totalStreets() {
        // code
    }

    averageStreetLength() {
        //  
    }
}

class Park {
    constructor(name, year, trees, area) {
        this.name = name;
        this.year = year;
        this.trees = trees;
        this.area = area;
    }

    age() {
        return new Date().getFullYear() - this.year;
    }

    treeDesity() {
        let density = this.numTrees / this.parkArea;
        console.log(density);
    }
}

class Street {
    constructor(name, year, length, size = 'normal') {
        this.name = name;
        this.year = year;
        this.length = length;
        this.size = size;
    }
}

// Parks
let one = new Park('Betties', '1990', 5, 100);
let two = new Park('Blaks', '1995', 3, 50);
// Streets
let str1 = new Street('orange', '1992', 150);
let str2 = new Street('blackway', '2000', 300, 'small');


let parks = [one, two];
let streets = [str1, str2];

let town1 = new Town(parks, streets);

