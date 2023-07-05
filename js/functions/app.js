function repeat(phrase, times) {
  let temp = "";
  for (let i = 0; i < times; i++) {
    temp += phrase;
  }

  console.log(temp);
}

repeat("Hello", 3);
