function caesar(string, shift) {
  // a === 97, z === 122
  // spread lower cased string
  const newStringInCode = [...string.toLowerCase()].map((char, index) => {
    // if character is not a lower case letter return it as is
    if (!(char.charCodeAt() > 96 && char.charCodeAt() < 123)) {
      return char;
    }
    // if it is, newLetterCode = character code plus the shift
    let newLetterCode = char.charCodeAt() + shift;

    while (newLetterCode > 122) {
      newLetterCode = 96 + (newLetterCode - 122);
    }

    if (string[index].toUpperCase() === string[index]) {
      return String.fromCharCode(newLetterCode).toUpperCase();
    }

    return String.fromCharCode(newLetterCode);
  });

  return newStringInCode.join('');
}

export default caesar;
