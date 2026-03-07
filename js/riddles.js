const riddles = {
  "A": {
    "Route A": "SYSTEM_MSG: Location confirmed at the Sector of Engines. To find the next uplink, head to the Ground Floor Lobby. Look for the 'ZERO HOUR' terminal near the elevator.",
    "Route B": "NEMESIS_TRACE: You are in the shadow of the metal giants. The next code awaits where the masses gather to enter the main hall.",
    // Add other routes...
  }
};

const routeSteps = {
  "Route A": ["A", "B", "C", "D", "E", "F"],
  "Route B": ["B", "C", "D", "E", "A", "F"],
  // Add other routes...
};

const nodeCodes = {
  "A": "PARK77", "B": "LOBBY01", "C": "CAFE99", "D": "AUDI44", "E": "LAB101", "F": "PRINT55"
};