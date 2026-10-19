// Display Controller for Drum Machine LCD

export class DisplayController {
  constructor(displayElement) {
    this.displayEl = displayElement;
    this.timer = null;
    this.lastSound = '';
  }

  show(text, isTemporary = false, duration = 1200) {
    if (!this.displayEl) return;
    
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.displayEl.textContent = text;

    if (isTemporary) {
      this.timer = setTimeout(() => {
        this.displayEl.textContent = this.lastSound || 'READY';
      }, duration);
    } else {
      this.lastSound = text;
    }
  }

  showClipName(name) {
    this.show(name, false);
  }

  showVolume(volume) {
    const percent = Math.round(volume * 100);
    this.show(`VOL: ${percent}%`, true, 1000);
  }

  showBank(bankName) {
    this.show(bankName, true, 1200);
  }

  clear() {
    if (!this.displayEl) return;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.displayEl.textContent = '';
    this.lastSound = '';
  }
}
