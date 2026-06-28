# 🏰 veqzii.github.io - Portfolio

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

- 4 playable classes - Warrior, Rogue, Mage, Miner
- Procedurally generated dungeons with fog of war
- Turn-based combat, enemy AI, projectiles & particle effects
- In-game shop with weapons, potions, passive upgrades & mana mechanics
- 8 enemy types including a Dragon boss

▶ **[Play in Browser](https://veqzii.github.io/dungeon_delve.html)**

---

### Rock · Paper · Scissors
> * · SDL2 · SDL2_ttf*

A polished 2D arcade game built entirely with SDL2 rendering primitives no sprite sheets or external assets. All hand shapes are drawn programmatically.

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

### Snake - Cosmetics Edition *(Research Project)*
> *Research · Game Design · Dissertation*

A Snake game prototype developed as part of a university dissertation studying **player retention through in-game cosmetic systems** - investigating whether micro-transactions and skin options influence playtime and engagement in free-to-play games.

**Research Question:** *Importance of micro-transactions in free-to-play games*

📄 **[Project Proposal](docs/Project%20Proposal.pdf)**

<div align="center">

**Built with HTML · CSS · JavaScript · C++ · SDL2**

</div>

# Driftward - an AI-driven text adventure

A tiny browser-based text adventure where every turn is generated live by the Claude API. No pre-written branches - the narrator, the world, and the consequences are all produced on the fly from a structured prompt.

## What this demonstrates

- **Direct Claude API integration** - calls `api.anthropic.com/v1/messages` straight from the browser, no backend.
- **Structured output / JSON-mode prompting** - the system prompt forces the model to return strict JSON (`narration`, `trust`, `curiosity`, `danger`), which the app parses and uses to drive UI state (the stat line under each turn).
- **Conversation state management** - full message history is tracked and replayed on every call so the story stays consistent across turns.
- **Prompt design for a constrained, branching system** - rules for tone, pacing, and decision points are baked into the system prompt rather than handled in code.

## Why a game

My background is in game design (BSc Computer Games Technology), and I wanted a demo that actually reflects what I'd build for fun, not a generic "ask the AI a question" wrapper. Treating Claude as a structured game master - producing state, not just prose - felt like the more interesting and more honest test of API + prompt design skills.

## Running it

Open `index.html` in any browser, paste in a Claude API key when prompted, and play. The key is used client-side only and is never sent anywhere except Anthropic's API.

## What I'd build next

- Move the API call server-side so a key isn't needed client-side at all
- Persist game state across sessions (localStorage or a tiny backend)
- Add inventory/item tracking as a second structured field alongside the stat line
- Swap the single system prompt for a small set of "scene" prompts to keep long sessions more consistent


---

## 🎨 Artwork

| Piece | Medium | Description |
|-------|--------|-------------|
| Rock Paper Scissors Poster | SVG · Digital Art | Promotional poster with risograph-style deep-space aesthetic |
| Snake - Cover Art | SVG · Digital Art | Neon pixel-art cover for the Snake cosmetics research project |

All artwork created as original pieces to accompany game projects.

---


