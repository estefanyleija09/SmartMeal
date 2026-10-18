const RECETAS = [
  {
    id: 1,
    nombre: "Quesadillas de pollo",
    tipo: "comida",
    ingredientes: ["tortilla", "pollo", "queso"],
    minutos: 20,
    costo: 45,
    etiquetas: ["sinGluten"],
    descripcion: "Tortillas de maíz rellenas de pollo y queso."
  },
  {
    id: 2,
    nombre: "Sopa de verduras",
    tipo: "comida",
    ingredientes: ["verduras", "agua", "sal", "fideo"],
    minutos: 30,
    costo: 35,
    etiquetas: ["vegetariano"],
    descripcion: "Sopa ligera con verduras de temporada."
  },
  {
    id: 3,
    nombre: "Huevos a la mexicana",
    tipo: "desayuno",
    ingredientes: ["huevo", "tomate", "cebolla", "chile"],
    minutos: 15,
    costo: 25,
    etiquetas: ["vegetariano", "sinGluten", "rapido"],
    descripcion: "Huevos revueltos con tomate, cebolla y chile."
  },
  {
    id: 4,
    nombre: "Ensalada de pollo",
    tipo: "comida",
    ingredientes: ["pollo", "lechuga", "tomate", "limon"],
    minutos: 15,
    costo: 40,
    etiquetas: ["ligero", "rapido", "sinGluten"],
    descripcion: "Ensalada fresca con pollo a la plancha."
  },
  {
    id: 5,
    nombre: "Arroz con verduras",
    tipo: "comida",
    ingredientes: ["arroz", "verduras", "aceite", "sal"],
    minutos: 35,
    costo: 30,
    etiquetas: ["vegetariano"],
    descripcion: "Arroz salteado con verduras."
  },
  {
    id: 6,
    nombre: "Pasta con atún",
    tipo: "comida",
    ingredientes: ["pasta", "atun", "tomate", "cebolla"],
    minutos: 25,
    costo: 42,
    etiquetas: [],
    descripcion: "Pasta con salsa de atún y tomate."
  },
  {
    id: 7,
    nombre: "Tacos de carne asada",
    tipo: "comida",
    ingredientes: ["tortilla", "carne", "cebolla", "cilantro", "limon"],
    minutos: 40,
    costo: 70,
    etiquetas: ["sinGluten"],
    descripcion: "Tacos con carne asada, cebolla y cilantro."
  },
  {
    id: 8,
    nombre: "Avena con fruta",
    tipo: "desayuno",
    ingredientes: ["avena", "leche", "platano", "miel"],
    minutos: 10,
    costo: 20,
    etiquetas: ["vegetariano", "rapido"],
    descripcion: "Avena cocida con plátano y miel."
  },
  {
    id: 9,
    nombre: "Smoothie de frutas",
    tipo: "colacion",
    ingredientes: ["platano", "fresa", "leche", "miel"],
    minutos: 5,
    costo: 25,
    etiquetas: ["vegetariano", "rapido", "ligero"],
    descripcion: "Batido de fresa y plátano con leche."
  },
  {
    id: 10,
    nombre: "Crema de calabaza",
    tipo: "comida",
    ingredientes: ["calabaza", "cebolla", "crema", "sal"],
    minutos: 35,
    costo: 32,
    etiquetas: ["vegetariano"],
    descripcion: "Crema espesa de calabaza."
  },
  {
    id: 11,
    nombre: "Pollo a la plancha con verduras",
    tipo: "comida",
    ingredientes: ["pollo", "verduras", "aceite", "sal"],
    minutos: 30,
    costo: 55,
    etiquetas: ["ligero", "sinGluten"],
    descripcion: "Pechuga de pollo con verduras salteadas."
  },
  {
    id: 12,
    nombre: "Sándwich de atún",
    tipo: "colacion",
    ingredientes: ["pan", "atun", "lechuga", "tomate"],
    minutos: 10,
    costo: 28,
    etiquetas: ["rapido"],
    descripcion: "Sándwich rápido con atún y vegetales."
  },
  {
    id: 13,
    nombre: "Chilaquiles rojos",
    tipo: "desayuno",
    ingredientes: ["tortilla", "salsa", "queso", "crema", "cebolla"],
    minutos: 25,
    costo: 35,
    etiquetas: ["vegetariano"],
    descripcion: "Totopos bañados en salsa roja con queso y crema."
  },
  {
    id: 14,
    nombre: "Frijoles refritos con huevo",
    tipo: "desayuno",
    ingredientes: ["frijol", "huevo", "aceite", "sal"],
    minutos: 20,
    costo: 22,
    etiquetas: ["vegetariano", "sinGluten"],
    descripcion: "Frijoles refritos acompañados de huevo."
  },
  {
    id: 15,
    nombre: "Pechuga encebollada",
    tipo: "comida",
    ingredientes: ["pollo", "cebolla", "jitomate", "arroz"],
    minutos: 45,
    costo: 60,
    etiquetas: ["sinGluten"],
    descripcion: "Pechuga guisada con cebolla y jitomate."
  },
  {
    id: 16,
    nombre: "Gelatina con fruta",
    tipo: "colacion",
    ingredientes: ["gelatina", "fruta", "leche"],
    minutos: 10,
    costo: 15,
    etiquetas: ["vegetariano", "rapido", "ligero"],
    descripcion: "Postre ligero de gelatina con fruta."
  },
  {
    id: 17,
    nombre: "Cena de tortilla francesa",
    tipo: "cena",
    ingredientes: ["huevo", "leche", "queso", "pan"],
    minutos: 15,
    costo: 24,
    etiquetas: ["vegetariano", "rapido"],
    descripcion: "Tortilla francesa rellena de queso."
  },
  {
    id: 18,
    nombre: "Caldo de pollo",
    tipo: "cena",
    ingredientes: ["pollo", "verduras", "agua", "sal", "limon"],
    minutos: 50,
    costo: 50,
    etiquetas: ["sinGluten"],
    descripcion: "Caldo casero de pollo con verduras."
  }
];

const INGREDIENTES_COMUNES = [
  "huevo", "tomate", "cebolla", "queso", "pollo", "arroz", "pasta", "tortilla",
  "lechuga", "atun", "avena", "leche", "platano", "fresa", "frijol", "carne",
  "papa", "calabaza", "pan", "miel", "aceite", "sal", "crema", "salsa",
  "verduras", "chile", "limon", "cilantro", "gelatina", "fruta", "jitomate", "fideo", "agua"
];
