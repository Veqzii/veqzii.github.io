# 🏰 veqzii.github.io — Portfolio

> **Game Designer · Developer ·**
> A personal portfolio showcasing game projects, artwork, design documents and career experience.

🌐 **[View Live Site →](https://veqzii.github.io)**

---

## 📋 Table of Contents

- [About](#about)
- [Projects](#projects)
- [Artwork](#artwork)
- [Tech Stack](#tech-stack)
- [Structure](#structure)
- [Running Locally](#running-locally)
- [Contact](#contact)

---

## 👤 About

BSc Computer Games Technology graduate from the University of West London with a passion for game design and interactive experiences. This portfolio covers everything from C++ SDL2 games and roguelikes to design documents, concept art and career history.

---

## 🎮 Projects

### Dungeon Delve
> *HTML5 · JavaScript · Canvas API*

A fully browser-playable roguelike dungeon crawler built from scratch in vanilla JavaScript.

- 4 playable classes — Warrior, Rogue, Mage, Miner
- Procedurally generated dungeons with fog of war
- Turn-based combat, enemy AI, projectiles & particle effects
- In-game shop with weapons, potions, passive upgrades & mana mechanics
- 8 enemy types including a Dragon boss

▶ **[Play in Browser](https://veqzii.github.io/dungeon_delve.html)**

---

### Rock · Paper · Scissors
> * · SDL2 · SDL2_ttf*

A polished 2D arcade game built entirely with SDL2 rendering primitives — no sprite sheets or external assets. All hand shapes are drawn programmatically.

- Animated throw sequence with sine-wave bounce physics
- RNG CPU opponent with dramatic reveal fade-in
- Persistent score tracking across rounds
- Cross-platform: Windows, macOS, Linux

📄 **[Game Design Document](docs/RPS_GDD.docx)** &nbsp;|&nbsp; 💻 **[Source Code](rps_game.cpp)**

**Build:**
```bash
g++ rps_game.cpp -o rps_game $(sdl2-config --cflags --libs) -lSDL2_ttf -std=c++
```

---

### Snake — Cosmetics Edition *(Research Project)*
> *Research · Game Design · Dissertation*

A Snake game prototype developed as part of a university dissertation studying **player retention through in-game cosmetic systems** — investigating whether micro-transactions and skin options influence playtime and engagement in free-to-play games.

**Research Question:** *Importance of micro-transactions in free-to-play games*

📄 **[Project Proposal](docs/Project%20Proposal.pdf)**

---

## 🎨 Artwork

| Piece | Medium | Description |
|-------|--------|-------------|
| Rock Paper Scissors Poster | SVG · Digital Art | Promotional poster with risograph-style deep-space aesthetic |
| Snake — Cover Art | SVG · Digital Art | Neon pixel-art cover for the Snake cosmetics research project |

All artwork created as original pieces to accompany game projects.

---

## 🛠️ Tech Stack

| Area | Technologies |
|------|-------------|
| Game Dev | C++, SDL2, SDL2_ttf, HTML5 Canvas, JavaScript |
| Design | Figma, Capcut |
| Web | HTML5, CSS3, JavaScript |
| Version Control | Git, GitHub |
| Engines | Unity, C# |
| Other | SEO, Social Media Management, Technical Support |

---

## 💻 Running Locally

**Portfolio site:**
```bash
git clone https://github.com/veqzii/veqzii.github.io
cd veqzii.github.io
# Open index.html in your browser — no server required
```

**Dungeon Delve:**
```bash
# Just open dungeon_delve.html in any modern browser
# Chrome, Firefox, Edge all work — no install needed
```

**Rock Paper Scissors (C++):**
```bash
# Install SDL2 first:
# Ubuntu:  sudo apt install libsdl2-dev libsdl2-ttf-dev
# macOS:   brew install sdl2 sdl2_ttf

g++ rps_game.cpp -o rps_game $(sdl2-config --cflags --libs) -lSDL2_ttf -std=c++
./rps_game
```

---

<div align="center">

**Built with HTML · CSS · JavaScript · C++ · SDL2**

*© 2021 Aashir Gurung*

</div>
