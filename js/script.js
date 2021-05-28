const palindromo = "Àl!imüUmîlä";
const noPalindromo = "tengoUnGato";
function esPalindromo(string) {
  let cambio = string;
  const esPalindoromo = false;
  cambio = cambio.toLowerCase();
  cambio = cambio.replace(/[.,:;()_?Â¿!Â¡-\s]/g, "");
  cambio = cambio.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const cambioArray = cambio.split("");
  const cambioReverseArray = cambioArray.reverse();
  const cambioReverse = cambioReverseArray.join("");
  console.log(
    `${cambioReverse}${
      cambioReverse === cambio ? "" : " no"
    } es palindorm ja que l'inversa es ${cambio}`
  );
}
esPalindromo(palindromo);
esPalindromo(noPalindromo);
