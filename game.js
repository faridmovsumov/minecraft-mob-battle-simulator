// =========================================================
// MOBMAKER - Minecraft-Inspired Mob Fighting Game
// =========================================================

// ---- Mob Sprite Definitions (16x16 pixel art) ----
// '.' = transparent, lowercase a-z map to palette colors

const MOB_DEFS = [
  {
    id: 'zombie', name: 'Zombie',
    palette: { a:'#6b9b3a', b:'#4a7a28', c:'#3b5b21', d:'#1a1a1a', e:'#3a8a8a', f:'#2a6a6a', g:'#6b4830', h:'#4a3020' },
    pixels: [
      '................',
      '.....bbbbbb.....',
      '....baaaaaab....',
      '....baadaadab...',
      '....baaaaaab....',
      '....baadddaab...',
      '.....bbaaaab....',
      '.....eeeeee.....',
      '....eeeeeeeeb...',
      '...beeeeeeeeb...',
      '...b.eeeeee.....',
      '.....eeeeee.....',
      '.....ee..ee.....',
      '.....gg..gg.....',
      '.....gg..gg.....',
      '.....hh..hh.....',
    ]
  },
  {
    id: 'mutant_zombie', name: 'Mutant Zombie',
    palette: { a:'#5a8a2a', b:'#3a6a18', c:'#2a4a10', d:'#1a1a1a', e:'#ff2222', f:'#3a8a8a', g:'#2a6a6a', h:'#6b4830', i:'#4a3020' },
    pixels: [
      '....c....c......',
      '...cbbbbbbc.....',
      '...baaaaaab.....',
      '...baedaedab....',
      '...baaaaaaab....',
      '...baadddaab....',
      '....baaaab......',
      '...ffffffff.....',
      '..bffffffffb....',
      '.bb.ffffff.bb...',
      '.b..ffffff..b...',
      '.b..ff..ff..b...',
      '....ff..ff......',
      '....hh..hh......',
      '...hhh..hhh.....',
      '...ii....ii.....',
    ]
  },
  {
    id: 'skeleton', name: 'Skeleton',
    palette: { a:'#e8e8e8', b:'#c0c0c0', c:'#888888', d:'#1a1a1a', e:'#666666', f:'#a0a0a0' },
    pixels: [
      '................',
      '.....aaaaaa.....',
      '....aaaaaaaa....',
      '....addaadda....',
      '....aaaaaaaa....',
      '....aaddddaa....',
      '.....aaaaaa.....',
      '......abba......',
      '.....abccba.....',
      '....babccbab....',
      '...ba.abba.ab...',
      '..ba..abba..ab..',
      '......abba......',
      '......b..b......',
      '.....bb..bb.....',
      '.....cc..cc.....',
    ]
  },
  {
    id: 'enderman', name: 'Enderman',
    palette: { a:'#555580', b:'#444470', c:'#cc44ff', d:'#ff66ff', e:'#6a5a90' },
    pixels: [
      '......bb........',
      '.....bbbb.......',
      '....bbbbbb......',
      '....bbccbbb.....',
      '....bbbbbb......',
      '.....bbbb.......',
      '......bb........',
      '......ab........',
      '.....aaab.......',
      '....aaaaab......',
      '.b..aaaaab..b...',
      '.bb.aaaaab.bb...',
      '..b..aaab..b....',
      '......ab........',
      '.....a..b.......',
      '....aa..bb......',
    ]
  },
  {
    id: 'warden', name: 'Warden',
    palette: { a:'#0d5050', b:'#0a6868', c:'#10b5b5', d:'#08f5f5', e:'#083030', f:'#1a1a1a' },
    pixels: [
      '..bb......bb....',
      '..ba......ab....',
      '..baaaaaaaaб....',
      '...aaaaaaaaа....',
      '...abcaacbaa....',
      '...aaaaaaaaа....',
      '....aaaaaaа.....',
      '...aaaaaaaaa....',
      '..aaaaaaaaaaa...',
      '..aacaaaacaaa...',
      '..aaaaaaaaaaa...',
      '..aaaaaaaaaaa...',
      '...aaaaaaaaa....',
      '....aaaaaaa.....',
      '...aaaa.aaaa....',
      '...eeee.eeee....',
    ]
  },
  {
    id: 'mutant_warden', name: 'Mutant Warden',
    palette: { a:'#0d5050', b:'#0a6868', c:'#10b5b5', d:'#08f5f5', e:'#083030', f:'#1a1a1a' },
    pixels: [
      '.bbb....bbb.....',
      '.bba....abb.....',
      '.bbaaaaaabb.....',
      '..baaaaaaab.....',
      '..bacdacdab.....',
      '..baaaaaaab.....',
      '...baaaaab......',
      '..aaaaaaaaaa....',
      '.aaaaaaaaaaaa...',
      '.aaacaaaacaaa...',
      '.aaaaaaaaaaaaa..',
      '..aaaaaaaaaaa...',
      '...aaaaaaaaa....',
      '....aaaaaaa.....',
      '...aaaa.aaaa....',
      '..eeeee.eeeee...',
    ]
  },
  {
    id: 'iron_golem', name: 'Iron Golem',
    palette: { a:'#c8c8c8', b:'#999999', c:'#707070', d:'#1a1a1a', e:'#cc3333', f:'#5a8a3a', g:'#e0d0c0' },
    pixels: [
      '................',
      '....aaaaaaaa....',
      '...aaaaaaaaaa...',
      '...aadaaaadaa...',
      '...aaaaeeaaaa...',
      '...aaaaaaaaaa...',
      '....aaaaaaaa....',
      '...aaaaaaaaaa...',
      '..baaaaaaaааab..',
      '.bb.aaaaaааа.bb.',
      '.b..ааааааааa.b.',
      '.b..ааааааааa.b.',
      '....аааа.аааa...',
      '....аааа.аааа...',
      '...bbbb..bbbb...',
      '...cccc..cccc...',
    ]
  },
  {
    id: 'mutant_iron_golem', name: 'M. Iron Golem',
    palette: { a:'#d8d8d8', b:'#aaaaaa', c:'#808080', d:'#1a1a1a', e:'#ee4444', f:'#5a8a3a', g:'#606060' },
    pixels: [
      '...aaaaaaааа....',
      '..ааааааааааа...',
      '..aаdаааadааа...',
      '..aаааееааааа...',
      '..ааааааааааа...',
      '...ааааааааа....',
      '..аааааааааааа..',
      '.bааааааааааааb.',
      'bb.аааааааааа.bb',
      'b..аааааааааа..b',
      'b..аааааааааа..b',
      'b..аааааааааа..b',
      '...ааааа.ааааа..',
      '...ааааа.ааааа..',
      '..bbbbb..bbbbb..',
      '..ggggg..ggggg..',
    ]
  },
  {
    id: 'creeper', name: 'Creeper',
    palette: { a:'#4caf50', b:'#388e3c', c:'#2e7d32', d:'#1a1a1a', e:'#1b5e20' },
    pixels: [
      '................',
      '.....aaaaaa.....',
      '....aaaaaaaa....',
      '....addaadda....',
      '....addaadda....',
      '....aaaaddaa....',
      '....adddddda....',
      '....add..dda....',
      '.....aaaaaa.....',
      '.....aaaaaa.....',
      '.....aaaaaa.....',
      '.....aaaaaa.....',
      '.....aaaaaa.....',
      '.....aa..aa.....',
      '.....aa..aa.....',
      '.....ee..ee.....',
    ]
  },
  {
    id: 'spider', name: 'Spider',
    palette: { a:'#4a3a2a', b:'#2a1a0a', c:'#1a1a1a', d:'#ee1111', e:'#6a4a2a' },
    pixels: [
      '................',
      '................',
      '................',
      '................',
      '.b...aaaa...b...',
      '..b.aaaaaa.b....',
      'b..baaddaab..b..',
      '.bb.aaaaaa.bb...',
      '..b.aaaaaa.b....',
      '.b..aaaaaa..b...',
      'b..aaaaaaaa..b..',
      '....aaaaaa......',
      '................',
      '................',
      '................',
      '................',
    ]
  },
  {
    id: 'blaze', name: 'Blaze',
    palette: { a:'#ff9800', b:'#ffb74d', c:'#ff5722', d:'#1a1a1a', e:'#ffeb3b', f:'#ffc107' },
    pixels: [
      '......ee........',
      '..e..ebbb..e....',
      '.....baaab......',
      '....baadaab.....',
      '....baaaaab.....',
      '.e..baaacab..e..',
      '.....baaab......',
      '..e...bbb...e...',
      '......fff.......',
      '.e...fffff..e...',
      '......fff.......',
      '.e....fff...e...',
      '......fff.......',
      '......f.f.......',
      '................',
      '................',
    ]
  },
  {
    id: 'witch', name: 'Witch',
    palette: { a:'#7b1fa2', b:'#4a148c', c:'#e8c9a0', d:'#1a1a1a', e:'#9c27b0', f:'#1b5e20' },
    pixels: [
      '.......a........',
      '......aaa.......',
      '.....aaaaa......',
      '....aaaaaaa.....',
      '.....ccccc......',
      '.....cddcdc.....',
      '.....ccccc......',
      '.....ccddcc.....',
      '......ccc.......',
      '.....bbbbb......',
      '....bbbbbbb.....',
      '....bbbbbbb.....',
      '.....bbbbb......',
      '.....bb..bb.....',
      '.....bb..bb.....',
      '.....ff..ff.....',
    ]
  },
  {
    id: 'piglin_brute', name: 'Piglin Brute',
    palette: { a:'#ffc107', b:'#e8a0a0', c:'#d4887a', d:'#1a1a1a', e:'#8d6e63', f:'#6d4c41', g:'#4e342e' },
    pixels: [
      '................',
      '.....aaaaaa.....',
      '....abbbbbba....',
      '....abdbbdba....',
      '....abbbbbba....',
      '....abddddba....',
      '.....aabbaa.....',
      '.....eeeeee.....',
      '....aeeeeeea....',
      '...aeeeeeeeea...',
      '....aeeeeeea....',
      '.....eeeeee.....',
      '.....ff..ff.....',
      '.....ff..ff.....',
      '.....gg..gg.....',
      '................',
    ]
  },
  {
    id: 'ghast', name: 'Ghast',
    palette: { a:'#f5f5f5', b:'#e0e0e0', c:'#cccccc', d:'#555555', e:'#ee3333', f:'#bdbdbd' },
    pixels: [
      '................',
      '....aaaaaa......',
      '...aaaaaааа.....',
      '..aааааааааа....',
      '..aаddаааddа...',
      '..aааааааааа....',
      '..aааeааeааа....',
      '..aааааааааа....',
      '...aааааааа.....',
      '....аааааа......',
      '...a.аа.аа.а....',
      '..a..аа.аа..а...',
      '.....аа.аа......',
      '......а..а......',
      '................',
      '................',
    ]
  },
];

