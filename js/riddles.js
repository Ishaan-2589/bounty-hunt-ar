/**
 * ZERO HOUR: BOUNTY HUNT - Core Logic Service
 * Contains all riddle data, route mappings, and decryption keys.
 */

// 1. DECRYPTION KEYS (Riddle Answers)
// These are the answers players must type into the scanner to progress.
// Always use ALL CAPS for consistency.
const riddleAnswers = {
  "A": "TIRES",      // Node A: Parking
  "B": "ELEVATOR",   // Node B: Ground Floor Lobby
  "C": "CAFFEINE",   // Node C: Canteen
  "D": "PODIUM",     // Node D: Auditorium
  "E": "LAPTOP",     // Node E: First Floor Classrooms
  "F": "SHADOW"      // Node F: Printing Shop (Final Node)
};

// 2. MISSION ROUTES
// Defines the sequence of nodes for each of the 5 teams.
const routeSteps = {
  "Route A": ["A", "B", "C", "D", "E", "F"],
  "Route B": ["B", "C", "D", "E", "A", "F"],
  "Route C": ["C", "D", "E", "A", "B", "F"],
  "Route D": ["D", "E", "A", "B", "C", "F"],
  "Route E": ["E", "A", "B", "C", "D", "F"]
};

// 3. DATA FRAGMENTS (Riddles)
// Organized by Node, then by Route for variety.
const riddles = {
  "A": { // Parking
    "Route A": "ROGUE AI LOG: Signal detected where the rubber meets the road. Find the heavy metal gates near the exit.",
    "Route B": "DATA BREACH: The first uplink is hidden among the rolling giants. Seek the lowest level.",
    "Route C": "INTERCEPT: Digital footprints lead to the rubber and oil. Locate the parking bays.",
    "Route D": "SYSTEM ALERT: Signal found where the engines sleep and concrete grows.",
    "Route E": "ROGUE AI TRACE: The perimeter is breached. Seek the shadow of the parked fleet."
  },
  "B": { // Ground Floor Lobby
    "Route A": "UPLINK FOUND: Move to the heart of the sector. It rises but never walks. Seek the vertical transport.",
    "Route B": "ROGUE AI MSG: Enter the heart of the building where the crowd never sleeps.",
    "Route C": "SIGNAL STRENGTH HIGH: The data packet is near the main entrance where all paths cross.",
    "Route D": "DECRYPTION BEGUN: Locate the central hub of the ground floor. The elevator holds the key.",
    "Route E": "ROGUE AI FRAGMENT: Seek the main hall where the steel cable pulls the weight of the masses."
  },
  "C": { // Canteen
    "Route A": "ROGUE AI LOG: The scent of caffeine and code is strong here. Search the fueling station.",
    "Route B": "SIGNAL TRACED: Locate the area where students recharge their organic systems.",
    "Route C": "DATA PACKET: Hidden near the steam and the snacks. Find the Canteen uplink.",
    "Route D": "INTERCEPT: The Rogue AI is feeding on the network near the food court.",
    "Route E": "SYSTEM ALERT: High energy readings detected in the refreshment sector."
  },
  "D": { // Auditorium
    "Route A": "ROGUE AI LOG: Seek the great hall of echoes. The podium holds the transmission.",
    "Route B": "SIGNAL DETECTED: Where the lights dim and the voices carry. Find the stage.",
    "Route C": "DECRYPTION: Go to the sector of performance and assembly. The data is front and center.",
    "Route D": "ROGUE AI MSG: The transmission is broadcasting from the center of the Auditorium.",
    "Route E": "INTERCEPT: Seek the wooden platform where leaders speak and stories are told."
  },
  "E": { // First Floor Classrooms
    "Route A": "ROGUE AI LOG: Back to the labs. Where knowledge is stored on silicon and screens.",
    "Route B": "SIGNAL STRENGTH HIGH: Move to the first floor. Search the sector of learning.",
    "Route C": "DATA PACKET: Among the desks and the whiteboards, a laptop holds the rogue signal.",
    "Route D": "SYSTEM ALERT: The Rogue AI has moved to the academic wing. Sector E1.",
    "Route E": "ROGUE AI FRAGMENT: Hidden in the room where logic is taught and code is written."
  },
  "F": { // Printing Shop (Final Node)
    "Route A": "FINAL UPLINK: The Rogue AI is making a physical copy. Seek the ink and the paper.",
    "Route B": "MISSION END: Locate the shop of reproduction. The final key is in the shadow.",
    "Route C": "ROGUE AI MSG: I am leaving a trace in the ink. Find the printing station.",
    "Route D": "SIGNAL TRACED: The shutdown sequence begins where the documents are born.",
    "Route E": "FINAL DATA: Move to the Printing Shop. The bounty is within your reach."
  }
};

// 4. PHYSICAL BACKUP CODES
// These are for the organizers to use if a team's digital entry fails.
const nodeCodes = {
  "A": "PARK77", 
  "B": "LOBBY01", 
  "C": "CAFE99", 
  "D": "AUDI44", 
  "E": "LAB101", 
  "F": "PRINT55"
};