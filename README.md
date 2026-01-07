# Build a Pokédex (CLI)

Welcome to **Build a Pokédex** — a command-line application that lets you explore Pokémon data directly from your terminal. This project uses the public **PokéAPI** to fetch real Pokémon data via HTTP `GET` requests and presents it through an interactive REPL (Read–Eval–Print Loop).

If you are not familiar with Pokémon, that is completely fine. A **Pokédex** is simply a fictional encyclopedia that stores information about Pokémon such as their names, types, abilities, and stats. In this project, it serves as a practical way to learn how to build a real-world CLI tool.

---

## Learning Goals

By completing this project, you will:

- Practice making HTTP requests in **TypeScript**
- Learn how to build a **CLI application** with a REPL interface
- Get hands-on practice with **local TypeScript development and tooling**
- Learn about **caching** and how to use it to improve performance

---

## Features

- Interactive command-line REPL
- Fetch Pokémon data from the PokéAPI
- Display Pokémon information:
  - Name
  - Types
  - Stats
- Local caching to reduce unnecessary API requests

---

## Tech Stack

- **TypeScript**
- **Node.js**
- **PokéAPI** — https://pokeapi.co/

---

## Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher recommended)
- npm or yarn
- Basic understanding of TypeScript and the command line

---

## Installation

Clone the repository:

```bash
git clone https://github.com/peterrobert/build-a-pokedex.git
cd build-a-pokedex
npm install
npm run start
```
