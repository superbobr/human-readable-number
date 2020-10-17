module.exports = function toReadable (number) {
  let numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  let numbers2 = ['', 'ten', 'twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (String(number).length === 1) {
      return numbers1[number];
  } else if (String(number).length === 2 && number <= 20) {
      return numbers1[number];
  } else if (String(number).length === 2 && number > 20) {
      if (String(number)[1] === '0') {
          number = String(number);
          return numbers2[number[0]];
      }
      number = String(number);
      return `${numbers2[number[0]]} ${numbers1[number[1]]}`;
  } else if (String(number).length === 3) {
      if (String(number)[1] === '0' && String(number)[2] === '0') {
          number = String(number);
          return numbers1[number[0]] + ' hundred';
      } else if (String(number)[1] === '0') {
          number = String(number);
          return `${numbers1[number[0]]} hundred ${numbers1[number[2]]}`;
      } else if (String(number)[2] === '0') {
          number = String(number);
          return `${numbers1[number[0]]} hundred ${numbers2[number[1]]}`;
      } else if (+(String(number).slice(1)) < 20) {
          number = String(number);
          let numberTwo = +(String(number).slice(1));
          return `${numbers1[number[0]]} hundred ${numbers1[numberTwo]}`;
      } else {
          number = String(number);
          return `${numbers1[number[0]]} hundred ${numbers2[number[1]]} ${numbers1[number[2]]}`;
      }
    }
};
