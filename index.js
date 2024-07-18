let answer = parseInt(prompt("pls writ =e thenumber you wannaniggbugg me as"));
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("niggbugg");
  } else if (i % 3 === 0) {
    console.log("nigg) ");
  } else if (i % 5 === 0) {
    console.log("bugg");
  } else {
    console.log(i);
  }
}
