// Destiny Matrix calculation based on Natalia Ladini's system
export interface MatrixPoints {
  coreEnergy: number;
  spiritualPurpose: number;
  behavior: number;
  talent: number;
  karma: number;
  additional1: number;
  additional2: number;
  additional3: number;
  additional4: number;
  outer1: number;
  outer2: number;
  outer3: number;
  outer4: number;
}

export function calculateDestinyMatrix(birthdate: string, gender?: string): MatrixPoints {
  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Convert to single digits or major arcana numbers (1-22)
  const reduceToTarot = (num: number): number => {
    while (num > 22) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num === 0 ? 22 : num;
  };

  // Core energy calculation (center point)
  const coreEnergy = reduceToTarot(day + month + year);
  
  // Spiritual purpose (top point)
  const spiritualPurpose = reduceToTarot(day + month);
  
  // Behavior pattern (left point)
  const behavior = reduceToTarot(day);
  
  // Talent (right point)
  const talent = reduceToTarot(month + year);
  
  // Karma (bottom point)
  const karma = reduceToTarot(year);
  
  // Additional inner points
  const additional1 = reduceToTarot(coreEnergy + spiritualPurpose);
  const additional2 = reduceToTarot(coreEnergy + talent);
  const additional3 = reduceToTarot(coreEnergy + karma);
  const additional4 = reduceToTarot(coreEnergy + behavior);
  
  // Outer ring points
  const outer1 = reduceToTarot(spiritualPurpose + behavior);
  const outer2 = reduceToTarot(spiritualPurpose + talent);
  const outer3 = reduceToTarot(talent + karma);
  const outer4 = reduceToTarot(karma + behavior);

  return {
    coreEnergy,
    spiritualPurpose,
    behavior,
    talent,
    karma,
    additional1,
    additional2,
    additional3,
    additional4,
    outer1,
    outer2,
    outer3,
    outer4,
  };
}

// Function to import in server routes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateDestinyMatrix };
}
