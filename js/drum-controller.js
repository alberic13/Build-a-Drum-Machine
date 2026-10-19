// Drum Controller - Audio Playback & Pad Trigger Logic

export class DrumController {
  constructor(displayController, initialBank) {
    this.display = displayController;
    this.currentBank = initialBank;
    this.volume = 0.7;
    this.isPowerOn = true;
  }

  setPower(isOn) {
    this.isPowerOn = isOn;
    if (!isOn) {
      this.display.clear();
    } else {
      this.display.show('POWER ON', true, 1000);
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    const audioElements = document.querySelectorAll('.clip');
    audioElements.forEach(audio => {
      audio.volume = this.volume;
    });
    if (this.isPowerOn) {
      this.display.showVolume(this.volume);
    }
  }

  setBank(bank, bankName) {
    this.currentBank = bank;
    const pads = document.querySelectorAll('.drum-pad');
    
    pads.forEach(pad => {
      const key = pad.dataset.key;
      const soundData = this.currentBank.find(item => item.keyTrigger === key);
      if (soundData) {
        pad.id = soundData.id;
        const subLabel = pad.querySelector('.pad-sub');
        if (subLabel) {
          subLabel.textContent = soundData.name;
        }
        const audio = pad.querySelector('.clip');
        if (audio) {
          audio.src = soundData.url;
          audio.volume = this.volume;
        }
      }
    });

    if (this.isPowerOn && bankName) {
      this.display.showBank(bankName);
    }
  }

  triggerSound(audioElement, padElement) {
    if (!audioElement || !padElement) return;

    // Visual feedback
    padElement.classList.add('active');
    setTimeout(() => {
      padElement.classList.remove('active');
    }, 150);

    // Audio playback & display update
    if (this.isPowerOn) {
      audioElement.currentTime = 0;
      audioElement.volume = this.volume;
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      const key = padElement.dataset.key || audioElement.id;
      const sound = this.currentBank.find(item => item.keyTrigger === key);
      const soundName = sound ? sound.name : padElement.id.replace(/-/g, ' ');
      this.display.showClipName(soundName);
    }
  }

  triggerByKey(keyChar) {
    if (!keyChar) return;
    const key = keyChar.toUpperCase();
    const audioElement = document.getElementById(key);
    if (audioElement && audioElement.classList.contains('clip')) {
      const padElement = audioElement.parentElement;
      this.triggerSound(audioElement, padElement);
    }
  }

  triggerByPad(padElement) {
    if (!padElement) return;
    const audioElement = padElement.querySelector('.clip');
    if (audioElement) {
      this.triggerSound(audioElement, padElement);
    }
  }
}
