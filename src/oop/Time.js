class Time {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static fromString(value) {
    const [h, m] = value.split(':');
    return new Time(h, m);
  }
}

Time.prototype.toString = function toString() {
  return `${this.hour}:${this.minute}`;
};

export default Time;
