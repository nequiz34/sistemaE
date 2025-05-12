// Base de conocimientos (reglas iniciales)

let CortinariusOrellanus = { nombre : { especie : "CortinariusOrellanus", popular : "Cortinariaceae", grupo : "Saprófito"}, estipite : { altura : { min : "30", max : "70"}, diametro : { min : "5", max : "15"}, morfologia : { forma : "cilíndrico", conexion : ["decurrente", "curvado"], color : ["marrónrojizo", "marrónanaranjado"]}, anillo : { presencia : "true", grosor : "imperceptible", textura : "fibrosa", posicion : "zonaanular"}}, 
pileo : { diametro : { min : "20", max : "50"}, morfologia : {forma : ["umbonado", "cónico"], color : ["marrónrojizo", "marrónanaranjado"], textura : "fibrilosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : ["adnatas", "decurrente"], espaciamiento : "espaciadas", grosor : "gruesas", color : ["ocráceo", "marrónocráceo"], madurez : "marrónferruginoso"}, 
velo : {presencia : "true", color : "blanco", forma : ["tela", "araña"], textura : "fibrosa", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "media", olor : ["terroso", "mohoso"], corte : ["marrónocráceo", "marrónrojizo"]}, 
comestible : "false"};

let CortinariusTrivialis = { nombre : { especie : "CortinariusTrivialis", popular : "Cortinarioviscosoazulado", grupo : "Micorrizógeno"}, estipite : { altura : { min : "60", max : "150"}, diametro : { min : "10", max : "25"}, morfologia : { forma : "cilíndrico", conexion : "central", color : ["marrónamarillento", "azulado"]}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "100"}, morfologia : {forma : ["convexo", "conico"], color : ["ocreamarillento", "ocremarrón", "pardoocráceo"], textura : "vicosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : ["adnatas", "emarginadas"], espaciamiento : "apretadas", grosor : "finas", color : ["grisazulado", "violáceo"], madurez : "marrónherrumbroso"}, 
velo : {presencia : "true", color : ["blanco", "violáceo", "marrónóxido"], forma : "aracnoide", textura : "fibrosa", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "firme", olor : ["terroso", "mohoso", "dulce"], corte : "blanco"}, 
comestible : "false"};

let CraterellusCornucopioides = { nombre : { especie : "CraterellusCornucopioides", popular : "Trompetadelosmuertos", grupo : "Micorrizógeno"}, estipite : { altura : { min : "50", max : "150"}, diametro : { min : "10", max : "30"}, morfologia : { forma : "embudo", conexion : "completa", color : "negruzco"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "100"}, morfologia : {forma : "infundibuliforme", color : "negro", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "null", grosor : "null", color : "negro", madurez : "oscura"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "elástica", olor : ["agradable", "ciruelapasa"], corte : "negro"}, 
comestible : "true"};

let CyttariaEspinosae = { nombre : { especie : "CyttariaEspinosae", popular : "Dihueñe", grupo : "Parásito"}, estipite : { altura : { min : "null", max : "null"}, diametro : { min : "null", max : "null"}, morfologia : { forma : "null", conexion : "null", color : "null"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "20", max : "80"}, morfologia : {forma : "globosa", color : "crema", textura : "gomosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "carnosa", olor : ["dulce", "afrutado", "imperceptible"], corte : ["blanquecina", "amarillentapálida"]}, 
comestible : "true"};

let FlammulinaVelutipes = { nombre : { especie : "FlammulinaVelutipes", popular : "Enoki", grupo : "Saprófito"}, estipite : { altura : { min : "20", max : "100"}, diametro : { min : "2", max : "10"}, morfologia : { forma : "cilíndrico", conexion : "decurrente", color : "marrónclaro"}, anillo : { presencia : "true", grosor : "delgado", textura : "membranoso", posicion : "superior"}}, 
pileo : { diametro : { min : "10", max : "50"}, morfologia : {forma : "convexo", color : "marrónrojizo", textura : "liso"}, parches : { presencia : "talse", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "espaciadas", grosor : "finas", color : "blanco", madurez : "amarillento"}, 
velo : {presencia : "true", color : "blanco", forma : "parcial", textura : "membranosa", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "tierna", olor : ["agradable", "dulce", "afrutado"], corte : "amarillopálido"}, 
comestible : "true"};

let GyromitraEsculenta = { nombre : { especie : "GyromitraEsculenta", popular : "SetaCerebro-falsacolmenilla", grupo : "Saprófito"}, estipite : { altura : { min : "30", max : "100"}, diametro : { min : "10", max : "30"}, morfologia : { forma : "cilíndrico", conexion : ["irregular", "inferior"], color : ["blanco", "violaceos"]}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "100"}, morfologia : {forma : "cerebriforme", color : ["pardoclaro", "pardorojizo"], textura : "arrugada"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "frágil", olor : ["dulce", "terroso", "afrutado"], corte : "blanco"}, 
comestible : "false"};

let GyromitraInfula = { nombre : { especie : "GyromitraInfula", popular : "OrejadeRatón", grupo : "Saprófito"}, estipite : { altura : { min : "30", max : "80"}, diametro : { min : "10", max : "30"}, morfologia : { forma : "cilíndrico", conexion : "adherido", color : ["blanco", "grisáceopálido", "amarillopálido"]}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "100"}, morfologia : {forma : "sillademontar", color : ["marrónrojizo", "marrónoscuro", "marrónpurpúreo", "negruzco"], textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "quebradiza", olor : ["terroso", "afrutado", "débil"], corte : ["blanquecina", "amarillentapálida"]}, 
comestible : "false"};

let HygrophorusHypothejus = { nombre : { especie : "HygrophorusHypothejus", popular : "HeraldodelInvierno", grupo : "Micorrizógeno"}, estipite : { altura : { min : "30", max : "80"}, diametro : { min : "5", max : "15"}, morfologia : { forma : "cilíndrico", conexion : "decurrente", color : "amarillobrillante"}, anillo : { presencia : "true", grosor : "imperceptible", textura : "viscosa", posicion : "zonaanular"}}, 
pileo : { diametro : { min : "20", max : "60"}, morfologia : {forma : "infundibuliforme", color : ["amarillobrillante", "naranja"], textura : "viscosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "espaciadas", grosor : "gruesas", color : "amarillenta", madurez : "amarillenta"}, 
velo : {presencia : "true", color : "blanco", forma : "fugaz", textura : "viscoso", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "acuosa", olor : ["afrutado", "inodoro"], corte : "amarillopálido"}, 
comestible : "true"};

let HygrophorusLatitabundus = { nombre : { especie : "HygrophorusLatitabundus", popular : "LlanegaNegra", grupo : "Micorrizógeno"}, estipite : { altura : { min : "50", max : "120"}, diametro : { min : "10", max : "20"}, morfologia : { forma : "curvado", conexion : "decurrente", color : "blanco"}, anillo : { presencia : "true", grosor : "ancho", textura : "membranoso", posicion : "superior"}}, 
pileo : { diametro : { min : "50", max : "150"}, morfologia : {forma : "convexo", color : "marrónamarillento", textura : "viscosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "espaciadas", grosor : "gruesas", color : "blanco", madurez : "amarillento"}, 
velo : {presencia : "tue", color : "blanco", forma : "parcial", textura : "viscoso", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "blanda", olor : ["agradable", "afrutado", "terroso"], corte : "blanca"}, 
comestible : "true"};

let LactariusDeliciosus = { nombre : { especie : "LactariusDeliciosus", popular : "Enchilado", grupo : "Micorrizógeno"}, estipite : { altura : { min : "20", max : "60"}, diametro : { min : "10", max : "20"}, morfologia : { forma : "cilíndrico", conexion : "central", color : "anaranjadas"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "40", max : "140"}, morfologia : {forma : "umblicado", color : "naranja", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "juntas", grosor : "finas", color : "anaranjada", madurez : "naranjazanahoria"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "firme", olor : ["agradable", "afrutado"], corte : "naranjazanahoria"}, 
comestible : "true"};

let LactariusIndigo = { nombre : { especie : "LactariusIndigo", popular : "Enchiladoazul", grupo : "Micorrizógeno"}, estipite : { altura : { min : "20", max : "80"}, diametro : { min : "10", max : "25"}, morfologia : { forma : "cilíndrico", conexion : "central", color : "azulindigo"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "50", max : "150"}, morfologia : {forma : "umblicado", color : "azulindigo", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "juntas", grosor : "finas", color : "azulindigo", madurez : "azulverdoso"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "quebradiza", olor : ["afrutado", "terrszo"], corte : "azulindigo"}, 
comestible : "true"};

let LentinulaEdodes = { nombre : { especie : "LentinulaEdodes", popular : "Shiitake", grupo : "Saprófito"}, estipite : { altura : { min : "30", max : "80"}, diametro : { min : "10", max : "15"}, morfologia : { forma : "cilíndrico", conexion : "lateral", color : "marrónclaro"}, anillo : { presencia : "true", grosor : "delgado", textura : "membranoso", posicion : "superior"}}, 
pileo : { diametro : { min : "50", max : "250"}, morfologia : {forma : "convexo", color : "marrón", textura : "lisa"}, parches : { presencia : "true", color : "crema", forma : "escamas", saturacion : "irregular", tamanio : "pequeño"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "apretadas", grosor : "finas", color : "amarillenta", madurez : "pardusca"}, 
velo : {presencia : "true", color : "blanco", forma : "globo", textura : "membranosa", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "firme", olor : ["agradable", "aromático", "terroso"], corte : "blanco"}, 
comestible : "true"};

let LepiotaBoudieri = { nombre : { especie : "LepiotaBoudieri", popular : "Sinnombrecomún", grupo : "Saprófito"}, estipite : { altura : { min : "30", max : "70"}, diametro : { min : "3", max : "7"}, morfologia : { forma : "cilíndrico", conexion : "central", color : ["blanquecino", "marrón", "rojizo"]}, anillo : { presencia : "true", grosor : "delgado", textura : "membranoso", posicion : "superior"}}, 
pileo : { diametro : { min : "20", max : "50"}, morfologia : {forma : ["convexo", "plano"], color : ["blanquesino", "marronrojizo"], textura : "escamosa"}, parches : { presencia : "true", color : ["marrón", "rojizo"], forma : "irregular", saturacion : "irregular", tamanio : ["pequeño", "mediano"]}}, 
laminas : {adherencia : "libres", espaciamiento : "apretadas", grosor : "delgadas", color : ["blanco", "crema"], madurez : ["blanco", "crema"]}, 
velo : {presencia : "true", color : "blanco", forma : "anillo", textura : "membranosa", efimero : "joven"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "frágil", olor : ["fungico", "terroso"], corte : "blanco"}, 
comestible : "false"};

let MorchellaElata = { nombre : { especie : "MorchellaElata", popular : "Morilla-Colmenillanegra", grupo : "Saprófito"}, estipite : { altura : { min : "50", max : "150"}, diametro : { min : "15", max : "40"}, morfologia : { forma : "cilíndrico", conexion : "central", color : ["blanco", "crema", "ocre"]}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "100"}, morfologia : {forma : "conica", color : ["marron", "negro", "gris"], textura : ["seca", "alveolada"]}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "elástica", olor : ["fungico", "terroso"], corte : "blanco"}, 
comestible : "true"};

let MorchellaEsculenta = { nombre : { especie : "MorchellaEsculenta", popular : "Colmenillas", grupo : "Saprófito"}, estipite : { altura : { min : "50", max : "150"}, diametro : { min : "20", max : "50"}, morfologia : { forma : "cilíndrico", conexion : "directa", color : "crema"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "30", max : "80"}, morfologia : {forma : "cónico", color : ["amarilloocre", "marron"], textura : "cerosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "frágil", olor : ["agradable", "terroso", "nuez"], corte : "crema"}, 
comestible : "true"};

let PleurotusOsteatrus = { nombre : { especie : "PleurotusOsteatrus", popular : "Hongoostra", grupo : "Saprófito"}, estipite : { altura : { min : "5", max : "40"}, diametro : { min : "4", max : "35"}, morfologia : { forma : "excentrico", conexion : "lateral", color : "crema"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "50", max : "200"}, morfologia : {forma : "ostra", color : "gris", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "apretadas", grosor : "delgadas", color : "blanco", madurez : "blanquecino"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "dura", olor : "agradable", corte : "blanco"}, 
comestible : "true"};

let PleurotusSpp = { nombre : { especie : "PleurotusSpp", popular : "Seta", grupo : "Saprófito"}, estipite : { altura : { min : "5", max : "20"}, diametro : { min : "5", max : "35"}, morfologia : { forma : "excentrico", conexion : "lateral", color : "crema"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "50", max : "200"}, morfologia : {forma : "ostra", color : "marron", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "decurrente", espaciamiento : "apretadas", grosor : "finas", color : "crema", madurez : "amarillenta"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "carnosa", olor : ["agradable", "anis", "nuez"], corte : "blanco"}, 
comestible : "true"};

let RamariaBotrytis = { nombre : { especie : "RamariaBotrytis", popular : "Hongocoral", grupo : "Micorrizógeno"}, estipite : { altura : { min : "50", max : "200"}, diametro : { min : "50", max : "200"}, morfologia : { forma : "coral", conexion : "directa", color : "blanco"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "50", max : "200"}, morfologia : {forma : "ramificada", color : "rojocoral", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "quebradiza", olor : ["afrutado", "almendra", "nuez"], corte : "rosados"}, 
comestible : "true"};

let RamariaFlava = { nombre : { especie : "RamariaFlava", popular : "Manecillas", grupo : "Micorrizógeno"}, estipite : { altura : { min : "50", max : "150"}, diametro : { min : "50", max : "150"}, morfologia : { forma : "coral", conexion : "directa", color : "amarillopálido"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "50", max : "150"}, morfologia : {forma : "ramificada", color : "amarillo", textura : "lisa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "quebradiza", olor : ["afrutado", "floral"], corte : "amarillopálido"}, 
comestible : "true"};

let UstilagoMaydis = { nombre : { especie : "UstilagoMaydis", popular : "Huitlacoche", grupo : "Parásito"}, estipite : { altura : { min : "null", max : "null"}, diametro : { min : "null", max : "null"}, morfologia : { forma : "null", conexion : "null", color : "null"}, anillo : { presencia : "false", grosor : "null", textura : "null", posicion : "null"}}, 
pileo : { diametro : { min : "null", max : "null"}, morfologia : {forma : "tejidosvegetales", color : "grisazulado", textura : "carnosa"}, parches : { presencia : "false", color : "null", forma : "null", saturacion : "null", tamanio : "null"}}, 
laminas : {adherencia : "null", espaciamiento : "null", grosor : "null", color : "null", madurez : "null"}, 
velo : {presencia : "false", color : "null", forma : "null", textura : "null", efimero : "null"}, 
volva : {presencia : "false", color : "null", forma : "null", capas : "null", textura : "null", efimero : "null"}, 
consistencia : {firmeza : "blandas", olor : ["terroso", "ahumado"], corte : "grisaceo"}, 
comestible : "true"};

// Reglas de producción


// Primer filtro

function R1(sustrato){
    // entrada del label  --->       sustrato = "Madera";
    if (sustrato === "pastos" ||
  sustrato === "prados" ||
  sustrato === "suelo de bosque" ||
  sustrato === "madera" ||
  sustrato === "animal muerto" ||
  sustrato === "estiércol" ||
  sustrato === "hojas" ||
  sustrato === "piñas" ||
  sustrato === "frutas"){
        return baseHechos.push("El hongo es Saprófito")
    }
}

function R2(sustrato){
    // entrada del label  --->       sustrato = "Madera";
    if (sustrato === "cerca de un roble" ||
        sustrato === "cerca de hayas" ||
        sustrato === "cerca de pinos" ||
        sustrato === "cerca de avellanos" ||
        sustrato === "cerca de encinas" ||
        sustrato === "bajo árbol de hoja ancha" ||
        sustrato === "bajo coníferas"){
        baseHechos.push("El hongo es Micorrizógeno")
    }
}

function R3(sustrato){
    // entrada del label  --->       sustrato = "Madera";
    if (sustrato === "plantas" ||
        sustrato === "larvas de insecto" ||
        sustrato === "árbol" ||
        sustrato === "animal vivo" ||
        sustrato === "vegetal" ||
        sustrato === "sobre otro hongo"){
        baseHechos.push("El hongo es Parásito")
    }
}


// Segundo filtro


function R4(pileoForma, laminasColor, estipite, color){
    if ((pileoForma === "convexo" || pileoForma === "plano") && (laminasColor === "rosadas" || laminasColor === "marrón" || laminasColor === "marrón oscuro")&& estipite === "cilíndrico" && (color === "marrón" || color === "marrón oscuro" || color === "marrón claro")){
        baseHechos.push("El hongo pertence al género Agaricus")
    }
}

function R5(pileoForma, velo, laminas, laminasForma, estipite, volva){
    if (velo === "presente" && (laminas === "blancas" || laminasForma === "libres") && (pileoForma === "convexo" || pileoForma === "plano") && estipite === "cilíndrico" && volva === "presente"){
        baseHechos.push("El hongo pertence al género Amanita")
    }
}

function R6(pileo, parches, poros, volva){
    if ((pileo === "convexo" || pileo === "plano" || pileoTextura === "carnoso") && poros === "presente" && color === "amarillo", parches === "ausente" && volva === "ausente"){
        baseHechos.push("El hongo pertence al género Boletus")
    }
}


function R7(pileo, estipite, color, anillo) {
    if (
        (pileo === "infundibuliforme" || pileo === "embudo" || pileo === "convexo") &&
        (estipite === "cilíndrico" || estipite === "robusto") &&
        (color === "amarillo" || color === "anaranjado" || color === "amarillo anaranjado" || color === "naranja" || color === "amarillo brillante") &&
        anillo === "ausente"
    ) {
        baseHechos.push("El hongo pertenece al género Cantharellus");
    }
}

function R8(pileo, estipite, color, anillo, velo) {
    if (
        (pileo === "cónico" || pileo === "umbonado" || pileo === "convexo") &&
        estipite === "cilíndrico" &&
        (
            color === "marrón rojizo" || color === "marrón anaranjado" ||
            color === "ocre amarillento" || color === "pardo ocráceo" ||
            color === "marrónamarillento" || color === "azulado"
        ) &&
        (anillo === "presente" || anillo === "ausente") &&
        (velo === "tela" || velo === "araña" || velo === "aracnoide")
    ) {
        baseHechos.push("El hongo pertenece al género Cortinarius");
    }
}

function R9(pileo, pileoTextura, poros, estipiteForma, estipite, color){
    if ((pileo === "convexo" || pileo === "plano" || pileoTextura === "carnoso") && poros === "si" && (estipite === "cilíndrico" || estipiteForma === "Robusto") && color === "marrón"){
        baseHechos.push("El hongo pertence al género Cortinarius")
    }
}

function R10(pileo, estipite, color, anillo) {
    if (
        (pileo === "cerebriforme" || pileo === "sillademontar") &&
        estipite === "cilíndrico" &&
        (color === "pardo rojizo" || color === "marrón rojizo" || color === "marrón oscuro" || color === "negruzco") &&
        anillo === "ausente"
    ) {
        baseHechos.push("El hongo pertenece al género Gyromitra");
    }
}

function R11(pileo, estipite, color, anillo) {
    if (
        (pileo === "infundibuliforme" || pileo === "convexo") &&
        (estipite === "cilíndrico" || estipite === "curvado") &&
        (color === "amarillo brillante" || color === "marrón amarillento") &&
        anillo === "presente"
    ) {
        baseHechos.push("El hongo pertenece al género Hygrophorus");
    }
}

function R12(pileo, estipite, color, anillo) {
    if (
        pileo === "umblicado" &&
        estipite === "cilíndrico" &&
        (color === "naranja" || color === "azulindigo") &&
        anillo === "ausente"
    ) {
        baseHechos.push("El hongo pertenece al género Lactarius");
    }
}

function R13(pileo, estipite, anillo, parches) {
    if (
        pileo === "convexo" &&
        estipite === "cilíndrico" &&
        anillo === "membranoso" &&
        parches === "escamas"
    ) {
        baseHechos.push("El hongo pertenece al género Lentinula");
    }
}

function R14(pileo, estipite, anillo, parches) {
    if (
        (pileo === "convexo" || pileo === "plano") &&
        estipite === "cilíndrico" &&
        anillo === "membranoso" &&
        parches === "escamosa"
    ) {
        baseHechos.push("El hongo pertenece al género Lepiota");
    }
}

function R15(pileoForma, pileoTextura, estipiteForma, estipiteConexion, anilloPresente) {
    if (
        (pileoForma === "cónica" || pileoForma === "conica") &&
        (pileoTextura === "alveolada" || pileoTextura === "cerosa" || pileoTextura === "seca") &&
        estipiteForma === "cilíndrico" &&
        (estipiteConexion === "central" || estipiteConexion === "directa") &&
        anilloPresente === "false"
    ) {
        baseHechos.push("El hongo pertenece al género Morchella");
    }
}

function R16(pileoForma, estipiteForma, estipiteConexion, anilloPresente) {
    if (
        pileoForma === "ostra" &&
        estipiteForma === "excentrico" &&
        estipiteConexion === "lateral" &&
        anilloPresente === "false"
    ) {
        baseHechos.push("El hongo pertenece al género Pleurotus");
    }
}

function R17(estipiteForma, estipiteConexion, pileoForma, anilloPresente) {
    if (
        estipiteForma === "coral" &&
        estipiteConexion === "directa" &&
        pileoForma === "ramificada" &&
        anilloPresente === "false"
    ) {
        baseHechos.push("El hongo pertenece al género Ramaria");
    }
}

function R18(pileoForma, pileoColor, grupo, estipiteForma) {
    if (
        pileoForma === "tejidosvegetales" &&
        pileoColor === "grisazulado" &&
        grupo === "Parásito" &&
        estipiteForma === "null"
    ) {
        baseHechos.push("El hongo pertenece al género Ustilago");
    }
}

function R19(pileoForma, pileoColor, pileoTextura, grupo, estipiteForma) {
    if (
        pileoForma === "globosa" &&
        pileoColor === "crema" &&
        pileoTextura === "gomosa" &&
        grupo === "Parásito" &&
        estipiteForma === "null"
    ) {
        baseHechos.push("El hongo pertenece al género Cyttaria");
    }
}
// Tercer filtro


function R20(pileoTextura, pileoColor, pileoDiametroMax, laminasGrosor, consistenciaOlor) {
    if (
        pileoTextura === "separable" &&
        (pileoColor === "gris" || pileoColor === "marrón" || pileoColor === "pálido") &&
        pileoDiametroMax <= 90 &&
        laminasGrosor === "anchas" &&
        (consistenciaOlor === "anis" || consistenciaOlor === "almendras" || consistenciaOlor === "terroso" || consistenciaOlor === "dulce")
    ) {
        baseHechos.push("El hongo es probablemente Agaricus bisporus (Champiñón blanco)");
    }
}

function R21(pileoTextura, pileoColor, pileoDiametroMax, laminasGrosor, consistenciaOlor) {
    if (
        pileoTextura === "lisa" &&
        pileoColor === "marrón" &&
        pileoDiametroMax >= 100 &&
        laminasGrosor === "finas" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "dulce" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Agaricus brunnescens (Champiñón portobello)");
    }
}

function R22(pileoColor, pileoTextura, pileoDiametroMax, parchesPresencia, consistenciaOlor) {
    if (
        (pileoColor === "Rojo" || pileoColor === "anaranjado" || pileoColor === "amarillo") &&
        (pileoTextura === "lisa" || pileoTextura === "viscosa") &&
        pileoDiametroMax >= 80 &&
        parchesPresencia === "true" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "afrutado" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Amanita muscaria (Matamoscas)");
    }
}

function R23(pileoColor, pileoTextura, pileoDiametroMax, parchesPresencia, consistenciaOlor) {
    if (
        pileoColor === "blanco" &&
        (pileoTextura === "lisa") &&
        pileoDiametroMax >= 50 &&
        parchesPresencia === "true" &&
        (consistenciaOlor === "dulce" || consistenciaOlor === "miel")
    ) {
        baseHechos.push("El hongo es probablemente Amanita phalloides (Oronjaverde)");
    }
}

function R24(pileoColor, pileoTextura, pileoDiametroMax, parchesPresencia, consistenciaOlor) {
    if (
        pileoColor === "blanco" &&
        pileoTextura === "lisa" &&
        pileoDiametroMax >= 50 &&
        parchesPresencia === "false" &&
        consistenciaOlor === "dulce"
    ) {
        baseHechos.push("El hongo es probablemente Amanita verna (Amanita blanca mortal)");
    }
}

function R25(pileoColor, pileoTextura, pileoDiametroMax, parchesPresencia, consistenciaOlor) {
    if (
        pileoColor === "blanco" &&
        pileoTextura === "lisa" &&
        pileoDiametroMax >= 50 &&
        parchesPresencia === "false" &&
        (consistenciaOlor === "rafanoide" || consistenciaOlor === "desagradable")
    ) {
        baseHechos.push("El hongo es probablemente Amanita virosa (Ángeldestructor)");
    }
}

function R26(pileoColor, pileoTextura, pileoDiametroMax, laminasAdherencia, consistenciaOlor) {
    if (
        pileoColor === "pardo" &&
        pileoTextura === "lisa" &&
        pileoDiametroMax >= 70 &&
        laminasAdherencia === "tubos" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "terroso" || consistenciaOlor === "avellanas")
    ) {
        baseHechos.push("El hongo es probablemente Boletus edulis (Cemita)");
    }
}

function R27(pileoColor, pileoTextura, pileoDiametroMax, consistenciaOlor) {
    if (
        (pileoColor === "blanco" || pileoColor === "oliva" || pileoColor === "crema") &&
        (pileoTextura === "aterciopelada" || pileoTextura === "lisa") &&
        pileoDiametroMax >= 100 &&
        (consistenciaOlor === "carnepodrida" || consistenciaOlor === "desagradable")
    ) {
        baseHechos.push("El hongo es probablemente Boletus satanas (Hongo de Satanás)");
    }
}

function R28(pileoColor, pileoTextura, pileoDiametroMax, consistenciaFirmeza, consistenciaOlor) {
    if (
        (pileoColor === "amarillo" || pileoColor === "naranja") &&
        (pileoTextura === "aterciopelada" || pileoTextura === "lisa") &&
        pileoDiametroMax <= 100 &&
        (consistenciaFirmeza === "firme" || consistenciaFirmeza === "elastica") &&
        (consistenciaOlor === "afrutado" || consistenciaOlor === "melocoton" || consistenciaOlor === "floral")
    ) {
        baseHechos.push("El hongo es probablemente Cantharellus cibarius (Rebozuelo Chantarela)");
    }
}

function R29(pileoColor, pileoTextura, pileoDiametroMax, laminasAdherencia, consistenciaOlor) {
    if (
        pileoColor === "amarilloanaranjado" &&
        pileoTextura === "lisa" &&
        pileoDiametroMax <= 60 &&
        laminasAdherencia === "decurrente" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "afrutado" || consistenciaOlor === "melocoton")
    ) {
        baseHechos.push("El hongo es probablemente Cantharellus lutescens (Angula de campo)");
    }
}

function R30(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, laminasEspaciamiento, consistenciaOlor) {
    if (
        (estipiteColor === "marrónrojizo" || estipiteColor === "marrónanaranjado") &&
        (estipiteMorfologia === "decurrente" || estipiteMorfologia === "curvado") &&
        (pileoColor === "marrónrojizo" || pileoColor === "marrónanaranjado") &&
        pileoTextura === "fibrilosa" &&
        laminasEspaciamiento === "espaciadas" &&
        (consistenciaOlor === "terroso" || consistenciaOlor === "mohoso")
    ) {
        baseHechos.push("El hongo es probablemente Cortinarius orellanus (Cortinariaceae)");
    }
}

function R31(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, laminasEspaciamiento, consistenciaOlor) {
    if (
        (estipiteColor === "marrónamarillento" || estipiteColor === "azulado") &&
        estipiteMorfologia === "central" &&
        (pileoColor === "ocreamarillento" || pileoColor === "ocremarrón" || pileoColor === "pardoocráceo") &&
        pileoTextura === "vicosa" &&
        laminasEspaciamiento === "apretadas" &&
        (consistenciaOlor === "terroso" || consistenciaOlor === "mohoso" || consistenciaOlor === "dulce")
    ) {
        baseHechos.push("El hongo es probablemente Cortinarius trivialis (Cortinarioviscosoazulado)");
    }
}

function R32(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        (estipiteColor === "blanco" || estipiteColor === "violaceos") &&
        (estipiteMorfologia === "irregular" || estipiteMorfologia === "inferior") &&
        (pileoColor === "pardoclaro" || pileoColor === "pardorojizo") &&
        pileoTextura === "arrugada" &&
        (consistenciaOlor === "dulce" || consistenciaOlor === "terroso" || consistenciaOlor === "afrutado")
    ) {
        baseHechos.push("El hongo es probablemente Gyromitra esculenta (Seta Cerebro - Falsacolmenilla)");
    }
}

function R33(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        (estipiteColor === "blanco" || estipiteColor === "grisáceopálido" || estipiteColor === "amarillopálido") &&
        estipiteMorfologia === "adherido" &&
        (pileoColor === "marrónrojizo" || pileoColor === "marrónoscuro" || pileoColor === "marrónpurpúreo" || pileoColor === "negruzco") &&
        pileoTextura === "lisa" &&
        (consistenciaOlor === "terroso" || consistenciaOlor === "afrutado" || consistenciaOlor === "débil")
    ) {
        baseHechos.push("El hongo es probablemente Gyromitra infula (Oreja de Ratón)");
    }
}

function R34(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        estipiteColor === "amarillobrillante" &&
        estipiteMorfologia === "decurrente" &&
        (pileoColor === "amarillobrillante" || pileoColor === "naranja") &&
        pileoTextura === "viscosa" &&
        (consistenciaOlor === "afrutado" || consistenciaOlor === "inodoro")
    ) {
        baseHechos.push("El hongo es probablemente Hygrophorus hypothejus (Heraldo del Invierno)");
    }
}

function R35(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        estipiteColor === "blanco" &&
        estipiteMorfologia === "decurrente" &&
        pileoColor === "marrónamarillento" &&
        pileoTextura === "viscosa" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "afrutado" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Hygrophorus latitabundus (Llanega Negra)");
    }
}

function R36(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        estipiteColor === "anaranjadas" &&
        estipiteMorfologia === "central" &&
        pileoColor === "naranja" &&
        pileoTextura === "lisa" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "afrutado")
    ) {
        baseHechos.push("El hongo es probablemente Lactarius deliciosus (Enchilado)");
    }
}

function R37(estipiteColor, estipiteMorfologia, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        estipiteColor === "azulindigo" &&
        estipiteMorfologia === "central" &&
        pileoColor === "azulindigo" &&
        pileoTextura === "lisa" &&
        (consistenciaOlor === "afrutado" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Lactarius indigo (Enchilado Azul)");
    }
}

function R38(estipiteColor, estipiteConexion, pileoColor, pileoTextura, pileoParcheColor, consistenciaOlor) {
    if (
        estipiteColor === "marrónclaro" &&
        estipiteConexion === "lateral" &&
        pileoColor === "marrón" &&
        pileoTextura === "lisa" &&
        pileoParcheColor === "crema" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "aromático" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Lentinula Edodes (Shiitake)");
    }
}

function R39(estipiteColor, estipiteConexion, pileoColor, pileoTextura, pileoParcheColor, laminasColor, consistenciaOlor) {
    if (
        (estipiteColor.includes("blanquecino") || estipiteColor.includes("marrón") || estipiteColor.includes("rojizo")) &&
        estipiteConexion === "central" &&
        (pileoColor.includes("blanquesino") || pileoColor.includes("marronrojizo")) &&
        pileoTextura === "escamosa" &&
        (pileoParcheColor.includes("marrón") || pileoParcheColor.includes("rojizo")) &&
        laminasColor.includes("blanco") &&
        (consistenciaOlor === "fungico" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Lepiota Boudieri");
    }
}

function R40(estipiteColor, estipiteConexion, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        // Morchella Elata
        (estipiteColor.includes("blanco") || estipiteColor.includes("crema") || estipiteColor.includes("ocre")) &&
        estipiteConexion === "central" &&
        (pileoColor.includes("marron") || pileoColor.includes("negro") || pileoColor.includes("gris")) &&
        (pileoTextura.includes("seca") || pileoTextura.includes("alveolada")) &&
        (consistenciaOlor === "fungico" || consistenciaOlor === "terroso")
    ) {
        baseHechos.push("El hongo es probablemente Morchella Elata");
    }
}
function R41(estipiteColor, estipiteConexion, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        // Morchella Esculenta
        estipiteColor === "crema" &&
        estipiteConexion === "directa" &&
        (pileoColor.includes("amarilloocre") || pileoColor.includes("marron")) &&
        pileoTextura === "cerosa" &&
        (consistenciaOlor.includes("agradable") || consistenciaOlor.includes("terroso") || consistenciaOlor.includes("nuez"))
    ) {
        baseHechos.push("El hongo es probablemente Morchella Esculenta");
    }
}

function R42(estipiteColor, estipiteConexion, pileoColor, pileoTextura, laminasColor, consistenciaOlor) {
    if (
        // Pleurotus Osteatrus
        estipiteColor === "crema" &&
        estipiteConexion === "lateral" &&
        pileoColor === "gris" &&
        pileoTextura === "lisa" &&
        laminasColor === "blanco" &&
        (consistenciaOlor === "agradable")
    ) {
        baseHechos.push("El hongo es probablemente Pleurotus Osteatrus");
    }
}

function R43(estipiteColor, estipiteConexion, pileoColor, pileoTextura, laminasColor, consistenciaOlor) {
    if (
        // Pleurotus spp
        estipiteColor === "crema" &&
        estipiteConexion === "lateral" &&
        pileoColor === "marron" &&
        pileoTextura === "lisa" &&
        laminasColor === "crema" &&
        (consistenciaOlor === "agradable" || consistenciaOlor === "anis" || consistenciaOlor === "nuez")
    ) {
        baseHechos.push("El hongo es probablemente Pleurotus Spp");
    }
}

function R44(estipiteColor, estipiteConexion, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        // Ramaria Botrytis
        estipiteColor === "blanco" &&
        estipiteConexion === "directa" &&
        pileoColor === "rojocoral" &&
        pileoTextura === "lisa" &&
        (consistenciaOlor === "afrutado" || consistenciaOlor === "almendra" || consistenciaOlor === "nuez")
    ) {
        baseHechos.push("El hongo es probablemente Ramaria Botrytis");
    }
}

function R45(estipiteColor, estipiteConexion, pileoColor, pileoTextura, consistenciaOlor) {
    if (
        // Ramaria Flava
        estipiteColor === "amarillopálido" &&
        estipiteConexion === "directa" &&
        pileoColor === "amarillo" &&
        pileoTextura === "lisa" &&
        (consistenciaOlor === "afrutado" || consistenciaOlor === "floral")
    ) {
        baseHechos.push("El hongo es probablemente Ramaria Flava");
    }
}

function R46(pileColor, pileTextura, consistenciaOlor) {
    if (
        // Ustilago Maydis (Huitlacoche)
        pileColor === "grisazulado" &&
        pileTextura === "carnosa" &&
        (consistenciaOlor === "terroso" || consistenciaOlor === "ahumado")
    ) {
        baseHechos.push("El hongo es probablemente Ustilago Maydis (Huitlacoche)");
    }
}

function R47(pileColor, pileTextura, consistenciaOlor, consistenciaCorte) {
    if (
        // Cyttaria Espinosae (Dihueñe)
        pileColor === "crema" &&
        pileTextura === "gomosa" &&
        consistenciaOlor.some(olor => olor === "dulce" || olor === "afrutado" || olor === "imperceptible") &&
        (consistenciaCorte === "blanquecina" || consistenciaCorte === "amarillentapálida")
    ) {
        baseHechos.push("El hongo es probablemente Cyttaria Espinosae (Dihueñe)");
    }
}

//Construcción del grafo

const grafo = {
    R0_Raiz :          [R1, R2, R3],             
    R1_Saprofito :     [R4, R8, R10, R13, R14, R15, R16],
    R2_Micorrizogeno : [R5, R6, R7, R9, R11, R12, R18],
    R3_Parasito   :    [R19, R20],
    R4_Agaricus   :    [R20,R21],
    R5_Amanita    :    [R22, R23, R24, R25],
    R6_Boletus     :   [R26, R27],
    R7_Cantharellus :  [R28, R29],
    R8_Cortinarius  :  [R30, R31], 
    R9_Gyromitra    :  [R32, R33],
    R10_Gyromitra   :  [R32, R33],
    R11_Hygrophorus :  [R34, R35],
    R12_Lactarius   :  [R36, R37],
    R13_Lentinula   :  [R38],
    R14_Lepiota     :  [R39],
    R15_Morchella   :  [R40, R41],
    R16_Pleurotus   :  [R42, R43],
    R17_Ramaria     :  [R44, R45],
    R18_Ustilago    :  [R46],
    R19_Cyttaria    :  [R47]
};

//Arcos del grafo
const arcos = {
        R0_Raiz :          ['El hongo se desarrolla en materia muerta', 'El hongo desarolla una relación simbiontica', 'EL hongo desarrolla una relación parasitaria'],             
        R1_Saprofito :     ['El hongo es de género Agaricus', 'El hongo es de género Cortinarius', 'El hongo es de género Gyromitra', 'EL hongo es de género Lentinula', 'R14', 'R15', 'R16'],
        R2_Micorrizogeno : ['El hongo es género Amanita', 'El hongo es género Boletus', 'El hongo es género Cantharellus', 'El hongo es género Gyromitra', 'El hongo es género Hygrophorus', 'El hongo es género Lactarius', 'El hongo es género Ustilago'],
        R3_Parasito   :    ['El hongo es género Cyttaria', 'El hongo es género Ustilago'],
        R4_Agaricus   :    ['El hongo es probablemente Agaricus bisporus (Champiñón blanco)','El hongo es probablemente Agaricus brunnescens (Champiñón portobello)'],
        R5_Amanita    :    ['El hongo es probablemente Amanita muscaria (Matamoscas)', 'El hongo es probablemente Amanita phalloides (Oronjaverde)', 'El hongo es probablemente Amanita verna (Amanita blanca mortal)', 'El hongo es probablemente Amanita virosa (Ángeldestructor)'],
        R6_Boletus     :   ['El hongo es probablemente Boletus edulis (Cemita)', 'El hongo es probablemente Boletus satanas (Hongo de Satanás)'],
        R7_Cantharellus :  ['El hongo es probablemente Cantharellus cibarius (Rebozuelo Chantarela)', 'El hongo es probablemente Cantharellus lutescens (Angula de campo)'],
        R8_Cortinarius  :  ['El hongo es probablemente Cortinarius orellanus (Cortinariaceae)', 'El hongo es probablemente Cortinarius trivialis (Cortinarioviscosoazulado)'], 
        R9_Gyromitra    :  ['El hongo es probablemente Gyromitra esculenta (Seta Cerebro - Falsacolmenilla)', 'El hongo es probablemente Gyromitra infula (Oreja de Ratón)'],
        R10_Gyromitra   :  ['El hongo es probablemente Gyromitra esculenta (Seta Cerebro - Falsacolmenilla)', 'El hongo es probablemente Gyromitra infula (Oreja de Ratón)'],
        R11_Hygrophorus :  ['El hongo es probablemente Hygrophorus hypothejus (Heraldo del Invierno)', 'El hongo es probablemente Hygrophorus latitabundus (Llanega Negra)'],
        R12_Lactarius   :  ['El hongo es probablemente Lactarius deliciosus (Enchilado)', 'El hongo es probablemente Lactarius indigo (Enchilado Azul)'],
        R13_Lentinula   :  ['El hongo es probablemente Lentinula Edodes (Shiitake)'],
        R14_Lepiota     :  ['El hongo es probablemente Lepiota Boudieri'],
        R15_Morchella   :  ['El hongo es probablemente Morchella Elata', 'El hongo es probablemente Morchella Esculenta'],
        R16_Pleurotus   :  ['El hongo es probablemente Pleurotus Osteatrus', 'El hongo es probablemente Pleurotus Spp'],
        R17_Ramaria     :  ['El hongo es probablemente Ramaria Botrytis', 'El hongo es probablemente Ramaria Flava'],
        R18_Ustilago    :  ['El hongo es probablemente Ustilago Maydis (Huitlacoche)'],
        R19_Cyttaria    :  ['El hongo es probablemente Cyttaria Espinosae (Dihueñe)']
};

// busqueda

var baseHechos = new Array();
var hijos = null;
var padres = null;
var iterador = -1;

function buscar(nivel, elementos){
    //En que nivel se encuentra el grafo
    //Los elementos son Label del HTML
    if(nivel === 0){
        baseHechos.push("Inicio de la inferencia");
        hijos = grafo[nivel][0];
        baseHechos.push(arcos[nivel][0]);
        //Recorre el hijo:
        var size = baseHechos.length;
        while(size == baseHechos.length){
            iterador++;
            hijos[nivel][iterador](sustrato);
        }
        return nivel = 1;
    }

    if(nivel === 1){
        iterador = -1;
        hijos = grafo[nivel][0];
        baseHechos.push(arcos[nivel][0]);
        //Recorre el hijo:
        var size = baseHechos.length;
        while(size == baseHechos.length){
            iterador++;
            hijos[nivel][iterador](sustrato);
        }
        if (size != baseHechos.length){
            return nivel = 2;
        }else{
            baseHechos.push("Los datos no son suficientes para determinar el hongo");
        }
    }

    if(nivel === 1){
        baseHechos.push("El hongo es Saprófito");
        hijos = grafo[1][0];
        baseHechos.push(arcos[1][0]);
        //Recorre el hijo:
        padres.push(1);
        hijos[0][iterador](sustrato);
        return nivel = 2;
    }

}
