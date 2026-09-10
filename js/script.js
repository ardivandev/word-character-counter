const displayJmlKarakter = document.getElementById('displayJmlKarakter');
const displayJmlKata = document.getElementById('displayJmlKata');
const displayEstimasiBaca = document.getElementById('displayEstimasiBaca');
const inputTeks = document.getElementById('inputTeks');

function updateDisplay(karakter = 0, kata = 0, estimasiBaca = 0) {
  displayJmlKarakter.textContent = String(karakter);
  displayJmlKata.textContent = String(kata);
  displayEstimasiBaca.textContent = String(estimasiBaca);
}

inputTeks.addEventListener('input', (e) => {
  const rawValue = e.target.value;
  const trimmedValue = rawValue.trim();

  const karakter = rawValue.length;
  const kata = trimmedValue === '' ? 0 : trimmedValue.split(/\s+/).length;
  const estimasiBaca = kata / 4;
  updateDisplay(karakter, kata, estimasiBaca);
});
