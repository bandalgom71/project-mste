// stages.js
// [LOGAN'S TACTICAL MAP]
// 이 파일은 오직 '적의 배치 데이터'만 담고 있네.
// 여기서 숫자를 고치면 게임 난이도가 즉시 변경되네.

const STAGE_DATA = [
    // ==============================
    // [ LEVEL 1: 훈련 (Training) ]
    // ==============================
    {
        level: 1,
        waves: [
            // 1. 빗방울 (Rain) - 몸풀기
            { type: 'pattern', start: 2000, end: 15000, gap: 2000, formations: [ {x:100, hp:3}, {x:300, hp:3}, {x:500, hp:3} ] },
            
            // 2. V자 편대 (Chevron) - 조준 사격 연습
            { type: 'pattern', start: 18000, end: 30000, gap: 4000, formations: [ {x:300, hp:5}, {x:200, hp:5}, {x:400, hp:5}, {x:100, hp:5}, {x:500, hp:5} ] },
            
            // 3. 뱀 (Snake) - 연쇄 폭발 테스트
            { type: 'sine', start: 34000, end: 50000, gap: 600, hp: 4 },
            
            // 4. 격자 (Grid) - 화력 시험
            { type: 'grid', start: 54000, end: 65000, gap: 1500, hp: 8 },
            
            // 5. 보스 (The Gatekeeper)
            { type: 'boss', time: 68000, x: 300, hp: 50 }
        ]
    },

    // ==============================
    // [ LEVEL 2: 실전 (Combat) ]
    // * 난이도: 체력 1.5배, 간격 10% 감소
    // ==============================
    {
        level: 2,
        waves: [
            // 조금 더 튼튼해진 빗방울
            { type: 'pattern', start: 2000, end: 15000, gap: 1800, formations: [ {x:150, hp:5}, {x:300, hp:5}, {x:450, hp:5} ] },
            
            // 역 V자 편대 (Inverted Chevron)
            { type: 'pattern', start: 18000, end: 32000, gap: 3500, formations: [ {x:100, hp:8}, {x:500, hp:8}, {x:200, hp:8}, {x:400, hp:8}, {x:300, hp:8} ] },
            
            // 더 빠른 뱀
            { type: 'sine', start: 35000, end: 52000, gap: 500, hp: 6 },
            
            // 빽빽한 격자
            { type: 'grid', start: 55000, end: 68000, gap: 1300, hp: 12 },
            
            // 보스 (Cruiser Class)
            { type: 'boss', time: 72000, x: 300, hp: 80 }
        ]
    },

    // ==============================
    // [ LEVEL 3: 전쟁 (Warzone) ]
    // * 난이도: 체력 2.0배, 물량 공세
    // ==============================
    {
        level: 3,
        waves: [
            // 소나기 (Heavy Rain)
            { type: 'pattern', start: 2000, end: 18000, gap: 1500, formations: [ {x:100, hp:6}, {x:200, hp:6}, {x:300, hp:6}, {x:400, hp:6}, {x:500, hp:6} ] },
            
            // X자 교차 편대
            { type: 'pattern', start: 20000, end: 35000, gap: 3000, formations: [ {x:100, hp:10}, {x:500, hp:10}, {x:200, hp:10}, {x:400, hp:10}, {x:300, hp:15} ] },
            
            // 뱀 두 마리 (Double Snake logic needed? 일단은 튼튼한 뱀)
            { type: 'sine', start: 38000, end: 55000, gap: 400, hp: 8 },
            
            // 강철의 벽
            { type: 'grid', start: 58000, end: 72000, gap: 1200, hp: 16 },
            
            // 보스 (Battleship Class)
            { type: 'boss', time: 75000, x: 300, hp: 150 }
        ]
    }
];