// ---- Stat Names ----
const STAT_NAMES = ['⚔️ Attack', '🛡️ Defense', '⚡ Speed', '❤️ Health'];
const STAT_KEYS = ['atk', 'def', 'spd', 'hp'];
const STAT_COLORS = ['#ef4444', '#3b82f6', '#22d3ee', '#4ade80'];

// ---- Game State ----
let state = {
  screen: 'title',
  designingMob: 1,
  selectedType: null,
  stats: { atk: 1, def: 1, spd: 1, hp: 1 },
  mob1: null,
  mob2: null,
  fighting: false,
};

// ---- DOM Refs ----
const $ = id => document.getElementById(id);

// ---- Utility ----
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

// ---- Sprite Rendering ----
function drawSprite(ctx, mobDef, x, y, scale, flipX) {
  const { palette, pixels } = mobDef;
  ctx.save();
  if (flipX) {
    ctx.translate(x + 16 * scale, y);
    ctx.scale(-1, 1);
    x = 0; y = 0;
  }
  for (let row = 0; row < pixels.length && row < 16; row++) {
    const line = pixels[row];
    for (let col = 0; col < line.length && col < 16; col++) {
      const ch = line[col];
      if (ch === '.' || ch === ' ') continue;
      const color = palette[ch];
      if (color) {
        ctx.fillStyle = color;
      } else {
        ctx.fillStyle = palette['a'] || '#888';
      }
      ctx.fillRect(x + col * scale, y + row * scale, scale, scale);
    }
  }
  ctx.restore();
}

