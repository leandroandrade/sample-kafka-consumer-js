const boolean = value => (value ? value.toLowerCase().trim() === 'true' : false);
const string = value => (value ? value.trim() : '');
const number = value => Number(value) || 0;
const array = value =>
    value
        ? value
              .split(',')
              .map(s => s.trim())
              .filter(Boolean)
        : [];

module.exports = { boolean, string, number, array };
