function getCleanRank(reviewWords) {
  const badWords = ["dang", "shoot", "heck"];
  let badWordCounter = 0;
  for (const word of reviewWords) {
    isNotClean = badWords.includes(word);
    console.log(isNotClean);
    if (isNotClean) badWordCounter++; 
  }
  if (badWordCounter === 0) {
    return 'clean';
  }

  if (badWordCounter === 1) {
    return 'dirty';
  }

  if (badWordCounter > 1) {
    return 'filthy';
  }
}