// Draw sprite with outline for arena visibility
function drawSpriteOutlined(ctx, mobDef, x, y, scale, flipX) {
  const { pixels } = mobDef;
  const origX = x, origY = y;
  ctx.save();
  if (flipX) {
    ctx.translate(origX + 16 * scale, origY);
    ctx.scale(-1, 1);
    x = 0; y = 0;
  }
  // Draw outline (1px border around filled pixels)
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  for (let row = 0; row < pixels.length && row < 16; row++) {
    const line = pixels[row];
    for (let col = 0; col < line.length && col < 16; col++) {
      const ch = line[col];
      if (ch === '.' || ch === ' ') continue;
      const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
      for (const [dr, dc] of dirs) {
        const nr = row + dr;
        const nc = col + dc;
        if (nr < 0 || nr >= 16 || nc < 0 || nc >= 16) {
          ctx.fillRect(x + nc * scale, y + nr * scale, scale, scale);
        } else {
          const nch = pixels[nr]?.[nc];
          if (!nch || nch === '.' || nch === ' ') {
            ctx.fillRect(x + nc * scale, y + nr * scale, scale, scale);
          }
        }
      }
    }
  }
  ctx.restore();
  // Draw the actual sprite on top using original coordinates
  drawSprite(ctx, mobDef, origX, origY, scale, flipX);
}

