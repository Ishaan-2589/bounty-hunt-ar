/**
 * ZERO HOUR: BOUNTY HUNT - Core Logic Service
 * Contains all riddle data, route mappings, and decryption keys.
 */

// 1. DECRYPTION KEYS (Riddle Answers)
// These are the answers players must type into the scanner to progress.
// Always use ALL CAPS for consistency.

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
    "A": { "Route A": "DEMO 1: Type 'RED'" },
    "B": { "Route A": "DEMO 2: Type 'BLUE'" },
    "C": { "Route A": "DEMO 3: Type 'GREEN'" },
    "D": { "Route A": "DEMO 4: Type 'YELLOW'" },
    "E": { "Route A": "DEMO 5: Type 'ORANGE'" },
    "F": { "Route A": "DEMO 6: Type 'CYAN'" }
};

const riddleAnswers = {
    "A": "RED",
    "B": "BLUE",
    "C": "GREEN",
    "D": "YELLOW",
    "E": "ORANGE",
    "F": "CYAN"
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