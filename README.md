# S.E.B — Simplificateur d'Expressions Booléennes

An interactive web application for learning and simplifying Boolean algebra expressions.

S.E.B provides three modes: a comprehensive course on Boolean logic gates and theorems, practice exercises with adjustable difficulty, and an automated solver using Karnaugh maps.

---

## Features

**Course mode** — Complete introduction to Boolean algebra with:
- Interactive explanations of logic gates (AND, OR, NOT, XOR)
- Boolean theorems and properties (De Morgan, distributivity, absorption...)
- Karnaugh map methodology for expression simplification

**Practice mode** — Self-paced exercises with:
- Three difficulty levels (easy, medium, hard)
- Randomly generated Boolean expressions
- Hints showing relevant theorems
- Karnaugh map visualisation for each problem

**Solver mode** — Automated simplification engine:
- Input any Boolean expression
- Get the simplified form using the Karnaugh map algorithm
- Visual representation of the simplification process

---

## How to use

No installation required — this is a pure client-side web application.

```bash
# Clone the repository
git clone https://github.com/yasiralgit/projetCMI.git
cd projetCMI

# Open in your browser
open index.html
```

Or visit the live demo: [yasiralgit.github.io/projetCMI](https://yasiralgit.github.io/projetCMI) (if GitHub Pages is enabled).

---

## Project structure

```
projetCMI/
├── index.html              # Landing page with carousel
├── pages/
│   ├── cours.html          # Course — logic gates and theorems
│   ├── entrainement.html   # Practice exercises
│   └── resolution.html     # Automated solver
├── js/
│   ├── entrainement.js     # Exercise logic and database
│   └── karnaugh.js         # Karnaugh map algorithm
├── css/
│   └── style.css           # Shared styles
└── img/                    # Logic gate diagrams and logos
```

---

## Technical details

### Karnaugh map algorithm

The solver (`js/karnaugh.js`) implements a complete Karnaugh map simplification pipeline:

1. **Expression parsing** — Convert user input to internal binary representation
2. **Truth table generation** — Enumerate all input combinations
3. **Karnaugh table construction** — Map truth table values to K-map cells
4. **Prime implicant detection** — Find all maximal rectangular groups of 1s
5. **Minimal cover selection** — Choose the smallest set of implicants covering all 1s

The algorithm uses a stack-based parser and handles expressions with up to 4 variables (A, B, C, D).

### Data structures

- `OpBinaire` class: represents binary codes for Boolean operands
- `Pile` class: stack implementation for expression parsing
- Expression database: precomputed exercises with solutions and hints

### Technologies

- Pure HTML5/CSS3/JavaScript (no frameworks)
- Bootstrap 4 for responsive UI components
- Client-side only — no server required

---

## Expression syntax

Supported operators:
- `.` — AND
- `+` — OR  
- `!` — NOT
- `*` — XOR

Example: `!A.!B.C + A.B.!C + A.B.C`

Variables must be uppercase single letters (A, B, C, D).

---

## Academic context

This project was developed as part of the CMI (Cursus Master en Ingénierie) program at the University of Montpellier. The goal was to create an interactive learning tool for digital logic fundamentals, covering both theoretical concepts and practical simplification techniques.

---

## Known limitations

- Maximum 4 variables per expression (A, B, C, D)
- French language UI (théorèmes, cours, résolution...)
- No XOR simplification in Karnaugh mode (XOR is not directly representable in K-maps)

---

## Future improvements

- [ ] English translation
- [ ] Support for 5+ variables
- [ ] Export solutions as LaTeX or circuit diagrams
- [ ] Progressive Web App (PWA) for offline use
- [ ] QMC (Quine-McCluskey) algorithm as an alternative to Karnaugh

---

## License

Academic project — free to use and modify.