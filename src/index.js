const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let morse = expr.split("**********");
  let q = [];
  let result = "";

  for (let c of morse) {
    for (let i = 0; i < c.length; i += 10) {
      let a = "";
      for (let j = 0; j < 10; j += 2) {
        if (c.slice(i + j, i + j + 2) == "11") {
          a += "-";
        } else if (c.slice(i + j, i + j + 2) == "10") {
          a += ".";
        }
      }
      q.push(a);
    }
    q.push("|");
  }

  for (let s of q) {
    if (s != "|") {
      result += MORSE_TABLE[s];
    } else {
      result += " ";
    }
  }

  return result.slice(0, result.length - 1);
}

module.exports = {
  decode,
};
