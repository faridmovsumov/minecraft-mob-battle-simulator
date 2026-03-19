// =========================================================
// MOBMAKER - Audio Engine (Web Audio API, all synthesized)
// =========================================================

let audioCtx = null;
let masterGain = null;
let isMuted = false;

// Lazy-init AudioContext on first user interaction (browser requirement)
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.4;
  masterGain.connect(audioCtx.destination);
}

// ---- SFX Functions ----

function sfxHit() {
  initAudio();
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(440, t);
  osc.frequency.exponentialRampToValueAtTime(220, t + 0.08);
  gain.gain.setValueAtTime(0.3, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(t);
  osc.stop(t + 0.1);
}

function sfxCrit() {
  initAudio();
  const t = audioCtx.currentTime;

  // Low boom layer
  const osc1 = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  osc1.type = 'sawtooth';
  osc1.frequency.setValueAtTime(150, t);
  osc1.frequency.exponentialRampToValueAtTime(60, t + 0.15);
  gain1.gain.setValueAtTime(0.4, t);
  gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  osc1.connect(gain1);
  gain1.connect(masterGain);
  osc1.start(t);
  osc1.stop(t + 0.2);

  // High crack layer
  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = 'square';
  osc2.frequency.setValueAtTime(800, t);
  osc2.frequency.exponentialRampToValueAtTime(200, t + 0.1);
  gain2.gain.setValueAtTime(0.25, t);
  gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  osc2.connect(gain2);
  gain2.connect(masterGain);
  osc2.start(t);
  osc2.stop(t + 0.12);
}

function sfxDodge() {
  initAudio();
  const t = audioCtx.currentTime;

  // Noise-like whoosh using rapid frequency sweep
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(2000, t);
  osc.frequency.exponentialRampToValueAtTime(200, t + 0.15);
  gain.gain.setValueAtTime(0.15, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(t);
  osc.stop(t + 0.18);
}

function sfxKO() {
  initAudio();
  const t = audioCtx.currentTime;

  // Deep boom
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(120, t);
  osc.frequency.exponentialRampToValueAtTime(30, t + 0.5);
  gain.gain.setValueAtTime(0.5, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(t);
  osc.stop(t + 0.6);

  // Sub rumble
  const osc2 = audioCtx.createOscillator();
  const gain2 = audioCtx.createGain();
  osc2.type = 'square';
  osc2.frequency.setValueAtTime(80, t);
  osc2.frequency.exponentialRampToValueAtTime(20, t + 0.4);
  gain2.gain.setValueAtTime(0.2, t);
  gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
  osc2.connect(gain2);
  gain2.connect(masterGain);
  osc2.start(t);
  osc2.stop(t + 0.5);
}

function sfxVictory() {
  initAudio();
  const t = audioCtx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    const start = t + i * 0.12;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.25, start + 0.02);
    gain.gain.setValueAtTime(0.25, start + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, start + (i === 3 ? 0.4 : 0.12));
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(start + (i === 3 ? 0.4 : 0.12));
  });
}

function sfxClick() {
  initAudio();
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(1200, t);
  osc.frequency.exponentialRampToValueAtTime(800, t + 0.03);
  gain.gain.setValueAtTime(0.12, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(t);
  osc.stop(t + 0.04);
}

// ---- Chiptune Battle Music Sequencer ----

let musicPlaying = false;
let musicTimerId = null;
let musicNodes = []; // track active nodes for cleanup

const BPM = 150;
const STEP_TIME = 60 / BPM / 2; // sixteenth-note feel (eighth notes at 150)

// Note frequencies (octave 3-5)
const NOTE = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00, B5: 987.77,
};

// Bass pattern (16 steps per bar, 2 bars = 32 steps)
const bassPattern = [
  NOTE.E3, 0, NOTE.E3, NOTE.E3, NOTE.G3, 0, NOTE.A3, 0,
  NOTE.E3, 0, NOTE.E3, NOTE.B3, NOTE.A3, 0, NOTE.G3, 0,
  NOTE.C3, 0, NOTE.C3, NOTE.C3, NOTE.E3, 0, NOTE.G3, 0,
  NOTE.D3, 0, NOTE.D3, NOTE.D3, NOTE.A3, 0, NOTE.G3, 0,
];

// Lead melody (32 steps, more melodic)
const leadPattern = [
  NOTE.E5, 0, NOTE.G5, 0, NOTE.A5, NOTE.G5, NOTE.E5, 0,
  NOTE.D5, 0, NOTE.E5, 0, NOTE.G5, 0, 0, 0,
  NOTE.C5, 0, NOTE.E5, 0, NOTE.G5, NOTE.A5, NOTE.G5, 0,
  NOTE.E5, 0, NOTE.D5, 0, NOTE.C5, 0, 0, 0,
];