function drawSpriteOnCanvas(canvas, mobDef) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  const scale = Math.floor(Math.min(w, h) / 16);
  const ox = Math.floor((w - 16 * scale) / 2);
  const oy = Math.floor((h - 16 * scale) / 2);
  drawSprite(ctx, mobDef, ox, oy, scale, false);
}

// ---- Screen Management ----
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(name + '-screen').classList.add('active');
  state.screen = name;
}

// ---- Title Screen ----
$('start-btn').addEventListener('click', () => {
  state.designingMob = 1;
  state.mob1 = null;
  state.mob2 = null;
  initDesignScreen();
  showScreen('design');
});

// ---- Design Screen ----
function initDesignScreen() {
  state.selectedType = null;
  state.stats = { atk: 1, def: 1, spd: 1, hp: 1 };

  $('mob-number').textContent = state.designingMob;
  $('mob-name-display').textContent = 'Select a mob';
  $('confirm-btn').disabled = true;
  updatePointsDisplay();

  // Build mob grid
  const grid = $('mob-grid');
  grid.innerHTML = '';
  MOB_DEFS.forEach((mob, i) => {
    const card = document.createElement('div');
    card.className = 'mob-card';
    card.dataset.index = i;

    const cvs = document.createElement('canvas');
    cvs.width = 64;
    cvs.height = 64;
    drawSpriteOnCanvas(cvs, mob);

    const label = document.createElement('div');
    label.className = 'mob-card-name';
    label.textContent = mob.name;

    card.appendChild(cvs);
    card.appendChild(label);
    card.addEventListener('click', () => { sfxClick(); selectMobType(i); });
    grid.appendChild(card);
  });

  // Build stat controls
  const statDiv = $('stat-controls');
  statDiv.innerHTML = '';
  STAT_NAMES.forEach((name, i) => {
    const key = STAT_KEYS[i];
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.innerHTML = `
      <span class="stat-label">${name}</span>
      <div class="stat-controls-group">
        <button class="stat-btn" data-stat="${key}" data-dir="-1">-</button>
        <span class="stat-value" id="stat-val-${key}">1</span>
        <button class="stat-btn" data-stat="${key}" data-dir="1">+</button>
        <div class="stat-bar"><div class="stat-bar-fill" id="stat-bar-${key}" style="width:10%;background:${STAT_COLORS[i]}"></div></div>
      </div>
    `;
    statDiv.appendChild(row);
  });

  statDiv.querySelectorAll('.stat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.stat;
      const dir = parseInt(btn.dataset.dir);
      sfxClick();
      adjustStat(key, dir);
    });
  });

  // Clear preview
  const previewCtx = $('preview-canvas').getContext('2d');
  previewCtx.clearRect(0, 0, 160, 160);
}

function selectMobType(index) {
  state.selectedType = index;
  const mob = MOB_DEFS[index];

  document.querySelectorAll('.mob-card').forEach((card, i) => {
    card.classList.toggle('selected', i === index);
  });

  drawSpriteOnCanvas($('preview-canvas'), mob);
  $('mob-name-display').textContent = mob.name;

  updateConfirmButton();
}

function totalPoints() {
  return STAT_KEYS.reduce((s, k) => s + state.stats[k], 0);
}

function adjustStat(key, dir) {
  const current = state.stats[key];
  const newVal = current + dir;
  const total = totalPoints();

  if (newVal < 1 || newVal > 10) return;
  if (dir > 0 && total >= 20) return;

  state.stats[key] = newVal;
  updateStatsDisplay();
  updateConfirmButton();
}

