class FGA {
  constructor(name, dose, potencyD2, anticholingeric, sedation, ohtn, eps) {
    this.name = name;
    this.dose = dose;
    this.potencyD2 = potencyD2;
    this.anticholingeric = anticholingeric;
    this.sedation = sedation;
    this.ohtn = ohtn;
    this.eps = eps;
  }

  describe() {
    return `${this.name} has a starting dose of ${this.dose}mg, a ${this.potencyD2} antagonists potency at the dopamine D2 receptor`;
  }
}

//FGA instances
let chlorpromazine = new FGA("chlorpromazine", 100, "low", 3, 4, 3, 2);
let fluphenazine = new FGA("fluphenazine", 2, "high", 1, 1, 1, 3);
let haloperidol = new FGA("haloperidol", 2, "high", 1, 1, 1, 3);
let loxapine = new FGA("loxapine", 10, "intermediate", 2, 2, 2, 2);
let pimozide = new FGA("pimozide", 2, "high", 1, 1, 1, 3);
let thioridazine = new FGA("thioridazine", 100, "low", 3, 3, 3, 1);
let thiothixene = new FGA("thiothixene", 4, "high", 1, 1, 1, 3);
let trifluperazine = new FGA("trifluperazine", 5, "intermediate", 2, 1, 1, 2);

console.log(chlorpromazine.describe());
console.log(chlorpromazine);

let drugArray = [
  chlorpromazine,
  fluphenazine,
  haloperidol,
  loxapine,
  pimozide,
  thioridazine,
  thiothixene,
  trifluperazine,
];

let drugArray2 = [
  chlorpromazine,
  fluphenazine,
  haloperidol,
  loxapine,
  // pimozide,
  // thioridazine,
  // thiothixene,
  // trifluperazine,
];

// console.log(highD2);
//if (fgaObject.eps === 3) {
// console.log(`${fgaObject.name} `);

function getAllHighPotencyDrugs(drugs) {
  let highPotencyDrugs = [];

  for (let slotNumber = 0; slotNumber < drugs.length; slotNumber++) {
    // looping through the drug array
    let fgaObject = drugs[slotNumber]; // get the drug object for the current array slot
    if (fgaObject.potencyD2 === "high") {
      highPotencyDrugs.push(fgaObject.name);
    }
  }

  return highPotencyDrugs + " have high D2 potency";
}
console.log(getAllHighPotencyDrugs(drugArray));

function getHighEpsDrugs(drugs) {
  let highEpsDrugs = [];
  for (let slotNumber = 0; slotNumber < drugs.length; slotNumber++) {
    let fgaObject = drugs[slotNumber];
    if (fgaObject.eps === 2 || fgaObject === 3) {
      highEpsDrugs.push(fgaObject.name);
    }
  }
  return highEpsDrugs + " have high EPS ";
}

console.log(getHighEpsDrugs(drugArray));

function getLow(drugs) {
  let getLowD2 = drugArray.filter((drugs) => this.potencyD2 === "low");
}

// {} [] ""
