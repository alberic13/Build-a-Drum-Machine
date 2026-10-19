import { BANK_ONE, BANK_TWO } from './audio-bank.js';
import { DisplayController } from './display-controller.js';
import { DrumController } from './drum-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const displayElement = document.getElementById('display');
  const volumeSlider = document.getElementById('volume-slider');
  const powerToggle = document.getElementById('power-toggle');
  const bankToggle = document.getElementById('bank-toggle');
  const drumPads = document.querySelectorAll('.drum-pad');

  const display = new DisplayController(displayElement);
  const drum = new DrumController(display, BANK_ONE);

  // Set initial default volume
  if (volumeSlider) {
    const initialVol = parseFloat(volumeSlider.value) || 0.7;
    drum.setVolume(initialVol);
  }

  // Click listener on drum pads (User Story #5)
  drumPads.forEach(pad => {
    pad.addEventListener('click', () => {
      drum.triggerByPad(pad);
    });
  });

  // Global Keyboard listener (User Story #6)
  window.addEventListener('keydown', (event) => {
    // Avoid triggering when user focuses on an input element
    if (event.target.tagName === 'INPUT') return;
    drum.triggerByKey(event.key);
  });

  // Volume slider event
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (event) => {
      const vol = parseFloat(event.target.value);
      drum.setVolume(vol);
    });
  }

  // Power switch toggle
  if (powerToggle) {
    powerToggle.addEventListener('change', (event) => {
      drum.setPower(event.target.checked);
    });
  }

  // Bank switch toggle
  if (bankToggle) {
    bankToggle.addEventListener('change', (event) => {
      if (event.target.checked) {
        drum.setBank(BANK_TWO, 'Smooth Piano Kit');
      } else {
        drum.setBank(BANK_ONE, 'Heater Kit');
      }
    });
  }

  // Initial display greeting
  display.show('READY');
});
