function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");


  let Die2 = {

  }
  let Die1 = {

  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 10; i++) {
    Die1.value = getRandomInt(1, 6);
    Die2.value = getRandomInt(1, 6);

    let dieString1 = ""
    let dieString2 = ""
    switch (Die1.value) {
      /* "case 1:" is like the following "if" statement
      if (this.Value == 1) {
          dieString = "\u2680";
      }
      */
      case 1:
        dieString1 = "\u2680";
        break;
      case 2:
        dieString1 = "\u2681";
        break;
      case 3:
        dieString1 = "\u2682";
        break;
      case 4:
        dieString1 = "\u2683";
        break;
      case 5:
        dieString1 = "\u2684";
        break;
      case 6:
        dieString1 = "\u2685";
        break;
    }
    switch (Die2.value) {
      /* "case 1:" is like the following "if" statement
      if (this.Value == 1) {
          dieString = "\u2680";
      }
      */
      case 1:
        dieString2 = "\u2680";
        break;
      case 2:
        dieString2 = "\u2681";
        break;
      case 3:
        dieString2 = "\u2682";
        break;
      case 4:
        dieString2 = "\u2683";
        break;
      case 5:
        dieString2 = "\u2684";
        break;
      case 6:
        dieString2 = "\u2685";
        break;
    }

    let message = `${dieString1} + ${dieString2} == ${Die1.value + Die2.value}`;
    if (Die1.value == Die2.value) {
      message += " DOUBLES!";
    }

    console.log(message);
  }
}


main();