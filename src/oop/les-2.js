export const make = (numer = null, denom = null) => ({
  numer,
  denom,
  setNumer(num) {
    this.numer = num;
  },
  getNumer() {
    return this.numer;
  },
  setDenom(num) {
    this.denom = num;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  add(fraction) {
    const newNumer = this.getNumer() * fraction.getDenom() + this.getDenom() * fraction.getNumer();
    const newDenom = this.getDenom() * fraction.getDenom();

    const newNumber = make();
    newNumber.setNumer(newNumer);
    newNumber.setDenom(newDenom);
    return newNumber;
  },

});

export default make;