// Kick on beats 1,3 (every 8 steps in our 16-step bar), snare on 2,4
// Hi-hat on every other step
const kickSteps =  [1,0,0,0,0,0,0,0, 1,0,0,0,0,0,0,0];
const snareSteps = [0,0,0,0,1,0,0,0, 0,0,0,0,1,0,0,0];
const hihatSteps = [1,0,1,0,1,0,1,0, 1,0,1,0,1,0,1,0];

let musicStep = 0;
let nextStepTime = 0;

function scheduleNote(freq, type, gainVal, startTime, duration) {
  if (!audioCtx || !masterGain) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(gainVal, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.01);
  musicNodes.push(osc);
  // Auto-cleanup reference after done
  osc.onended = () => {
    const idx = musicNodes.indexOf(osc);
    if (idx !== -1) musicNodes.splice(idx, 1);
  };
}

function scheduleKick(startTime) {
  if (!audioCtx || !masterGain) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, startTime);
  osc.frequency.exponentialRampToValueAtTime(40, startTime + 0.12);
  gain.gain.setValueAtTime(0.35, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(startTime);
  osc.stop(startTime + 0.15);
  musicNodes.push(osc);
  osc.onended = () => {
    const idx = musicNodes.indexOf(osc);
    if (idx !== -1) musicNodes.splice(idx, 1);
  };
}

function scheduleSnare(startTime) {
  if (!audioCtx || !masterGain) return;
  // Noise-like snare: two detuned oscillators
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc1.type = 'triangle';
  osc2.type = 'square';
  osc1.frequency.setValueAtTime(250, startTime);
  osc2.frequency.setValueAtTime(400, startTime);
  osc1.frequency.exponentialRampToValueAtTime(100, startTime + 0.08);
  osc2.frequency.exponentialRampToValueAtTime(150, startTime + 0.06);
  gain.gain.setValueAtTime(0.2, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(masterGain);
  osc1.start(startTime);
  osc2.start(startTime);
  osc1.stop(startTime + 0.1);
  osc2.stop(startTime + 0.1);
  musicNodes.push(osc1, osc2);
  osc1.onended = () => {
    const idx = musicNodes.indexOf(osc1);
    if (idx !== -1) musicNodes.splice(idx, 1);
  };
  osc2.onended = () => {
    const idx = musicNodes.indexOf(osc2);
    if (idx !== -1) musicNodes.splice(idx, 1);
  };
}

function scheduleHihat(startTime) {
  if (!audioCtx || !masterGain) return;
  // Very high, very short square
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(6000, startTime);
  osc.frequency.exponentialRampToValueAtTime(4000, startTime + 0.02);
  gain.gain.setValueAtTime(0.06, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.03);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(startTime);
  osc.stop(startTime + 0.03);
  musicNodes.push(osc);
  osc.onended = () => {
    const idx = musicNodes.indexOf(osc);
    if (idx !== -1) musicNodes.splice(idx, 1);
  };
}

function scheduleMusicStep() {
  if (!musicPlaying || !audioCtx) return;

  const now = audioCtx.currentTime;
  // Schedule ahead by ~100ms for smooth playback
  while (nextStepTime < now + 0.1) {
    const s16 = musicStep % 16; // position in 16-step drum bar
    const s32 = musicStep % 32; // position in 32-step melodic phrase

    // Drums
    if (kickSteps[s16]) scheduleKick(nextStepTime);
    if (snareSteps[s16]) scheduleSnare(nextStepTime);
    if (hihatSteps[s16]) scheduleHihat(nextStepTime);

    // Bass
    const bassFreq = bassPattern[s32];
    if (bassFreq) {
      scheduleNote(bassFreq, 'square', 0.12, nextStepTime, STEP_TIME * 0.8);
    }

    // Lead melody
    const leadFreq = leadPattern[s32];
    if (leadFreq) {
      scheduleNote(leadFreq, 'sawtooth', 0.08, nextStepTime, STEP_TIME * 0.6);
    }

    nextStepTime += STEP_TIME;
    musicStep++;
  }

  musicTimerId = setTimeout(scheduleMusicStep, 50);
}

function startMusic() {
  initAudio();
  if (musicPlaying) return;
  musicPlaying = true;
  musicStep = 0;
  nextStepTime = audioCtx.currentTime + 0.05;
  scheduleMusicStep();
}

function stopMusic() {
  musicPlaying = false;
  if (musicTimerId) {
    clearTimeout(musicTimerId);
    musicTimerId = null;
  }
  // Stop all playing music nodes
  musicNodes.forEach(node => {
    try { node.stop(); } catch (e) { /* already stopped */ }
  });
  musicNodes = [];
}

function toggleMute() {
  initAudio();
  isMuted = !isMuted;
  masterGain.gain.value = isMuted ? 0 : 0.4;
  const btn = document.getElementById('mute-btn');
  if (btn) btn.textContent = isMuted ? '🔇' : '🔊';
}
