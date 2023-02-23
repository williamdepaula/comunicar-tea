const lista1 = [
  {
    id: "1",
    name: "Eu quero",
    img: "/images/eu_quero.jpg",
  },
  {
    id: "2",
    name: "Eu posso",
    img: "/images/eu_posso.jpg",
  },
  {
    id: "3",
    name: "Eu tenho",
    img: "/images/eu_tenho.jpg",
  },
  {
    id: "4",
    name: "Espere",
    img: "/images/espere.jpg",
  },
  {
    id: "5",
    name: "Sim",
    img: "/images/sim.jpg",
  },
  {
    id: "6",
    name: "Não",
    img: "/images/nao.jpg",
  },
];

const lista2 = [
  {
    id: "7",
    name: "Comer",
    img: "/images/comer.jpg",
  },
  {
    id: "8",
    name: "Salada",
    img: "/images/salada.jpg",
  },
  {
    id: "9",
    name: "Bife",
    img: "/images/bife.jpg",
  },
  {
    id: "10",
    name: "Chocolate",
    img: "/images/chocolate.jpg",
  },
  {
    id: "11",
    name: "Ir para casa",
    img: "/images/casa.jpg",
  },
];

const indexView = (req, res) => {
  res.render("index", {
    lista1: lista1,
    lista2: lista2,
  });
};

module.exports = {
  indexView,
};
