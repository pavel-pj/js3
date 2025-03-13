export function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCur) {
  if (this.currency === newCur) return this;

  if (this.currency === 'usd') {
    this.currency = 'eur';
    this.value *= 0.7;
    return this;
  }
  if (this.currency === 'eur') {
    this.currency = 'usd';
    this.value *= 1.2;
    return this;
  }
};

Money.prototype.add = function add(money) {
  const curr = money.getCurrency();

  if (this.getCurrency() === money.getCurrency()) {
    return new Money(this.getValue() + money.getValue(), curr);
  }

  if (this.getCurrency !== curr) {
    if (curr === 'usd') {
      money.exchangeTo('eur');
    } else if (curr === 'eur') {
      money.exchangeTo('usd');
    }
  }
  return new Money(this.getValue() + money.getValue(), curr);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString('en-US', { style: 'currency', currency: this.getCurrency() });
};

export default { Money };
