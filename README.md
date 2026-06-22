# Driftward — an AI-driven text adventure

A tiny browser-based text adventure where every turn is generated live by the Claude API. No pre-written branches — the narrator, the world, and the consequences are all produced on the fly from a structured prompt.

## What this demonstrates

- **Direct Claude API integration** — calls `api.anthropic.com/v1/messages` straight from the browser, no backend.
- **Structured output / JSON-mode prompting** — the system prompt forces the model to return strict JSON (`narration`, `trust`, `curiosity`, `danger`), which the app parses and uses to drive UI state (the stat line under each turn).
- **Conversation state management** — full message history is tracked and replayed on every call so the story stays consistent across turns.
- **Prompt design for a constrained, branching system** — rules for tone, pacing, and decision points are baked into the system prompt rather than handled in code.

## Why a game

My background is in game design (BSc Computer Games Technology), and I wanted a demo that actually reflects what I'd build for fun, not a generic "ask the AI a question" wrapper. Treating Claude as a structured game master — producing state, not just prose — felt like the more interesting and more honest test of API + prompt design skills.

## Running it

Open `index.html` in any browser, paste in a Claude API key when prompted, and play. The key is used client-side only and is never sent anywhere except Anthropic's API.

## What I'd build next

- Move the API call server-side so a key isn't needed client-side at all
- Persist game state across sessions (localStorage or a tiny backend)
- Add inventory/item tracking as a second structured field alongside the stat line
- Swap the single system prompt for a small set of "scene" prompts to keep long sessions more consistent
