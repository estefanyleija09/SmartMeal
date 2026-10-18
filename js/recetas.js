const RECETAS = [
  {
    id: 1,
    nombre: "Quesadillas de pollo",
    tipo: "lunch",
    ingredientes: ["tortilla", "pollo", "queso"],
    minutos: 20,
    costo: 45,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Tortillas de maíz rellenas de pollo y queso.",
    pasos: [
      "Cocina el pollo y desmenúzalo.",
      "Mezcla el pollo con el queso rallado.",
      "Calienta la tortilla en un sartén a fuego medio.",
      "Agrega el relleno y dobla la tortilla.",
      "Dora por ambos lados y sirve caliente."
    ]
  },
  {
    id: 2,
    nombre: "Sopa de verduras",
    tipo: "lunch",
    ingredientes: ["verduras", "agua", "sal", "fideo"],
    minutos: 30,
    costo: 35,
    etiquetas: ["vegetarian", "vegan", "gluten-free"],
    descripcion: "Sopa ligera con verduras de temporada.",
    pasos: [
      "Lava y corta las verduras en trozos.",
      "Hierve el agua con una pizca de sal.",
      "Agrega las verduras y el fideo.",
      "Cocina de 20 a 25 minutos a fuego medio.",
      "Rectifica de sal y sirve caliente."
    ]
  },
  {
    id: 3,
    nombre: "Huevos a la mexicana",
    tipo: "breakfast",
    ingredientes: ["huevo", "tomate", "cebolla", "chile"],
    minutos: 15,
    costo: 25,
    etiquetas: ["vegetarian", "gluten-free", "high-protein"],
    descripcion: "Huevos revueltos con tomate, cebolla y chile.",
    pasos: [
      "Pica el tomate, la cebolla y el chile.",
      "Sofríe los vegetales durante 3 minutos.",
      "Agrega los huevos batidos.",
      "Revuelve hasta cuajar al gusto.",
      "Sirve acompañado de tortillas."
    ]
  },
  {
    id: 4,
    nombre: "Ensalada de pollo",
    tipo: "lunch",
    ingredientes: ["pollo", "lechuga", "tomate", "limon"],
    minutos: 15,
    costo: 40,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Ensalada fresca con pollo a la plancha.",
    pasos: [
      "Cocina y desposta el pollo.",
      "Lava la lechuga y corta el tomate.",
      "Mezcla todos los ingredientes en un tazón.",
      "Adereza con limón, sal y aceite.",
      "Sirve fría."
    ]
  },
  {
    id: 5,
    nombre: "Arroz con verduras",
    tipo: "lunch",
    ingredientes: ["arroz", "verduras", "aceite", "sal"],
    minutos: 35,
    costo: 30,
    etiquetas: ["vegetarian", "vegan"],
    descripcion: "Arroz salteado con verduras.",
    pasos: [
      "Enjuaga el arroz hasta que el agua salga clara.",
      "Sofríe las verduras picadas con aceite.",
      "Agrega el arroz y el doble de agua en volumen.",
      "Cocina a fuego bajo de 15 a 20 minutos.",
      "Sazona con sal y sirve."
    ]
  },
  {
    id: 6,
    nombre: "Pasta con atún",
    tipo: "lunch",
    ingredientes: ["pasta", "atun", "tomate", "cebolla"],
    minutos: 25,
    costo: 42,
    etiquetas: ["high-protein"],
    descripcion: "Pasta con salsa de atún y tomate.",
    pasos: [
      "Cuece la pasta según las instrucciones del paquete.",
      "Sofríe el tomate y la cebolla.",
      "Agrega el atún escurrido y mezcla.",
      "Incorpora la pasta cocida y revuelve.",
      "Ajusta de sal y sirve."
    ]
  },
  {
    id: 7,
    nombre: "Tacos de carne asada",
    tipo: "lunch",
    ingredientes: ["tortilla", "carne", "cebolla", "cilantro", "limon"],
    minutos: 40,
    costo: 70,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Tacos con carne asada, cebolla y cilantro.",
    pasos: [
      "Sazona la carne y cocínala a la plancha.",
      "Déjala reposar 5 minutos y pícala.",
      "Calienta las tortillas.",
      "Sirve la carne con cebolla y cilantro.",
      "Exprime limón antes de comer."
    ]
  },
  {
    id: 8,
    nombre: "Avena con fruta",
    tipo: "breakfast",
    ingredientes: ["avena", "leche", "platano", "miel"],
    minutos: 10,
    costo: 20,
    etiquetas: ["vegetarian"],
    descripcion: "Avena cocida con plátano y miel.",
    pasos: [
      "Calienta la leche a fuego medio.",
      "Agrega la avena y cocina 5 minutos.",
      "Endulza con miel al gusto.",
      "Corona con el plátano en rodajas.",
      "Sirve tibia."
    ]
  },
  {
    id: 9,
    nombre: "Smoothie de frutas",
    tipo: "snack",
    ingredientes: ["platano", "fresa", "leche", "miel"],
    minutos: 5,
    costo: 25,
    etiquetas: ["vegetarian"],
    descripcion: "Batido de fresa y plátano con leche.",
    pasos: [
      "Lava las frutas y pícalas.",
      "Licúa la fruta con la leche.",
      "Agrega miel al gusto.",
      "Licúa durante 1 minuto.",
      "Sirve de inmediato bien frío."
    ]
  },
  {
    id: 10,
    nombre: "Crema de calabaza",
    tipo: "lunch",
    ingredientes: ["calabaza", "cebolla", "crema", "sal"],
    minutos: 35,
    costo: 32,
    etiquetas: ["vegetarian"],
    descripcion: "Crema espesa de calabaza.",
    pasos: [
      "Pica la calabaza y la cebolla.",
      "Sofríe la cebolla hasta que esté transparente.",
      "Agrega la calabaza con agua y cocina 20 minutos.",
      "Licúa hasta obtener una mezcla cremosa.",
      "Incorpora la crema, ajusta de sal y sirve."
    ]
  },
  {
    id: 11,
    nombre: "Pollo a la plancha con verduras",
    tipo: "lunch",
    ingredientes: ["pollo", "verduras", "aceite", "sal"],
    minutos: 30,
    costo: 55,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Pechuga de pollo con verduras salteadas.",
    pasos: [
      "Sazona la pechuga de pollo con sal.",
      "Calienta aceite en la plancha.",
      "Cocina el pollo 6 minutos por lado.",
      "Saltea las verduras aparte.",
      "Sirve el pollo acompañado de las verduras."
    ]
  },
  {
    id: 12,
    nombre: "Sándwich de atún",
    tipo: "snack",
    ingredientes: ["pan", "atun", "lechuga", "tomate"],
    minutos: 10,
    costo: 28,
    etiquetas: ["high-protein"],
    descripcion: "Sándwich rápido con atún y vegetales.",
    pasos: [
      "Escurre el atún y mézclalo con un poco de aderezo.",
      "Lava la lechuga y corta el tomate.",
      "Unta el atún sobre el pan.",
      "Agrega la lechuga y el tomate.",
      "Cierra el sándwich y sírvelo."
    ]
  },
  {
    id: 13,
    nombre: "Chilaquiles rojos",
    tipo: "breakfast",
    ingredientes: ["tortilla", "salsa", "queso", "crema", "cebolla"],
    minutos: 25,
    costo: 35,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Totopos bañados en salsa roja con queso y crema.",
    pasos: [
      "Corta las tortillas en triángulos y fríelas.",
      "Calienta la salsa en una sartén.",
      "Agrega los totopos y báñalos con la salsa.",
      "Cocina 3 a 4 minutos a fuego medio.",
      "Corona con queso, crema y cebolla."
    ]
  },
  {
    id: 14,
    nombre: "Frijoles refritos con huevo",
    tipo: "breakfast",
    ingredientes: ["frijol", "huevo", "aceite", "sal"],
    minutos: 20,
    costo: 22,
    etiquetas: ["vegetarian", "gluten-free", "high-protein"],
    descripcion: "Frijoles refritos acompañados de huevo.",
    pasos: [
      "Calienta los frijoles en una sartén.",
      "Machácalos con un pisa papas.",
      "Fríelos con aceite hasta que espesen.",
      "Prepara los huevos al gusto aparte.",
      "Sirve los frijoles acompañados del huevo."
    ]
  },
  {
    id: 15,
    nombre: "Pechuga encebollada",
    tipo: "lunch",
    ingredientes: ["pollo", "cebolla", "jitomate", "arroz"],
    minutos: 45,
    costo: 60,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Pechuga guisada con cebolla y jitomate.",
    pasos: [
      "Sazona la pechuga de pollo.",
      "Dórala en la sartén por ambos lados.",
      "Agrega la cebolla en plumas y sofríe.",
      "Incorpora el jitomate y cocina 15 minutos.",
      "Acompaña con arroz y sirve."
    ]
  },
  {
    id: 16,
    nombre: "Gelatina con fruta",
    tipo: "snack",
    ingredientes: ["gelatina", "fruta", "leche"],
    minutos: 10,
    costo: 15,
    etiquetas: ["vegetarian"],
    descripcion: "Postre ligero de gelatina con fruta.",
    pasos: [
      "Prepara la gelatina según el paquete.",
      "Refrigera hasta que cuaje.",
      "Corta la fruta en trozos.",
      "Sirve la gelatina con la fruta encima.",
      "Agrega leche o crema al gusto."
    ]
  },
  {
    id: 17,
    nombre: "Tortilla francesa",
    tipo: "dinner",
    ingredientes: ["huevo", "leche", "queso", "pan"],
    minutos: 15,
    costo: 24,
    etiquetas: ["vegetarian", "high-protein"],
    descripcion: "Tortilla francesa rellena de queso.",
    pasos: [
      "Bate los huevos con un poco de leche.",
      "Salpimenta la mezcla.",
      "Viértela en un sartén con aceite caliente.",
      "Cocina a fuego bajo y agrega el queso.",
      "Dobla y sirve inmediatamente."
    ]
  },
  {
    id: 18,
    nombre: "Caldo de pollo",
    tipo: "dinner",
    ingredientes: ["pollo", "verduras", "agua", "sal", "limon"],
    minutos: 50,
    costo: 50,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Caldo casero de pollo con verduras.",
    pasos: [
      "Coloca el pollo en agua fría y hierve.",
      "Retira la espuma de la superficie.",
      "Agrega las verduras cortadas.",
      "Cocina a fuego bajo durante 40 minutos.",
      "Sazona con sal y sirve con limón."
    ]
  },
  {
    id: 19,
    nombre: "Ensalada de frutas",
    tipo: "snack",
    ingredientes: ["fruta", "jugo"],
    minutos: 5,
    costo: 20,
    etiquetas: ["vegetarian", "vegan", "gluten-free"],
    descripcion: "Fruta fresca variada con un toque cítrico.",
    pasos: [
      "Lava toda la fruta.",
      "Pícala en trozos parejos.",
      "Mezcla todo en un tazón.",
      "Agrega el jugo de naranja.",
      "Refrigera un momento y sirve."
    ]
  },
  {
    id: 20,
    nombre: "Ensalada de nopales",
    tipo: "lunch",
    ingredientes: ["nopales", "tomate", "cebolla", "cilantro"],
    minutos: 15,
    costo: 18,
    etiquetas: ["vegetarian", "vegan", "gluten-free"],
    descripcion: "Nopales cocidos con tomate y cebolla.",
    pasos: [
      "Limpia y corta los nopales en tiras.",
      "Hiérvelos en agua con sal durante 15 minutos.",
      "Escúrrelos y déjalos enfriar.",
      "Mezcla con tomate, cebolla y cilantro.",
      "Adereza con limón y sirve."
    ]
  },
  {
    id: 21,
    nombre: "Pasta a la boloñesa",
    tipo: "lunch",
    ingredientes: ["pasta", "carne molida", "tomate", "cebolla"],
    minutos: 35,
    costo: 55,
    etiquetas: ["high-protein"],
    descripcion: "Pasta con salsa de carne molida y tomate.",
    pasos: [
      "Pica la cebolla y el tomate.",
      "Sofríe la cebolla con aceite.",
      "Agrega la carne molida y cocina hasta dorar.",
      "Incorpora el tomate y cocina 15 minutos a fuego bajo.",
      "Mezcla con la pasta cocida y sirve."
    ]
  },
  {
    id: 22,
    nombre: "Pasta con crema y pollo",
    tipo: "lunch",
    ingredientes: ["pasta", "crema", "pollo", "queso"],
    minutos: 25,
    costo: 48,
    etiquetas: ["high-protein"],
    descripcion: "Pasta cremosa con trozos de pollo y queso.",
    pasos: [
      "Cuece la pasta y escurre.",
      "Corta el pollo en cubos y dóralo.",
      "Calienta la crema con el queso.",
      "Agrega el pollo y la pasta.",
      "Mezcla todo y sirve caliente."
    ]
  },
  {
    id: 23,
    nombre: "Picadillo de carne",
    tipo: "lunch",
    ingredientes: ["carne molida", "papa", "tomate", "cebolla"],
    minutos: 40,
    costo: 52,
    etiquetas: ["high-protein", "gluten-free"],
    descripcion: "Carne molida con papa y tomate guisada.",
    pasos: [
      "Sofríe la cebolla picada.",
      "Agrega la carne molida y desmenúzala.",
      "Incorpora la papa y el tomate en cubos.",
      "Cocina a fuego bajo durante 25 minutos.",
      "Ajusta de sal y sirve."
    ]
  },
  {
    id: 24,
    nombre: "Hamburguesa casera",
    tipo: "lunch",
    ingredientes: ["pan", "carne", "lechuga", "tomate", "queso"],
    minutos: 20,
    costo: 58,
    etiquetas: ["high-protein"],
    descripcion: "Torta de carne a la plancha con verduras.",
    pasos: [
      "Forma tortas con la carne y sazona.",
      "Cocina a la plancha 5 minutos por lado.",
      "Tuesta el pan.",
      "Monta con lechuga, tomate y queso.",
      "Cierra la hamburguesa y sirve."
    ]
  },
  {
    id: 25,
    nombre: "Pizza rápida",
    tipo: "lunch",
    ingredientes: ["pan", "salsa", "queso"],
    minutos: 15,
    costo: 45,
    etiquetas: ["vegetarian"],
    descripcion: "Pizza en base de pan con salsa y queso.",
    pasos: [
      "Tuesta la base de pan.",
      "Unta la salsa de tomate.",
      "Cubre con queso rallado.",
      "Cocina hasta que el queso dore.",
      "Sirve caliente."
    ]
  },
  {
    id: 26,
    nombre: "Arroz con pollo",
    tipo: "lunch",
    ingredientes: ["arroz", "pollo", "verduras", "salsa"],
    minutos: 40,
    costo: 50,
    etiquetas: ["high-protein", "gluten-free"],
    descripcion: "Arroz guisado con pollo y verduras.",
    pasos: [
      "Dora el pollo en cubos.",
      "Agrega las verduras y el arroz.",
      "Añade agua o caldo.",
      "Cocina a fuego bajo 20 minutos.",
      "Mezcla y sirve."
    ]
  },
  {
    id: 27,
    nombre: "Burritos de frijol",
    tipo: "lunch",
    ingredientes: ["tortilla", "frijol", "queso", "crema"],
    minutos: 20,
    costo: 35,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Tortillas rellenas de frijol con queso.",
    pasos: [
      "Calienta los frijoles.",
      "Tuesta las tortillas.",
      "Rellena con frijol y queso.",
      "Agrega crema.",
      "Dobla los burritos y sirve."
    ]
  },
  {
    id: 28,
    nombre: "Enchiladas rojas",
    tipo: "lunch",
    ingredientes: ["tortilla", "salsa", "pollo", "queso", "crema"],
    minutos: 35,
    costo: 55,
    etiquetas: ["high-protein"],
    descripcion: "Tortillas bañadas en salsa con pollo.",
    pasos: [
      "Cocina y desposta el pollo.",
      "Calienta la salsa.",
      "Baña las tortillas con la salsa.",
      "Rellena con pollo y enrolla.",
      "Corona con queso y crema."
    ]
  },
  {
    id: 29,
    nombre: "Entomatadas",
    tipo: "breakfast",
    ingredientes: ["tortilla", "tomate", "queso", "crema"],
    minutos: 20,
    costo: 28,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Tortillas bañadas en salsa de tomate.",
    pasos: [
      "Prepara la salsa de tomate.",
      "Calienta las tortillas.",
      "Báñalas con la salsa.",
      "Rellena con queso.",
      "Corona con crema y sirve."
    ]
  },
  {
    id: 30,
    nombre: "Omelette de verduras",
    tipo: "breakfast",
    ingredientes: ["huevo", "verduras", "queso"],
    minutos: 15,
    costo: 26,
    etiquetas: ["vegetarian", "gluten-free", "high-protein"],
    descripcion: "Tortilla de huevo rellena de verduras.",
    pasos: [
      "Bate los huevos.",
      "Salpimenta.",
      "Vierte en sartén con mantequilla.",
      "Agrega verduras y queso al centro.",
      "Dobra y sirve."
    ]
  },
  {
    id: 31,
    nombre: "Molletes",
    tipo: "breakfast",
    ingredientes: ["pan", "frijol", "queso"],
    minutos: 15,
    costo: 25,
    etiquetas: ["vegetarian", "high-protein"],
    descripcion: "Pan tostado con frijol y queso gratinado.",
    pasos: [
      "Corta el pan por la mitad.",
      "Tuesta el pan.",
      "Unta los frijoles refritos.",
      "Agrega el queso.",
      "Gratina y sirve."
    ]
  },
  {
    id: 32,
    nombre: "Sándwich de pollo",
    tipo: "snack",
    ingredientes: ["pan", "pollo", "lechuga", "tomate"],
    minutos: 10,
    costo: 32,
    etiquetas: ["high-protein"],
    descripcion: "Pan con pollo deshebrado y verduras.",
    pasos: [
      "Cocina y desposta el pollo.",
      "Unta el pollo sobre el pan.",
      "Agrega lechuga y tomate.",
      "Cierra el sándwich.",
      "Acompaña y sirve."
    ]
  },
  {
    id: 33,
    nombre: "Tostadas de pollo",
    tipo: "lunch",
    ingredientes: ["tortilla", "pollo", "lechuga", "tomate", "crema"],
    minutos: 20,
    costo: 42,
    etiquetas: ["high-protein", "gluten-free"],
    descripcion: "Tortillas crujientes con pollo y crema.",
    pasos: [
      "Dora las tortillas hasta que estén crujientes.",
      "Cocina y deshebra el pollo.",
      "Agrega el pollo sobre la tortilla.",
      "Cubre con lechuga y tomate.",
      "Añade crema y sirve."
    ]
  },
  {
    id: 34,
    nombre: "Arroz con leche",
    tipo: "snack",
    ingredientes: ["arroz", "leche", "miel"],
    minutos: 35,
    costo: 22,
    etiquetas: ["vegetarian"],
    descripcion: "Postre cremoso de arroz endulzado.",
    pasos: [
      "Enjuaga el arroz.",
      "Cuece con leche a fuego bajo.",
      "Remueve frecuentemente.",
      "Cocina 30 minutos hasta espesar.",
      "Endulza con miel y sirve."
    ]
  },
  {
    id: 35,
    nombre: "Pescado a la plancha",
    tipo: "dinner",
    ingredientes: ["pescado", "limon", "verduras", "aceite"],
    minutos: 30,
    costo: 75,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Pescado sellado con limón y verduras.",
    pasos: [
      "Sazona el pescado con limón y sal.",
      "Calienta el aceite en la plancha.",
      "Cocina 5 minutos por lado.",
      "Saltea las verduras aparte.",
      "Sirve con limón."
    ]
  },
  {
    id: 36,
    nombre: "Sopa de pollo",
    tipo: "dinner",
    ingredientes: ["pollo", "verduras", "agua", "fideo"],
    minutos: 35,
    costo: 38,
    etiquetas: ["high-protein", "gluten-free"],
    descripcion: "Caldo casero con pollo y verduras.",
    pasos: [
      "Hierve el pollo en agua.",
      "Retira la espuma de la superficie.",
      "Agrega las verduras y el fideo.",
      "Cocina 25 minutos a fuego medio.",
      "Sazona y sirve."
    ]
  },
  {
    id: 37,
    nombre: "Crema de champiñones",
    tipo: "lunch",
    ingredientes: ["champiñon", "crema", "cebolla"],
    minutos: 30,
    costo: 36,
    etiquetas: ["vegetarian"],
    descripcion: "Sopa cremosa de champiñones.",
    pasos: [
      "Limpia y corta los champiñones.",
      "Sofríe la cebolla.",
      "Agrega los champiñones.",
      "Vierte la crema y cocina 10 minutos.",
      "Licúa si deseas y sirve."
    ]
  },
  {
    id: 38,
    nombre: "Chilaquiles verdes",
    tipo: "breakfast",
    ingredientes: ["tortilla", "salsa", "huevo", "queso", "crema"],
    minutos: 25,
    costo: 38,
    etiquetas: ["vegetarian"],
    descripcion: "Totopos bañados en salsa verde con huevo.",
    pasos: [
      "Corta las tortillas en triángulos y fríe.",
      "Prepara la salsa verde.",
      "Baña los totopos con la salsa.",
      "Agrega huevo y queso.",
      "Corona con crema y sirve."
    ]
  },
  {
    id: 39,
    nombre: "Huevo con espinaca",
    tipo: "breakfast",
    ingredientes: ["huevo", "espinaca", "queso"],
    minutos: 10,
    costo: 22,
    etiquetas: ["vegetarian", "gluten-free", "high-protein"],
    descripcion: "Huevos revueltos con espinaca y queso.",
    pasos: [
      "Lava la espinaca.",
      "Saltea la espinaca un minuto.",
      "Agrega el huevo batido.",
      "Mezcla hasta cuajar.",
      "Añade queso y sirve."
    ]
  },
  {
    id: 40,
    nombre: "Pancakes caseros",
    tipo: "breakfast",
    ingredientes: ["harina", "leche", "huevo", "miel"],
    minutos: 20,
    costo: 30,
    etiquetas: ["vegetarian"],
    descripcion: "Hotcakes esponjosos con miel.",
    pasos: [
      "Mezcla harina, leche y huevo.",
      "Deja reposar la masa 5 minutos.",
      "Vierte porciones en sartén.",
      "Voltea al dorar el otro lado.",
      "Sirve con miel."
    ]
  },
  {
    id: 41,
    nombre: "Avena con manzana",
    tipo: "breakfast",
    ingredientes: ["avena", "leche", "fruta", "miel"],
    minutos: 10,
    costo: 24,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Avena cremosa con trozos de fruta.",
    pasos: [
      "Calienta la leche.",
      "Agrega la avena.",
      "Cocina 5 minutos removiendo.",
      "Añade la fruta picada.",
      "Endulza con miel y sirve."
    ]
  },
  {
    id: 42,
    nombre: "Yogurt con granola",
    tipo: "breakfast",
    ingredientes: ["yogurt", "granola", "fruta"],
    minutos: 5,
    costo: 28,
    etiquetas: ["vegetarian"],
    descripcion: "Desayuno rápido con yogurt y fruta.",
    pasos: [
      "Sirve el yogurt en un tazón.",
      "Agrega la granola.",
      "Cubre con fruta picada.",
      "Añade un toque de miel si deseas.",
      "Sirve de inmediato."
    ]
  },
  {
    id: 43,
    nombre: "Tamales de carne",
    tipo: "breakfast",
    ingredientes: ["masa", "carne", "salsa"],
    minutos: 60,
    costo: 45,
    etiquetas: ["high-protein"],
    descripcion: "Tamales rellenos de carne con salsa.",
    pasos: [
      "Hidrata la masa y sazona.",
      "Cuece la carne y desmembra.",
      "Mezcla carne con salsa.",
      "Unta masa en las hojas y rellena.",
      "Cuece al vapor 45 minutos."
    ]
  },
  {
    id: 44,
    nombre: "Quesadillas de calabaza",
    tipo: "breakfast",
    ingredientes: ["tortilla", "calabaza", "queso"],
    minutos: 20,
    costo: 30,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Quesadillas de calabaza con queso.",
    pasos: [
      "Cuece y machaca la calabaza.",
      "Calienta las tortillas.",
      "Rellena con calabaza y queso.",
      "Dobla y dora ambos lados.",
      "Sirve caliente."
    ]
  },
  {
    id: 45,
    nombre: "Bolillo con huevo",
    tipo: "breakfast",
    ingredientes: ["pan", "huevo", "tomate"],
    minutos: 10,
    costo: 18,
    etiquetas: [],
    descripcion: "Bolillo tostado con huevo y jitomate.",
    pasos: [
      "Tuesta el bolillo.",
      "Cocina el huevo a tu gusto.",
      "Acompaña con jitomate en rodajas.",
      "Monta el sándwich.",
      "Sirve de inmediato."
    ]
  },
  {
    id: 46,
    nombre: "Leche con cereal",
    tipo: "breakfast",
    ingredientes: ["leche", "cereal", "platano"],
    minutos: 3,
    costo: 15,
    etiquetas: ["vegetarian"],
    descripcion: "Desayuno instantáneo con cereal.",
    pasos: [
      "Sirve el cereal en un tazón.",
      "Corta el plátano en rodajas.",
      "Añade el plátano.",
      "Vierte la leche fría.",
      "Sirve de inmediato."
    ]
  },
  {
    id: 47,
    nombre: "Licuado de plátano",
    tipo: "breakfast",
    ingredientes: ["platano", "leche", "miel"],
    minutos: 5,
    costo: 20,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Bebida cremosa de plátano.",
    pasos: [
      "Pela el plátano.",
      "Licúa con leche.",
      "Agrega miel.",
      "Licúa hasta que quede liso.",
      "Sirve frío."
    ]
  },
  {
    id: 48,
    nombre: "Tinga de pollo",
    tipo: "lunch",
    ingredientes: ["pollo", "salsa", "cebolla", "tortilla"],
    minutos: 35,
    costo: 48,
    etiquetas: ["high-protein"],
    descripcion: "Pollo en salsa de chipotle con cebolla.",
    pasos: [
      "Cocina y desposta el pollo.",
      "Sofríe la cebolla en rebanadas.",
      "Agrega salsa y pollo.",
      "Cocina 10 minutos.",
      "Sirve con tortillas."
    ]
  },
  {
    id: 49,
    nombre: "Fajitas de pollo",
    tipo: "lunch",
    ingredientes: ["pollo", "chile", "cebolla", "tortilla"],
    minutos: 25,
    costo: 52,
    etiquetas: ["high-protein"],
    descripcion: "Pollo y verduras salteadas en tiras.",
    pasos: [
      "Corta el pollo en tiras.",
      "Saltea pollo, chile y cebolla.",
      "Sazona con especias.",
      "Calienta las tortillas.",
      "Sirve y envuelve al gusto."
    ]
  },
  {
    id: 50,
    nombre: "Tacos de pescado",
    tipo: "lunch",
    ingredientes: ["pescado", "tortilla", "limon", "lechuga"],
    minutos: 25,
    costo: 65,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Pescado con limón en tortillas.",
    pasos: [
      "Sazona el pescado con limón.",
      "Cocina el pescado a la plancha.",
      "Calienta las tortillas.",
      "Rellena con pescado y lechuga.",
      "Adereza con limón y sirve."
    ]
  },
  {
    id: 51,
    nombre: "Guisado de papa",
    tipo: "lunch",
    ingredientes: ["papa", "salsa", "tortilla"],
    minutos: 30,
    costo: 32,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Papa guisada en salsa de tomate.",
    pasos: [
      "Pica la papa en cubos.",
      "Cocínala hasta dorar.",
      "Agrega la salsa.",
      "Cocina 15 minutos a fuego bajo.",
      "Sirve con tortillas."
    ]
  },
  {
    id: 52,
    nombre: "Espagueti rojo",
    tipo: "lunch",
    ingredientes: ["pasta", "jitomate", "cebolla", "queso"],
    minutos: 20,
    costo: 28,
    etiquetas: ["vegetarian"],
    descripcion: "Espagueti con salsa de jitomate.",
    pasos: [
      "Cuece la pasta.",
      "Licúa jitomate con cebolla.",
      "Sofríe la salsa.",
      "Mezcla con la pasta.",
      "Sirve con queso rallado."
    ]
  },
  {
    id: 53,
    nombre: "Arroz rojo",
    tipo: "lunch",
    ingredientes: ["arroz", "jitomate", "aceite"],
    minutos: 25,
    costo: 20,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Arroz mexicano rojo de olla.",
    pasos: [
      "Dora el arroz en aceite.",
      "Licúa el jitomate.",
      "Añade la salsa y agua.",
      "Cocina a fuego bajo 20 minutos.",
      "Deja reposar y sirve."
    ]
  },
  {
    id: 54,
    nombre: "Bistec a la mexicana",
    tipo: "lunch",
    ingredientes: ["carne", "tomate", "cebolla", "chile"],
    minutos: 30,
    costo: 70,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Bistec guisado con verduras.",
    pasos: [
      "Sella el bistec en sartén.",
      "Agrega cebolla y chile.",
      "Incorpora el tomate.",
      "Cocina 15 minutos.",
      "Sirve caliente."
    ]
  },
  {
    id: 55,
    nombre: "Carnitas de cerdo",
    tipo: "lunch",
    ingredientes: ["carne", "agua", "limon"],
    minutos: 90,
    costo: 80,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Carne cocida lenta hasta dorar.",
    pasos: [
      "Corta la carne en trozos.",
      "Cocina con agua a fuego alto.",
      "Baja el fuego y cocina 70 minutos.",
      "Dora al final removiendo.",
      "Sirve con limón."
    ]
  },
  {
    id: 56,
    nombre: "Albóndigas",
    tipo: "lunch",
    ingredientes: ["carne molida", "arroz", "huevo", "salsa"],
    minutos: 45,
    costo: 55,
    etiquetas: ["high-protein"],
    descripcion: "Bolas de carne en salsa de tomate.",
    pasos: [
      "Mezcla carne, arroz y huevo.",
      "Forma albóndigas.",
      "Prepara la salsa.",
      "Cocina las albóndigas en salsa 25 minutos.",
      "Sirve calientes."
    ]
  },
  {
    id: 57,
    nombre: "Croquetas de pollo",
    tipo: "lunch",
    ingredientes: ["pollo", "pan", "huevo"],
    minutos: 30,
    costo: 40,
    etiquetas: ["high-protein"],
    descripcion: "Croquetas crujientes de pollo.",
    pasos: [
      "Desmenuza el pollo cocido.",
      "Mezcla con huevo y pan molido.",
      "Forma croquetas.",
      "Fríe hasta dorar.",
      "Sirve con limón."
    ]
  },
  {
    id: 58,
    nombre: "Sincronizada",
    tipo: "lunch",
    ingredientes: ["tortilla", "jamon", "queso"],
    minutos: 10,
    costo: 32,
    etiquetas: ["high-protein"],
    descripcion: "Tortilla con jamón y queso fundido.",
    pasos: [
      "Calienta la tortilla.",
      "Agrega jamón y queso.",
      "Dobla en dos.",
      "Dora hasta fundir el queso.",
      "Sirve caliente."
    ]
  },
  {
    id: 59,
    nombre: "Torta ahogada",
    tipo: "lunch",
    ingredientes: ["pan", "carne", "salsa"],
    minutos: 35,
    costo: 55,
    etiquetas: ["high-protein"],
    descripcion: "Torta de carne bañada en salsa.",
    pasos: [
      "Cuece la carne hasta deshebrar.",
      "Prepara la salsa de tomate.",
      "Tuesta el pan.",
      "Rellena con la carne.",
      "Ahoga con salsa y sirve."
    ]
  },
  {
    id: 60,
    nombre: "Sopa de fideo",
    tipo: "lunch",
    ingredientes: ["fideo", "jitomate", "agua"],
    minutos: 20,
    costo: 18,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Sopa casera de fideo con jitomate.",
    pasos: [
      "Dora el fideo en aceite.",
      "Licúa el jitomate.",
      "Agrega agua y salsa.",
      "Cuece 10 minutos.",
      "Sazona y sirve."
    ]
  },
  {
    id: 61,
    nombre: "Ensalada César",
    tipo: "lunch",
    ingredientes: ["lechuga", "pollo", "queso", "aceite"],
    minutos: 15,
    costo: 45,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Lechuga con pollo y queso.",
    pasos: [
      "Limpia la lechuga.",
      "Cocina y corta el pollo.",
      "Mezcla lechuga y pollo.",
      "Agrega queso.",
      "Adereza con aceite y sirve."
    ]
  },
  {
    id: 62,
    nombre: "Ensalada de atún",
    tipo: "lunch",
    ingredientes: ["atun", "lechuga", "tomate", "huevo"],
    minutos: 10,
    costo: 40,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Ensalada fresca con atún y huevo.",
    pasos: [
      "Escurre el atún.",
      "Cuece y corta el huevo.",
      "Mezcla lechuga, tomate y atún.",
      "Agrega el huevo.",
      "Adereza y sirve."
    ]
  },
  {
    id: 63,
    nombre: "Queso fundido con chorizo",
    tipo: "lunch",
    ingredientes: ["queso", "chorizo", "tortilla"],
    minutos: 15,
    costo: 45,
    etiquetas: ["high-protein"],
    descripcion: "Queso fundido con chorizo.",
    pasos: [
      "Dora el chorizo.",
      "Agrega el queso.",
      "Mezcla hasta fundir.",
      "Calienta las tortillas.",
      "Sirve el queso con tortillas."
    ]
  },
  {
    id: 64,
    nombre: "Flautas de pollo",
    tipo: "lunch",
    ingredientes: ["tortilla", "pollo", "aceite", "crema"],
    minutos: 30,
    costo: 42,
    etiquetas: ["high-protein"],
    descripcion: "Tortillas enrolladas y fritas con pollo.",
    pasos: [
      "Desmenuza el pollo cocido.",
      "Rellena y enrolla las tortillas.",
      "Fríe hasta dorar.",
      "Escurre el exceso.",
      "Sirve con crema."
    ]
  },
  {
    id: 65,
    nombre: "Chiles rellenos",
    tipo: "lunch",
    ingredientes: ["chile", "queso", "huevo"],
    minutos: 40,
    costo: 38,
    etiquetas: ["vegetarian", "high-protein"],
    descripcion: "Chiles rellenos de queso capeados.",
    pasos: [
      "Asa y limpia los chiles.",
      "Rellena con queso.",
      "Bate el huevo.",
      "Cubre los chiles con huevo.",
      "Cocina y sirve con salsa."
    ]
  },
  {
    id: 66,
    nombre: "Camarones al ajillo",
    tipo: "lunch",
    ingredientes: ["camarones", "ajo", "aceite", "limon"],
    minutos: 20,
    costo: 85,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Camarones salteados con ajo.",
    pasos: [
      "Limpia los camarones.",
      "Calienta el aceite con ajo.",
      "Saltea los camarones 3 minutos.",
      "Agrega limón.",
      "Sirve de inmediato."
    ]
  },
  {
    id: 67,
    nombre: "Filete de pescado al horno",
    tipo: "dinner",
    ingredientes: ["pescado", "papa", "aceite"],
    minutos: 40,
    costo: 78,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Pescado horneado con papas.",
    pasos: [
      "Precalienta el horno.",
      "Sazona el filete.",
      "Acomoda con papas en rodajas.",
      "Riega con aceite.",
      "Hornea 25 minutos."
    ]
  },
  {
    id: 68,
    nombre: "Pollo guisado con verduras",
    tipo: "dinner",
    ingredientes: ["pollo", "verduras", "salsa"],
    minutos: 40,
    costo: 45,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Guiso casero de pollo y verduras.",
    pasos: [
      "Dora el pollo.",
      "Agrega las verduras.",
      "Incorpora la salsa.",
      "Cocina 25 minutos.",
      "Sirve caliente."
    ]
  },
  {
    id: 69,
    nombre: "Caldo de pescado",
    tipo: "dinner",
    ingredientes: ["pescado", "jitomate", "cebolla", "agua"],
    minutos: 35,
    costo: 70,
    etiquetas: ["gluten-free"],
    descripcion: "Caldo especiado con pescado.",
    pasos: [
      "Hierve agua con cebolla.",
      "Agrega jitomate.",
      "Incorpora el pescado.",
      "Cocina 15 minutos.",
      "Sazona y sirve."
    ]
  },
  {
    id: 70,
    nombre: "Verduras al vapor",
    tipo: "dinner",
    ingredientes: ["verduras", "agua"],
    minutos: 15,
    costo: 22,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Verduras ligeras cocidas al vapor.",
    pasos: [
      "Lava y corta las verduras.",
      "Coloca el vaporero con agua.",
      "Cuece al vapor 12 minutos.",
      "Añade una pizca de sal.",
      "Sirve caliente."
    ]
  },
  {
    id: 71,
    nombre: "Puré de papa",
    tipo: "dinner",
    ingredientes: ["papa", "leche", "queso"],
    minutos: 25,
    costo: 28,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Papa cremosa con queso.",
    pasos: [
      "Cuece las papas.",
      "Escúrrelas y machaca.",
      "Agrega leche caliente.",
      "Mezcla hasta suavizar.",
      "Corona con queso y sirve."
    ]
  },
  {
    id: 72,
    nombre: "Costillas en salsa",
    tipo: "dinner",
    ingredientes: ["carne", "salsa", "miel"],
    minutos: 70,
    costo: 95,
    etiquetas: ["high-protein"],
    descripcion: "Costillas glaseadas con salsa y miel.",
    pasos: [
      "Sazona las costillas.",
      "Cocina a fuego bajo 50 minutos.",
      "Mezcla salsa y miel.",
      "Glasea las costillas.",
      "Dora 5 minutos y sirve."
    ]
  },
  {
    id: 73,
    nombre: "Chuletas al limón",
    tipo: "dinner",
    ingredientes: ["carne", "limon", "sal"],
    minutos: 25,
    costo: 85,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Chuletas sazonadas con limón.",
    pasos: [
      "Sazona con sal y limón.",
      "Calienta la sartén.",
      "Cocina 6 minutos por lado.",
      "Deja reposar 2 minutos.",
      "Sirve con limón."
    ]
  },
  {
    id: 74,
    nombre: "Estofado de carne",
    tipo: "dinner",
    ingredientes: ["carne", "papa", "cebolla", "salsa"],
    minutos: 60,
    costo: 88,
    etiquetas: ["gluten-free", "high-protein"],
    descripcion: "Carne cocida lenta con papas.",
    pasos: [
      "Dora la carne en trozos.",
      "Agrega cebolla.",
      "Incorpora salsa y agua.",
      "Añade la papa.",
      "Cocina 40 minutos a fuego bajo."
    ]
  },
  {
    id: 75,
    nombre: "Fruta con chile y limón",
    tipo: "snack",
    ingredientes: ["fruta", "chile", "limon"],
    minutos: 5,
    costo: 15,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Fruta fresca con chile y limón.",
    pasos: [
      "Lava y corta la fruta.",
      "Exprime limón.",
      "Espolvorea chile.",
      "Mezcla suavemente.",
      "Sirve frío."
    ]
  },
  {
    id: 76,
    nombre: "Palomitas",
    tipo: "snack",
    ingredientes: ["maiz", "sal"],
    minutos: 10,
    costo: 12,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Palomitas caseras con sal.",
    pasos: [
      "Calienta olla con aceite.",
      "Agrega el maíz.",
      "Tapa y espera a que revienten.",
      "Añade sal.",
      "Sirve en tazón."
    ]
  },
  {
    id: 77,
    nombre: "Smoothie de fresa",
    tipo: "snack",
    ingredientes: ["fresa", "jugo", "miel"],
    minutos: 5,
    costo: 25,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Batido refrescante de fresa.",
    pasos: [
      "Lava las fresas.",
      "Licúa con jugo.",
      "Agrega miel.",
      "Licúa hasta homogeneizar.",
      "Sirve frío."
    ]
  },
  {
    id: 78,
    nombre: "Camote al horno",
    tipo: "snack",
    ingredientes: ["camote", "miel"],
    minutos: 45,
    costo: 20,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Camote horneado endulzado.",
    pasos: [
      "Lava el camote.",
      "Perfora con un tenedor.",
      "Hornea 40 minutos.",
      "Añade miel.",
      "Sirve caliente."
    ]
  },
  {
    id: 79,
    nombre: "Brownie de chocolate",
    tipo: "snack",
    ingredientes: ["harina", "huevo", "chocolate"],
    minutos: 40,
    costo: 40,
    etiquetas: ["vegetarian"],
    descripcion: "Brownie húmedo de chocolate.",
    pasos: [
      "Derrite el chocolate.",
      "Bate huevo y chocolate.",
      "Añade harina.",
      "Hornea 25 minutos.",
      "Enfría y corta."
    ]
  },
  {
    id: 80,
    nombre: "Flan napolitano",
    tipo: "snack",
    ingredientes: ["leche", "huevo", "miel"],
    minutos: 60,
    costo: 35,
    etiquetas: ["vegetarian", "gluten-free"],
    descripcion: "Postre cremoso con caramelo.",
    pasos: [
      "Prepara el caramelo.",
      "Bate leche, huevo y miel.",
      "Vierte en el molde.",
      "Cuece al baño María 45 minutos.",
      "Enfría y desmolda."
    ]
  },
  {
    id: 81,
    nombre: "Limonada fresca",
    tipo: "snack",
    ingredientes: ["limon", "agua", "miel"],
    minutos: 3,
    costo: 12,
    etiquetas: ["vegan", "gluten-free"],
    descripcion: "Limonada casera endulzada.",
    pasos: [
      "Exprime los limones.",
      "Agrega agua fría.",
      "Endulza con miel.",
      "Mezcla bien.",
      "Sirve con hielo."
    ]
  },
  {
    id: 82,
    nombre: "Sándwich de jamón",
    tipo: "snack",
    ingredientes: ["pan", "jamon", "queso", "lechuga"],
    minutos: 5,
    costo: 28,
    etiquetas: [],
    descripcion: "Sándwich sencillo de jamón y queso.",
    pasos: [
      "Tuesta el pan.",
      "Agrega jamón y queso.",
      "Añade lechuga.",
      "Cierra el sándwich.",
      "Sirve con acompañamiento."
    ]
  }
];

const INGREDIENTES_COMUNES = [
  "huevo", "tomate", "cebolla", "queso", "pollo", "arroz", "pasta", "tortilla",
  "lechuga", "atun", "avena", "leche", "platano", "fresa", "frijol", "carne",
  "carne molida", "papa", "calabaza", "pan", "miel", "aceite", "sal", "crema",
  "salsa", "verduras", "chile", "limon", "cilantro", "gelatina", "fruta",
  "jitomate", "fideo", "agua", "nopales", "jugo", "pescado", "champiñon",
  "harina", "yogurt", "granola", "cereal", "masa", "espinaca", "jamon",
  "chorizo", "camarones", "ajo", "maiz", "camote", "chocolate"
];