function updateStatsDisplay() {
  STAT_KEYS.forEach((key, i) => {
    const val = state.stats[key];
    $('stat-val-' + key).textContent = val;
    $('stat-bar-' + key).style.width = (val * 10) + '%';
  });
  updatePointsDisplay();
}

function updatePointsDisplay() {
  const remaining = 20 - totalPoints();
  $('points-remaining').textContent = remaining;
}

function updateConfirmButton() {
  $('confirm-btn').disabled = (state.selectedType === null || totalPoints() !== 20);
}

$('confirm-btn').addEventListener('click', () => {
  const mobData = {
    type: MOB_DEFS[state.selectedType],
    stats: { ...state.stats },
  };

  if (state.designingMob === 1) {
    state.mob1 = mobData;
    state.designingMob = 2;
    initDesignScreen();
    showScreen('design');
  } else {
    state.mob2 = mobData;
    initFightScreen();
    showScreen('fight');
  }
});

// ---- Fight Screen ----
let arenaCtx;
let animFrame;
let fighters = [];

function initFightScreen() {
  const canvas = $('arena-canvas');
  arenaCtx = canvas.getContext('2d');
  state.fighting = false;

  fighters = [
    createFighter(state.mob1, 1),
    createFighter(state.mob2, 2),
  ];

  $('mob1-name').textContent = state.mob1.type.name;
  $('mob2-name').textContent = state.mob2.type.name;
  $('round-display').textContent = 'VS';
  $('fight-btn').style.display = '';
  $('play-again-btn').style.display = 'none';
  $('combat-log').innerHTML = '';

  updateHealthBars();
  startArenaRender();
}

function createFighter(mobData, slot) {
  const hp = mobData.stats.hp * 15;
  return {
    slot,
    type: mobData.type,
    stats: { ...mobData.stats },
    maxHp: hp,
    hp: hp,
    x: slot === 1 ? 150 : 550,
    y: 200,
    baseX: slot === 1 ? 150 : 550,
    baseY: 200,
    scale: 5,
    flipX: slot === 2,
    animState: 'idle',
    animTimer: 0,
    bobOffset: 0,
    flashTimer: 0,
  };
}

function updateHealthBars() {
  fighters.forEach((f, i) => {
    const pct = Math.max(0, f.hp / f.maxHp * 100);
    const bar = $(`mob${i + 1}-health-bar`);
    bar.style.width = pct + '%';
    if (pct > 50) bar.style.backgroundColor = '#4ade80';
    else if (pct > 25) bar.style.backgroundColor = '#fbbf24';
    else bar.style.backgroundColor = '#ef4444';
    $(`mob${i + 1}-hp-text`).textContent = Math.max(0, f.hp) + ' / ' + f.maxHp + ' HP';
  });
}

// ---- Arena Rendering ----
let lastTime = 0;

function startArenaRender() {
  if (animFrame) cancelAnimationFrame(animFrame);
  lastTime = performance.now();
  renderLoop(lastTime);
}

function renderLoop(time) {
  const dt = (time - lastTime) / 1000;
  lastTime = time;

  fighters.forEach(f => {
    f.animTimer += dt;

    if (f.animState === 'idle') {
      f.bobOffset = Math.sin(f.animTimer * 2.5) * 4;
    }

    if (f.animState === 'attacking') {
      const progress = Math.min(f.animTimer / 0.15, 1);
      const dir = f.slot === 1 ? 1 : -1;
      f.x = f.baseX + dir * 50 * Math.sin(progress * Math.PI);
    }

    if (f.flashTimer > 0) {
      f.flashTimer -= dt;
    }

    if (f.animState === 'dodging') {
      const progress = Math.min(f.animTimer / 0.3, 1);
      const dir = f.slot === 1 ? -1 : 1;
      f.x = f.baseX + dir * 35 * Math.sin(progress * Math.PI);
    }

    if (f.animState === 'dead') {
      f.bobOffset = Math.min(f.animTimer * 120, 70);
    }
  });

  drawArena();
  animFrame = requestAnimationFrame(renderLoop);
}

