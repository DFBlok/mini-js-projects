const input = document.getElementById("input");

/* function reverseString(str) {
  return str.split("").reverse().joint("");
} */

function check() {
    /* console.log(input.value) */
  const value = input.value;
  const reverse = value.split("").reverse().join("");

  if (value === reverse) {
/*     alert("Congrats your word is PALINDROME"); */
    document.getElementById("render").textContent = "Congrats your word is PALINDROME";
  } else {
/*     alert("Word is NOT a PALINDROME"); */
    document.getElementById("render").textContent = "Word is NOT a PALINDROME";
  }

  input.value = "";
}
