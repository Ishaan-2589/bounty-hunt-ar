// ROUTE ORDER
const routeSteps = {
  "A": ["A","H","C","D","E","F"],
  "B": ["G","I","D","C","B","F"],
  "C": ["B","C","H","A","D","F"],
  "D": ["I","G","A","E","C","F"],
  "E": ["D","E","J","C","H","F"]
};

const riddles = {

"A":{
"Route A":"16-1-18-11-9-14-7",
"Route C":".. / .... --- .-.. -.. / -- .- -. -.-- / - .-. .- ...- . .-.. . .-. ... --..-- / -.-- . - / -. --- -. . / ... - .- -. -.-- / ..-. --- .-. . ...- . .-.",
"Route D":"Un lugar donde el movimiento descansa antes de volver al camino."
},

"B":{
"Route B":"Dmbttft mjf po cpui nz tjeft, zfu J cfmpoh up opof",
"Route C":"12-15-2-2-25"
},

"C":{
"Route A":"Ƨ⅃⅃ƎƆ ƆIИAӘЯO ƎӘЯAHƆƎЯ OT ƎUIИI T∀HT ʞƎƎƧ",
"Route B":"˙ʞɐǝɹq ɐ ǝʞɐʇ spuᴉɯ ʎɹƃunɥ ǝɹǝɥʍ ɐɯoɹɐ ǝɥʇ ʍoןןoℲ",
"Route C":"Aquí las ideas se sazonan, pero la verdadera materia nunca se escribe en la pizarra.",
"Route D":".. -.. . .- ... / .--. .- ..- ... . / .... . .-. . / .-- .... .. .-.. . / .- .--. .--. . - .. - . ... / - .- -.- . / - .... . / ... - .- --. .",
"Route E":"La estación de combustible para agentes hambrientos"
},

"D":{
"Route A":"Nboz tfbut gbdf b tjohmf tubhf, Xifsf tqffdift boe qfsgpsnbodft fohbhf. Gjoe uif ibmm xifsf fdipft cppn, Zpvs ofyu dmvf xbjut jotjef uijt sppn.",
"Route B":".-- .... . .-. . / . -.-. .... --- . ... / .-. . ... --- -. .- - . / .. -. / - .... . / --. .-. . .- - / .... .- .-.. .-.. --..-- / ... . . -.- / - .... . / ... - .- --. . / --- ..-. / ... .. .-.. . -. -.-. .",
"Route C":".nrob era seohce erehw llah eht dniF",
"Route E":"1-21-4-9-20-15-18-9-21-13"
},

"E":{
"Route A":"Antes de que el conocimiento resuene por cada pasillo, busca el aula donde todo comienza.",
"Route D":"01000010 01100101 01100110 01101111 01110010 01100101 00100000 01110100 01101000 01100101 00100000 01110011 01100101 01100011 01101111 01101110 01100100 00100000 01100001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01110100 01101000 01101001 01110010 01100100 00101100 00100000 01100110 01101001 01101110 01100100 00100000 01110100 01101000 01100101 00100000 01100010 01100101 01100111 01101001 01101110 01101110 01101001 01101110 01100111 00101110",
"Route E":".gninnigeb eht sdnats driht eht dna dnoces eht erofeB"
},

"F":{
"ALL_ROUTES":"01001001 00100000 01110000 01110010 01100101 01110011 01110011 00100000 01110111 01101000 01100001 01110100 11100111 01110011 00100000 01101001 01101110 01110110 01101001 01110011 01101001 01100010 01101100 01100101 00100000 01110100 01101111 00100000 01101101 01100001 01101011 01100101 00100000 01101001 01110100 00100000 01110110 01101001 01110011 01101001 01100010 01101100 01100101 00101110"
},

"G":{
"Route B":"18-15-15-13_6-two",
"Route D":"Uisff eppst tuboe jo mjof; dipptf uif pof cfuxffo uif fyusfnft."
},

"H":{
"Route A":"- .... . / ... - --- -. . / ... - . .--. ... / - .- -.- . / -.-- --- ..- / - --- / - .... . / -. . -..- - / .--. .-.. .- -. .",
"Route C":"01001001 / 01101000 01100001 01110110 01100101",
"Route E":"01001100 01100101 01110110 01100101 01101100 00100000 01100010 01111001 00100000 01101100 01100101 01110110 01100101 01101100 00101100 00100000 01001001 00100000 01100111 01110101 01101001 01100100 01100101 00100000 01111001 01101111 01110101 01110010 00100000 01110111 01100001 01111001 00101110"
},

"I":{
"Route B":"01000010 01100101 01100110 01101111 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01100101 01101110 01110100 01100101 01110010 00101100 00100000 01001001 00100000 01100100 01100101 01100011 01101001 01100100 01100101 00100000 01101001 01100110 00100000 01111001 01101111 01110101 00100000 01101101 01100001 01111001 00101110",
"Route D":"19-5-3-21-18-9-20-25"
},

"J":{
"Route E":"Fwfsz qbui jotjef tubsut ifsf"
}

};

const riddleAnswers = {
  "A": ["PARKING", "PARKING AREA", "PARKING LOT"],
  "B": ["LOBBY", "RECEPTION", "MAIN LOBBY"],
  "C": ["CANTEEN", "CAFETERIA", "CAFE", "FOOD COURT"],
  "D": ["AUDITORIUM", "HALL", "MAIN HALL"],
  "E": ["CLASS F1", "F1", "ROOM F1", "CLASSROOM F1"],
  "F": ["PRINT SHOP", "PRINT", "XEROX", "PHOTOCOPY", "PRINTING"],
  "G": ["CLASS F2", "F2", "ROOM F2", "CLASSROOM F2"],
  "H": ["STAIRS", "STAIRCASE", "STAIRWAY"],
  "I": ["SECURITY", "SECURITY CABIN", "SECURITY ROOM"],
  "J": ["GATE", "MAIN GATE", "ENTRY GATE"]
};