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

radiologia.pop();
radiologia.shift();

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

traumatologia.push(
  {
    hora: "09:00",
    especialista: "René Poblete",
    paciente: "Ana Gellona",
    rut: "13123329-7",
    prevision: "Isapre"
  },
  {
    hora: "09:30",
    especialista: "María Solar",
    paciente: "Ramiro Andrade",
    rut: "12221451-K",
    prevision: "Fonasa"
  },
  {
    hora: "10:00",
    especialista: "Raúl Loyola",
    paciente: "Carmen Isla",
    rut: "10112348-3",
    prevision: "Isapre"
  },
  {
    hora: "10:30",
    especialista: "Antonio Larenas",
    paciente: "Pablo Loayza",
    rut: "13453234-1",
    prevision: "Isapre"
  },
  {
    hora: "12:00",
    especialista: "Matías Aravena",
    paciente: "Susana Poblete",
    rut: "14345656-6",
    prevision: "Fonasa"
  }
);

var previsionF = "Fonasa";
var previsionI = "Isapre";

var prevision_final = traumatologia.map(function(objeto) {
  if (objeto.prevision == previsionF) {
    objeto.prevision = previsionI;
  } else if (objeto.prevision == previsionI) {
    objeto.prevision = previsionF;
  }
  return objeto;
});

prevision_final.forEach(function(objeto) {
  document.getElementById("traum_prev").innerHTML +=
    "<li class=" +
    "tram" +
    ">" +
    [objeto.prevision, objeto.rut].join("; ") +
    "<br>" +
    "</li>";
});

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

var datos = [];
var valor = [];
for (let i = 0; i < dental.length; i++) {
  valor[0] = dental[i].hora;
  valor[1] = dental[i].especialista;
  valor[2] = dental[i].paciente;
  valor[3] = dental[i].rut;
  valor[4] = dental[i].prevision;
  datos.push(valor);
  valor = [];
}

for (let j = 0; j < datos.length; j++) {
  document.getElementById("dental_lista").innerHTML +=
    "<li class=" + "hola" + ">" + datos[j].join(" - ") + "</li>";
}

// Lista total de pacientes (Radiología, Traumatologia y Dental)
var total_pacientes = radiologia.concat(traumatologia, dental);

for (let i = 0; i < total_pacientes.length; i++) {
  document.getElementById("lista_total").innerHTML +=
    "<li class=" +
    "chao" +
    ">" +
    total_pacientes[i].paciente +
    "<br>" +
    "</li>";
}

//
//
//
//
// let nombres = dental.map(item => item.paciente);
// let horas = dental.map(item => item.hora);
// let horaString = horas.join("-");
// let nameString = nombres.join("-");
// document.getElementById("dental_lista").innerHTML =
//   nombres.join("-") + horas.join("-");
//
//
// document.write(radiologia[0].especialista);
// document.getElementById("ejemplo").innerHTML = radiologia[0].paciente;
