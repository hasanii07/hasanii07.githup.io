//  VARIABLER
let antallPenger = 0;
let antallAnsatte = 0;
let antallMaskiner = 0;

let maskinPris = 10;
let ansattPris = 5;
let antallBiler = 0;

let harBil = false;
let bilPris = 1000000;

// FUNKSJONER
function sellIce() {
  antallPenger += 1 + antallAnsatte + antallMaskiner;
  updateUI();
}

function updateUI() {
  document.getElementById("penger").textContent = antallPenger;
  document.getElementById("maskiner").textContent = antallMaskiner;
  document.getElementById("ansatter").textContent = antallAnsatte;
  document.getElementById("biler").textContent = antallBiler;

  document.getElementById(
    "maskinBtn"
  ).textContent = `Kjøp Maskin (${maskinPris}💰)`;

  document.getElementById(
    "ansattBtn"
  ).textContent = `Ny Ansatt (${ansattPris}💰)`;
}

//  MASKINER
function buyMaskin() {
  if (antallPenger >= maskinPris) {
    antallPenger -= maskinPris;
    antallMaskiner++;
    maskinPris *= 4;
    alert("Du kjøpte en ny maskin!");
    updateUI();
  } else {
    alert("Du har ikke nok penger til å kjøpe en maskin!");
  }
}
// ANSATTER
function buyAnsatt() {
  if (antallPenger >= ansattPris) {
    antallPenger -= ansattPris;
    antallAnsatte++;
    ansattPris *= 4;
    alert("Du ansatte en ny medarbeider! ");
    updateUI();
  } else {
    alert("Du har ikke nok penger til å ansette noen!");
  }
}

function kjøpBil() {
  if (harBil) {
    alert("Du eier allerede bilen! ");
  } else if (antallPenger >= bilPris) {
    antallPenger -= bilPris;
    harBil = true;
    alert("Gratulerer! Du kjøpte en bil! ");
    updateUI();
  } else {
    alert("Du har ikke nok penger til å kjøpe bilen ennå! 💸");
  }
}
