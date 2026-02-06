// stages.js
// [LOGAN'S GRID DATA v5.2 - FULL CAMPAIGN]
// Grid: 10 Cols x 200 Rows
// This file contains DATA ONLY.

const STAGE_DATA = [
    // ==========================================
    // [ LEVEL 1: PIXEL ART & BASIC ]
    // ==========================================
    {
        level: 1,
        spawnList: [
            // "HI" (Greeting)
            { row: 10, col: 2, hp: 3 }, { row: 10, col: 4, hp: 3 },
            { row: 12, col: 2, hp: 3 }, { row: 12, col: 4, hp: 3 },
            { row: 14, col: 2, hp: 3 }, { row: 14, col: 3, hp: 3 }, { row: 14, col: 4, hp: 3 },
            { row: 16, col: 2, hp: 3 }, { row: 16, col: 4, hp: 3 },
            { row: 18, col: 2, hp: 3 }, { row: 18, col: 4, hp: 3 },

            // "I"
            { row: 10, col: 7, hp: 3 }, { row: 12, col: 7, hp: 3 }, { row: 14, col: 7, hp: 3 }, 
            { row: 16, col: 7, hp: 3 }, { row: 18, col: 7, hp: 3 },

            // Space Invader Shape
            { row: 40, col: 3, hp: 4 }, { row: 40, col: 8, hp: 4 },
            { row: 42, col: 4, hp: 4 }, { row: 42, col: 7, hp: 4 },
            { row: 44, col: 3, hp: 4 }, { row: 44, col: 4, hp: 4 }, { row: 44, col: 5, hp: 4 }, { row: 44, col: 6, hp: 4 }, { row: 44, col: 7, hp: 4 }, { row: 44, col: 8, hp: 4 },
            { row: 46, col: 2, hp: 4 }, { row: 46, col: 3, hp: 4 }, { row: 46, col: 5, hp: 4 }, { row: 46, col: 6, hp: 4 }, { row: 46, col: 8, hp: 4 }, { row: 46, col: 9, hp: 4 },
            { row: 48, col: 2, hp: 4 }, { row: 48, col: 3, hp: 4 }, { row: 48, col: 4, hp: 4 }, { row: 48, col: 5, hp: 4 }, { row: 48, col: 6, hp: 4 }, { row: 48, col: 7, hp: 4 }, { row: 48, col: 8, hp: 4 }, { row: 48, col: 9, hp: 4 },

            // Heart Shape
            { row: 80, col: 2, hp: 6 }, { row: 80, col: 3, hp: 6 }, { row: 80, col: 8, hp: 6 }, { row: 80, col: 9, hp: 6 },
            { row: 82, col: 1, hp: 6 }, { row: 82, col: 4, hp: 6 }, { row: 82, col: 7, hp: 6 }, { row: 82, col: 10, hp: 6 },
            { row: 84, col: 1, hp: 6 }, { row: 84, col: 10, hp: 6 },
            { row: 86, col: 2, hp: 6 }, { row: 86, col: 9, hp: 6 },
            { row: 88, col: 3, hp: 6 }, { row: 88, col: 8, hp: 6 },
            { row: 90, col: 4, hp: 6 }, { row: 90, col: 7, hp: 6 },
            
            // BOSS: Heart Core
            { row: 95, col: 5.5, hp: 50, isBoss: true }
        ]
    },

    // ==========================================
    // [ LEVEL 2: GEOMETRY & MAZE ]
    // ==========================================
    {
        level: 2,
        spawnList: [
            // 1. Double Helix (DNA) - 교차하며 내려오는 패턴
            { row: 10, col: 1, hp: 5 }, { row: 10, col: 10, hp: 5 },
            { row: 12, col: 2, hp: 5 }, { row: 12, col: 9, hp: 5 },
            { row: 14, col: 3, hp: 5 }, { row: 14, col: 8, hp: 5 },
            { row: 16, col: 4, hp: 5 }, { row: 16, col: 7, hp: 5 },
            { row: 18, col: 5, hp: 5 }, { row: 18, col: 6, hp: 5 }, // Cross
            { row: 20, col: 4, hp: 5 }, { row: 20, col: 7, hp: 5 },
            { row: 22, col: 3, hp: 5 }, { row: 22, col: 8, hp: 5 },
            { row: 24, col: 2, hp: 5 }, { row: 24, col: 9, hp: 5 },
            { row: 26, col: 1, hp: 5 }, { row: 26, col: 10, hp: 5 },

            // 2. The Wall (벽돌깨기) - 한 줄 전체
            { row: 40, col: 1, hp: 6 }, { row: 40, col: 2, hp: 6 }, { row: 40, col: 3, hp: 6 }, { row: 40, col: 4, hp: 6 }, { row: 40, col: 5, hp: 6 },
            { row: 40, col: 6, hp: 6 }, { row: 40, col: 7, hp: 6 }, { row: 40, col: 8, hp: 6 }, { row: 40, col: 9, hp: 6 }, { row: 40, col: 10, hp: 6 },

            // 3. Rain Drops (Random Feel)
            { row: 50, col: 2, hp: 6 }, { row: 51, col: 8, hp: 6 },
            { row: 52, col: 5, hp: 6 }, { row: 53, col: 3, hp: 6 },
            { row: 54, col: 9, hp: 6 }, { row: 55, col: 1, hp: 6 },
            { row: 56, col: 6, hp: 6 }, { row: 57, col: 4, hp: 6 },
            { row: 58, col: 7, hp: 6 }, { row: 59, col: 10, hp: 6 },

            // 4. Checkered Pattern (Grid)
            { row: 70, col: 1, hp: 7 }, { row: 70, col: 3, hp: 7 }, { row: 70, col: 5, hp: 7 }, { row: 70, col: 7, hp: 7 }, { row: 70, col: 9, hp: 7 },
            { row: 72, col: 2, hp: 7 }, { row: 72, col: 4, hp: 7 }, { row: 72, col: 6, hp: 7 }, { row: 72, col: 8, hp: 7 }, { row: 72, col: 10, hp: 7 },

            // BOSS: Cruiser
            { row: 90, col: 5.5, hp: 100, isBoss: true }
        ]
    },

    // ==========================================
    // [ LEVEL 3: CHAOS & TOTAL WAR ]
    // ==========================================
    {
        level: 3,
        spawnList: [
            // 1. Arrow Head (화살표)
            { row: 10, col: 5, hp: 10 }, { row: 10, col: 6, hp: 10 },
            { row: 12, col: 4, hp: 10 }, { row: 12, col: 7, hp: 10 },
            { row: 14, col: 3, hp: 10 }, { row: 14, col: 8, hp: 10 },
            { row: 16, col: 2, hp: 10 }, { row: 16, col: 9, hp: 10 },
            { row: 18, col: 1, hp: 10 }, { row: 18, col: 10, hp: 10 },

            // 2. Tunnel (양옆 벽, 가운데 통과)
            { row: 30, col: 1, hp: 15 }, { row: 30, col: 2, hp: 15 }, { row: 30, col: 9, hp: 15 }, { row: 30, col: 10, hp: 15 },
            { row: 32, col: 1, hp: 15 }, { row: 32, col: 2, hp: 15 }, { row: 32, col: 9, hp: 15 }, { row: 32, col: 10, hp: 15 },
            { row: 34, col: 1, hp: 15 }, { row: 34, col: 2, hp: 15 }, { row: 34, col: 9, hp: 15 }, { row: 34, col: 10, hp: 15 },
            { row: 36, col: 1, hp: 15 }, { row: 36, col: 2, hp: 15 }, { row: 36, col: 9, hp: 15 }, { row: 36, col: 10, hp: 15 },

            // 3. Zig Zag Snake (High Speed)
            { row: 50, col: 5, hp: 8 }, { row: 51, col: 6, hp: 8 }, { row: 52, col: 7, hp: 8 }, 
            { row: 53, col: 6, hp: 8 }, { row: 54, col: 5, hp: 8 }, { row: 55, col: 4, hp: 8 }, 
            { row: 56, col: 3, hp: 8 }, { row: 57, col: 4, hp: 8 }, { row: 58, col: 5, hp: 8 },

            // 4. Final Wave (Dense)
            { row: 70, col: 1, hp: 20 }, { row: 70, col: 3, hp: 20 }, { row: 70, col: 5, hp: 20 }, { row: 70, col: 7, hp: 20 }, { row: 70, col: 9, hp: 20 },

            // BOSS: Mothership
            { row: 85, col: 5.5, hp: 200, isBoss: true }
        ]
    }
];