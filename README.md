# Minecraft Mob Battle Simulator

A free browser-based pixel-art mob fighting game inspired by Minecraft. Design two mobs, allocate stats, and watch them battle with chiptune music and sound effects!

## [Play Now](https://faridmovsumov.github.io/minecraft-mob-battle-simulator/)

## Features

- **14 Minecraft-inspired mobs** — Zombie, Mutant Zombie, Skeleton, Enderman, Warden, Mutant Warden, Iron Golem, Mutant Iron Golem, Creeper, Spider, Blaze, Witch, Piglin Brute, Ghast
- **Stat allocation system** — Distribute 20 points across Attack, Defense, Speed, and Health
- **Turn-based combat engine** — Critical hits, dodges, blocking, and speed-based turn order
- **Animated pixel-art arena** — Idle bobbing, attack lunges, dodge animations, KO effects
- **Chiptune audio** — Energetic battle music and sound effects, all synthesized in-browser using Web Audio API (no external files)
- **Fully client-side** — No server, no downloads, runs entirely in your browser
- **Mobile friendly** — Responsive design works on phones and tablets

## How to Play

1. Click **START**
2. Choose a mob type and allocate stat points for Mob 1
3. Do the same for Mob 2
4. Click **FIGHT!** and watch the battle unfold
5. Click **PLAY AGAIN** to rematch with new mobs

## Stats Guide

| Stat | Effect |
|------|--------|
| Attack | Increases damage dealt per hit |
| Defense | Reduces incoming damage |
| Speed | Determines turn order and dodge chance |
| Health | Total hit points (HP = Health x 15) |

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks or dependencies
- Pixel art rendered on HTML5 Canvas
- All audio synthesized with Web Audio API — no audio files needed
- Google Fonts (Press Start 2P) for retro pixel font

## Run Locally

```bash
git clone https://github.com/faridmovsumov/minecraft-mob-battle-simulator.git
cd minecraft-mob-battle-simulator
open index.html
```

No build step required. Just open `index.html` in any modern browser.

## License

MIT

## Keywords

minecraft, mob, battle, simulator, pixel art, fighting game, browser game, chiptune, web audio, retro, 8-bit, turn-based combat, free online game, no download
