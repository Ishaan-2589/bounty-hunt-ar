// The 30-Riddle Deployment Table - JIMS Rogue AI Hunt 
const routeSteps = {
    "A": ["A", "H", "C", "D", "E", "F"], // Route Alpha 
    "B": ["G", "I", "D", "C", "B", "F"], // Route Beta 
    "C": ["B", "C", "H", "A", "D", "F"], // Route Gamma 
    "D": ["I", "G", "A", "E", "C", "F"], // Route Delta 
    "E": ["D", "E", "J", "C", "H", "F"]  // Route Epsilon 
};

const riddles = {
    "A": {
        "Route A": "MATH_LOG: 16-1-18-11-9-14-7", // [cite: 63]
        "Route C": "MIRROR_LOG: .. / .... --- .-.. -.. / -- .- -. -.-- / - .-. .- ...- . .-.. . .-. ... --..-- / -.-- . - / -. --- -. . / ... - .- -. -.-- / ..-. --- .-. . ...- . .-. (I hold many travelers, yet none stay forever)", // [cite: 88, 91]
        "Route D": "MIRROR_LOG: Un lugar donde el movimiento descansa antes de volver al camino. (A place where motion rests)" // [cite: 97, 98]
    },
    "B": {
        "Route B": "CAESAR_LOG: Dmbttft mjf po cpui nz tjeft, zfu J cfmpoh up opof (Classes lie on both my sides, yet I belong to none)", // [cite: 82]
        "Route C": "MATH_LOG: 12-15-2-2-25" // [cite: 84]
    },
    "C": {
        "Route A": "MIRROR_LOG: Ƨ⅃⅃ƎƆ ƆIИAӘЯO ƎӘЯAHƆƎЯ OT ƎUIИI T∀HT ʞƎƎƧ (Seek that unit to recharge organic cells)", // [cite: 67]
        "Route B": "REVERSE_LOG: ˙ʞɐǝɹq ɐ ǝʞɐʇ spuᴉɯ ʎɹƃunɥ ǝɹǝɥʍ ɐɯoɹɐ ǝɥʇ ʍoןןoℲ (Follow the aroma where hungry minds take a break)", // [cite: 81]
        "Route C": "SPANISH_LOG: Aquí las ideas se sazonan, pero la verdadera materia nunca se escribe en la pizarra.", // [cite: 85]
        "Route D": "MORSE_LOG: .. -.. . .- ... / .--. .- .. -.. . / .... . .-. . / .-- .... .. .-.. . / .- .--. .--. . - .. - . ... / - .- -.- . / - .... . / ... - .- --. .", // [cite: 100, 102]
        "Route E": "SPANISH_LOG: La estación de combustible para agentes hambrientos" // [cite: 108]
    },
    "D": {
        "Route A": "CAESAR_LOG: Nboz tfbut gbdf b tjohmf tubhf, Xifsf tqffdift boe qfsgpsnbodft fohbhf. Gjoe uif ibmm xifsf fdipft cppn.", // [cite: 68, 69]
        "Route B": "MORSE_LOG: .-- .... . .-. . / . -.-. .... --- . ... / .-. . ... --- -. .- - . / .. -. / - .... . / --. .-. . .- - / .... .- .-.. .-..", // [cite: 76, 78]
        "Route C": "REVERSE_LOG: .nrob era seohce erehw llah eht dniF, mrofrep wef elihw hctaw ynaM, enihs seciov erehw egats a gnicaF.", // [cite: 92]
        "Route E": "MATH_LOG: 1-21-4-9-20-15-18-9-21-13" // [cite: 105]
    },
    "E": {
        "Route A": "SPANISH_LOG: Antes de que el conocimiento resuene por cada pasillo, busca el aula donde todo comienza.", // [cite: 71]
        "Route D": "BINARY_LOG: 01000010 01100101 01100110 01101111 01110010 01100101 / 01110100 01101000 01100101 / 01110011 01100101 01100011 01101111 01101110 01100100.", // [cite: 99]
        "Route E": "REVERSE_LOG: .gninnigeb eht sdnats driht eht dna dnoces eht erofeB" // [cite: 106]
    },
    "F": {
        "ALL_ROUTES": "BINARY_LOG: 01001001 00100000 01110000 01110010 01100101 01110011 01110011 / 01110111 01101000 01100001 01110100 11100111 01110011 / 01101001 01101110 01110110 01101001 01110011 01101001 01100010 01101100 01100101." // [cite: 73]
    },
    "G": {
        "Route B": "MATH_LOG: 18-15-15-13_6-two", // [cite: 74]
        "Route D": "CAESAR_LOG: Uisff eppst tuboe jo mjof; dipptf uif pof cfuxffo uif fyusfnft." // [cite: 95]
    },
    "H": {
        "Route A": "MORSE_LOG: - .... . / ... - --- -. . / ... - . .--. ... / - .- -.- . / -.-- --- ..- / - --- / - .... . / -. . -..- - / .--. .-.. .- -. .", // [cite: 64, 66]
        "Route C": "BINARY_LOG: 01001001 / 01101000 01100001 01110110 01100101 / 01101101 01100001 01101110 01111001 / 01110011 01110100 01100101 01110000 01110011.", // [cite: 87]
        "Route E": "BINARY_LOG: 01001100 01100101 01110110 01100101 01101100 / 01100010 01111001 / 01101100 01100101 01110110 01100101 01101100." // [cite: 109]
    },
    "I": {
        "Route B": "BINARY_LOG: 01000010 01100101 01100110 01101111 01110010 01100101 / 01111001 01101111 01110101 / 01100101 01101110 01110100 01100101 01110010.", // [cite: 75]
        "Route D": "MATH_LOG: 19-5-3-21-18-9-20-25" // [cite: 94]
    },
    "J": {
        "Route E": "CAESAR_LOG: Fwfsz qbui jotjef tubsut ifsf" // [cite: 107]
    }
};

const riddleAnswers = {
    "A": "PARKING",
    "B": "LOBBY",
    "C": "CANTEEN",
    "D": "AUDITORIUM",
    "E": "CLASS F1",
    "F": "PRINT SHOP",
    "G": "CLASS F2",
    "H": "STAIRS",
    "I": "SECURITY",
    "J": "GATE"
};