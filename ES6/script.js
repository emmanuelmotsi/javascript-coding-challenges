
// Town class
class Town {
    constructor(name, year, parks, streets) {
        this.name = name;
        this.year = year;
        this.parks = parks;
        this.streets = streets;
    }
    // 1. Tree density
    logTreeDensity() {
        parks.forEach(p => {
            p.treeDensity();
        });
    }

    // 2. Average age of each towns park.
    averageAge() {
        let totalAges = 0;
        this.parks.forEach(v => {
            totalAges += v.age();
        })
        let average = totalAges / this.parks.length;
        console.log(`Our ${this.parks.length} streets have an average of ${average} years!`);
    }

    // 3. Park with trees above 1000.
    thousandTrees() {
        for (const park of parks) {
            if (park.trees > 1000) {
                console.log(`${park.name} Park has more than 1000 trees.`);
            }
        }
    }

    // 4. Average length of streets.
    averageStreetLength() {
        let averageLength, totalLength = 0;
        streets.forEach(strt => {
            totalLength += strt.length
        });
        averageLength = totalLength / streets.length;
        console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, 
        with an average of ${averageLength}`);
    }

    // 5. size classification
    sizeClassification() {
        streets.forEach(s => {
            console.log(`${s.name}, built in ${s.year}, is a ${s.size} street.`);
        });
    }
}

// The Park class 
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

    treeDensity() {
        let density = this.trees / this.area;
        console.log(`${this.name} park has a tree density of ${density} km per square meter.`);
    }
}

// The Street class
class Street {
    constructor(name, year, length, size = 'normal') {
        this.name = name;
        this.year = year;
        this.length = length;
        this.size = size;
    }
}

// Init of parks, streets and town.
// Parks
let betties = new Park('Betties', 1990, 2000, 200);
let blaks = new Park('Blaks', 1995, 650, 345);
let wonderful = new Park('Wonderful', 1983, 1001, 576.45);

// Streets
let orange = new Street('Orange Street', 1992, 150);
let blackway = new Street('Blackway Avenue', 2000, 300, 'small');
let bloomdrive = new Street('Bloomdrive Avenue', 1998, 300.45, 'huge');

// Pass to array
let parks = [betties, blaks, wonderful];
let streets = [bloomdrive, blackway, bloomdrive];

// Town
let harare = new Town('Harare', 1900, parks, streets);

// REPORTS

console.log(`---PARKS REPORT FOR ${harare.name.toUpperCase()} BUILT IN ${harare.year}---`);
harare.averageAge();
harare.logTreeDensity();
harare.averageStreetLength();
console.log(`---STREETS REPORT FOR ${harare.name.toUpperCase()} BUILT IN ${harare.year}---`);
harare.averageStreetLength();
harare.sizeClassification();