function drawArena() {
  const ctx = arenaCtx;
  const w = 800, h = 400;

  // Background gradient - lighter for visibility
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#2c2c50');
  grad.addColorStop(0.7, '#353560');
  grad.addColorStop(1, '#404070');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Floor with perspective lines
  ctx.fillStyle = '#454575';
  ctx.fillRect(0, 300, w, 100);

  // Grid pattern on floor
  ctx.strokeStyle = '#55558a';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 300);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 300; y < h; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Draw fighters
  fighters.forEach(f => {
    ctx.save();

    const drawY = f.y - 16 * f.scale + f.bobOffset;

    // Flash effect (blink)
    if (f.flashTimer > 0 && Math.floor(f.flashTimer * 10) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Draw outlined sprite for better visibility
    drawSpriteOutlined(ctx, f.type, f.x - 8 * f.scale, drawY, f.scale, f.flipX);

    ctx.restore();

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath();
    ctx.ellipse(f.x, f.y + 18, 32, 9, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ---- Combat Log ----
function addLog(text, type) {
  const log = $('combat-log');
  const entry = document.createElement('div');
  entry.className = 'log-entry log-' + type;
  entry.textContent = text;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

// ---- Combat Engine ----
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function setAnimState(fighter, anim, duration) {
  fighter.animState = anim;
  fighter.animTimer = 0;
  await sleep(duration);
  if (fighter.hp > 0) {
    fighter.animState = 'idle';
    fighter.animTimer = 0;
    fighter.x = fighter.baseX;
  }
}

$('fight-btn').addEventListener('click', async () => {
  if (state.fighting) return;
  state.fighting = true;
  $('fight-btn').style.display = 'none';
  startMusic();

  addLog('⚔️ FIGHT!', 'round');

  const f1 = fighters[0];
  const f2 = fighters[1];
  let round = 0;

  while (f1.hp > 0 && f2.hp > 0 && round < 50) {
    round++;
    $('round-display').textContent = 'Round ' + round;
    addLog('Round ' + round, 'round');

    const first = rand(1, f1.stats.spd) >= rand(1, f2.stats.spd) ? f1 : f2;
    const second = first === f1 ? f2 : f1;

    await executeTurn(first, second);
    if (second.hp <= 0) break;

    await sleep(400);

    await executeTurn(second, first);
    if (first.hp <= 0) break;

    await sleep(600);
  }

  let winner, loser;
  if (f1.hp <= 0) { winner = f2; loser = f1; }
  else if (f2.hp <= 0) { winner = f1; loser = f2; }
  else {
    winner = f1.hp >= f2.hp ? f1 : f2;
    loser = winner === f1 ? f2 : f1;
    addLog('⏰ Time up!', 'round');
  }

  stopMusic();
  sfxVictory();
  addLog('🏆 ' + winner.type.name + ' wins!', 'winner');
  $('round-display').textContent = '🏆 ' + winner.type.name + ' wins!';

  loser.animState = 'dead';
  loser.animTimer = 0;

  await sleep(1000);
  $('play-again-btn').style.display = '';
  state.fighting = false;
});

async function executeTurn(attacker, defender) {
  const atkName = attacker.type.name;
  const atkStats = attacker.stats;
  const defStats = defender.stats;

  // Attack roll: base + random swing
  let damage = atkStats.atk + rand(1, atkStats.atk * 2);
  let isCrit = false;

  // 15% critical hit chance
  if (Math.random() < 0.15) {
    damage = Math.floor(damage * 1.5);
    isCrit = true;
  }

  await setAnimState(attacker, 'attacking', 300);

  // Dodge roll: speed-based but fluctuates each turn
  const dodgeChance = clamp(defStats.spd * 3 + rand(0, 20), 0, 50);
  if (Math.random() * 100 < dodgeChance) {
    sfxDodge();
    addLog('🌀 Dodge!', 'dodge');
    await setAnimState(defender, 'dodging', 400);
    await sleep(200);
    return;
  }

  // Defense roll: random block
  const block = rand(0, defStats.def * 2);
  const finalDmg = Math.max(1, damage - block);

  defender.hp = Math.max(0, defender.hp - finalDmg);

  if (isCrit) {
    sfxCrit();
    addLog('💥 ' + atkName + ' → ' + finalDmg + ' CRIT!', 'special');
  } else {
    sfxHit();
    addLog('⚔️ ' + atkName + ' → ' + finalDmg + ' dmg!', 'damage');
  }

  if (defender.hp <= 0) {
    sfxKO();
    addLog('💀 KO!', 'damage');
  }

  defender.flashTimer = 0.4;
  updateHealthBars();
  await sleep(300);
}

// ---- Play Again ----
$('play-again-btn').addEventListener('click', () => {
  stopMusic();
  if (animFrame) cancelAnimationFrame(animFrame);
  showScreen('title');
});

// ---- Init ----
showScreen('title');
