// Radiología
var radiologia = [
  {
    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa"
  },
  {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "Isapre"
  },
  {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "Isapre"
  },
  {
    hora: "15:30",
    especialista: "Ana María Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa"
  },
  {
    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramón Ulloa",
    rut: "14989389-k",
    prevision: "Fonasa"
  }
];

var longitud = radiologia.length;
var primera = radiologia[0];
var ultima = radiologia[longitud - 1];

document.getElementById("longitud_r").innerHTML =
  "La cantidad de pacientes en <i>Radiología<i> son: " + longitud;

document.getElementById("primera_r").innerHTML =
  "<b>Primer paciente: </b>" +
  "<br>" +
  primera.paciente +
  "<br>" +
  primera.rut +
  " - " +
  primera.prevision;

document.getElementById("ultima_r").innerHTML =
  "<b>Último paciente: </b>" +
  "<br>" +
  ultima.paciente +
  "<br>" +
  ultima.rut +
  " - " +
  ultima.prevision;

// Traumatología
var traumatologia = [
  {
    hora: "08:00",
    especialista: "María Paz Altuzarra",
    paciente: "Paula Sánchez",
    rut: "15554774-5",
    prevision: "Fonasa"
  },
  {
    hora: "10:00",
    especialista: "Raúl Araya",
    paciente: "Angélica Navas",
    rut: "15444147-9",
    prevision: "Isapre"
  },
  {
    hora: "10:30",
    especialista: "María Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre"
  },
  {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre"
  },
  {
    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "Fonasa"
  },
  {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Méndez",
    rut: "9747535-8",
    prevision: "Isapre"
  },
  {
    hora: "12:30",
    especialista: "Andrés Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre"
  }
];

var longitud = traumatologia.length;
var primera = traumatologia[0];
var ultima = traumatologia[longitud - 1];

document.getElementById("longitud_t").innerHTML =
  "La cantidad de pacientes en <i>Traumatología<i> son: " + longitud;

document.getElementById("primera_t").innerHTML =
  "<b>Primer paciente: </b>" +
  "<br>" +
  primera.paciente +
  "<br>" +
  primera.rut +
  " - " +
  primera.prevision;

document.getElementById("ultima_t").innerHTML =
  "<b>Último paciente: </b>" +
  "<br>" +
  ultima.paciente +
  "<br>" +
  ultima.rut +
  " - " +
  ultima.prevision;

// dental
var dental = [
  {
    hora: "08:30",
    especialista: "Andrés Zúñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "Isapre"
  },
  {
    hora: "11:00",
    especialista: "María Pía Zañartu",
    paciente: "Ángel Muñoz",
    rut: "9878789-2",
    prevision: "Isapre"
  },
  {
    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "Fonasa"
  },
  {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernández",
    rut: "18887662-k",
    prevision: "Fonasa"
  },
  {
    hora: "13:30",
    especialista: "Eduardo Viñuela",
    paciente: "Hugo Sánchez",
    rut: "17665461-4",
    prevision: "Fonasa"
  },
  {
    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepúlveda",
    rut: "14441281-0",
    prevision: "Isapre"
  }
];

var longitud = dental.length;
var primera = dental[0];
var ultima = dental[longitud - 1];

document.getElementById("longitud_d").innerHTML =
  "La cantidad de pacientes en <i>Dental<i> son: " + longitud;

document.getElementById("primera_d").innerHTML =
  "<b>Primer paciente: </b>" +
  "<br>" +
  primera.paciente +
  "<br>" +
  primera.rut +
  " - " +
  primera.prevision;

document.getElementById("ultima_d").innerHTML =
  "<b>Último paciente: </b>" +
  "<br>" +
  ultima.paciente +
  "<br>" +
  ultima.rut +
  " - " +
  ultima.prevision;

// document.write(radiologia[0].especialista);
// document.getElementById("ejemplo").innerHTML = radiologia[0].paciente;
