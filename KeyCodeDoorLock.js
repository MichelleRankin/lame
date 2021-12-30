class KeyCodeDoorLock {
  constructor(answer) {
    this.status = "LOCKED";
    this.answer = answer;
    this.enteredKeys = [];
    this.consecutive_resets = 0;
  }

  enterKey(key) {
    if (this.status !== "HARD_LOCKED") {
      this.enteredKeys.push(key);
      if (this.enteredKeys.join("") === this.answer) {
        this.status = "UNLOCKED";
        this.consecutive_resets = 0;
      }
    }
  }

  reset(options) {
    if (options && options.admin) {
      this.status = "LOCKED";
      this.consecutive_resets = 0;
      this.enteredKeys = [];
    } else if (this.status !== "HARD_LOCKED") {
      this.enteredKeys = [];
      this.status = "LOCKED";
      this.consecutive_resets++;
      if (this.consecutive_resets === 3) {
        this.status = "HARD_LOCKED";
      }
    }
  }
}
