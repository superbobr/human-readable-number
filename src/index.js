module.exports = function toReadable(number) {
  const numbers1 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const numbers2 = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const strNum = String(number);

  if (strNum.length === 1) {
    return numbers1[number];
  }

  if (strNum.length === 2 && number < 20) {
    return numbers1[number];
  }

  if (strNum.length === 2 && number >= 20) {
    if (strNum[1] === '0') {
      return numbers2[+strNum[0]];
    }
    return `${numbers2[+strNum[0]]} ${numbers1[+strNum[1]]}`;
  }

  if (strNum.length === 3) {
    const hundredPart = `${numbers1[+strNum[0]]} hundred`;
    const lastTwoDigits = +strNum.slice(1);

    if (strNum[1] === '0' && strNum[2] === '0') {
      return hundredPart;
    }

    if (strNum[1] === '0') {
      return `${hundredPart} ${numbers1[+strNum[2]]}`;
    }

    if (strNum[2] === '0') {
      return `${hundredPart} ${numbers2[+strNum[1]]}`;
    }

    if (lastTwoDigits < 20) {
      return `${hundredPart} ${numbers1[lastTwoDigits]}`;
    }

    return `${hundredPart} ${numbers2[+strNum[1]]} ${numbers1[+strNum[2]]}`;
  }

  return '';
};
