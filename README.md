# Build a Drum Machine - FreeCodeCamp Certification Project

A modern, responsive, hardware-inspired Drum Machine built to fulfill the [FreeCodeCamp Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine) challenge.

## Features & User Stories Fulfilled

- **User Story #1**: Outer container element with `id="drum-machine"` containing all elements.
- **User Story #2**: Display element with `id="display"` showing active sound titles and system status.
- **User Story #3**: 9 clickable drum pad elements with class `drum-pad`, unique IDs, and inner text for keys `Q, W, E, A, S, D, Z, X, C` in exact sequence.
- **User Story #4**: HTML5 `<audio>` elements with class `clip`, `src` attribute, and `id` matching corresponding key letters (`id="Q"`, `id="W"`, etc.).
- **User Story #5**: Clicking any `.drum-pad` plays the corresponding audio sample with instant re-triggering.
- **User Story #6**: Pressing corresponding keyboard keys (`Q, W, E, A, S, D, Z, X, C`) triggers audio playback and visual feedback.
- **User Story #7**: Displays audio clip title dynamically inside `#display` upon trigger.
- **Extended Features**:
  - Sound Bank selector (Heater Kit vs. Smooth Piano Kit).
  - Master Volume Slider with real-time percentage feedback.
  - Power toggle switch with retro VFD LCD feedback.
  - Tactile MPC-style silicon pads with 3D mechanical press animations.

## Architecture

```text
├── css/
│   ├── variables.css      # Design tokens, color palette, lighting & glow
│   ├── layout.css         # Grid layouts, responsive boundaries
│   ├── components.css     # Drum pad, LCD display, sliders, switches
│   └── style.css          # Aggregator stylesheet & typography
├── js/
│   ├── audio-bank.js      # Sound bank definitions (Bank 1 & Bank 2)
│   ├── display-controller.js # LCD display controller with timers
│   ├── drum-controller.js # Sound triggering, playback, volume & bank engine
│   └── app.js             # Main orchestrator & DOM event binding
├── index.html             # Semantic markup with FCC test suite
└── README.md              # Project documentation
```

## How to Test Manually

1. Open `index.html` directly in your browser or through local server (`http://localhost/Build%20a%20Drum%20Machine/`).
2. Select **"Drum Machine"** from the FreeCodeCamp test suite dropdown in the top-left corner.
3. Click **"Run Tests"** to verify all tests pass.
4. Play manually via mouse clicks or keyboard keys (`Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`).
