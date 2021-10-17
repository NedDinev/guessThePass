function guessThePass([passInput]) {
  if (passInput == "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}
guessThePass(["qwerty"]);
guessThePass(["s3cr3t!P@ssw0rd"]);
guessThePass(["s3cr3t!p@ss"]);