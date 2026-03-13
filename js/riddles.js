// ROUTE ORDER (Based on PDF Deployment Table)
const routeSteps = {
  "A": ["A", "H", "C", "D", "E", "F"],
  "B": ["G", "I", "D", "C", "B", "F"],
  "C": ["B", "C", "H", "A", "D", "F"],
  "D": ["I", "G", "A", "E", "C", "F"],
  "E": ["D", "E", "J", "C", "H", "F"]
};

const riddles = {
  "A": { // PARKING
    "Route A": "16-1-18-11-9-14-7", 
    "Route C": ".. / .... --- .-.. -.. / -- .- -. -.-- / - .-. .- ...- . .-.. . .-. ...",
    "Route D": "Un lugar donde el movimiento descansa antes de volver al camino.",
    "ALL_ROUTES": "Parking Area Node"
  },
  "B": { // LOBBY
    "Route B": "Dmbttft mjf po cpui nz tjeft, zfu J cfmpoh up opof",
    "Route C": "01001100 01101111 01100010 01100010 01111001",
    "ALL_ROUTES": "Lobby Area: Classes lie on both sides."
  },
  "C": { // CANTEEN
    "Route A": "Ƨ⅃⅃ƎƆ ƆIИAӘЯO ƎӘЯAHƆƎЯ OT ƎUIИI T∀HT ʞƎƎƧ",
    "Route B": "˙ʞɐǝɹq ɐ ǝʞɐʇ spuᴉɯ ʎɹƃunɥ ǝlᴉɥʍ ǝɹǝɥ ǝsnɐd sɐǝpI",
    "Route C": "01000011 01000001 01001110 01010100 01000101 01000101 01001110",
    "Route D": ".. -.. . .- ... / .--. .- ..- ... . / .... . .-. . / .-- .... .. .-.. . / .- .--. .--. . - .. - . ... / - .- -.- . / - .... . / ... - .- --. .",
    "Route E": "01000011 01100001 01101110 01110100 01100101 01100101 01101110",
    "ALL_ROUTES": "Canteen: Fuel for hungry agents."
  },
  "D": { // AUDITORIUM
    "Route A": "Nboz tfbut gbdf b tjohmf tubhf...",
    "Route B": ".-- .... . .-. . / . -.-. .... --- . ... / .-. . ... --- -. .- - .",
    "Route C": ".nrob era seohce erehw llah eht dniF",
    "Route E": "1-21-4-9-20-15-18-9-21-13",
    "ALL_ROUTES": "Auditorium: Where echoes resonate."
  },
  "E": { // CLASS F1
    "Route A": "01000010 01100101 01100110 01101111 01110010 01100101",
    "Route D": "..-. .. .-. ... - / -.-. .-.. .- ... ... / --- ..-. / - .... . / ..-. .-.. --- --- .-.",
    "Route E": ".gninnigeb eht sdnats driht eht dna dnoces eht erofeB",
    "ALL_ROUTES": "Class F1: Knowledge begins here."
  },
  "F": { // PRINT SHOP (Final)
    "ALL_ROUTES": "nettirw gnieb tuohtiw ereh ylpitlum sdroW"
  },
  "G": { // CLASS F2
    "Route B": "01000110 01000110 00100000 01000011 01001100 01000001 01010011 01010011 00100000 00110010",
    "Route D": "18-15-15-13_6-two",
    "ALL_ROUTES": "Class F2: Second of the floor."
  },
  "H": { // STAIRS
    "Route A": ".srettam thgieh erehw steps enotS",
    "Route C": "- .... . / ... - --- -. . / ... - --- -. .",
    "Route E": "19-20-1-9-18-19",
    "ALL_ROUTES": "The Stone Steps."
  },
  "I": { // SECURITY
    "Route B": "--. ..-. / ... . -.-. ..- .-. .. - -.--",
    "Route D": "Hrgf rgl b rgl...",
    "ALL_ROUTES": "Security: Gatekeepers of the node."
  },
  "J": { // GATE
    "Route E": "Every path starts and ends with a portal."
  }
};

const riddleAnswers = {
  "A": ["PARKING", "PARKING AREA"],
  "B": ["LOBBY", "RECEPTION"],
  "C": ["CANTEEN", "CAFETERIA", "CAFE"],
  "D": "AUDITORIUM",
  "E": ["CLASS F1", "F1", "ROOM F1"],
  "F": ["PRINT SHOP", "PRINT", "XEROX", "PHOTOCOPY"],
  "G": ["CLASS F2", "F2", "ROOM F2"],
  "H": ["STAIRS", "STAIRCASE"],
  "I": ["SECURITY", "SECURITY CABIN"],
  "J": ["GATE", "MAIN GATE"]
};