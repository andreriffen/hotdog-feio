const form = document.querySelector('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const pao = form.pao.value;
  const ketchup = form.ketchup.checked;
  const mostarda = form.mostarda.checked;
  const salsicha = form.salsicha.value;

  resultado.innerHTML = `Seu hot dog: pão ${pao}, salsicha ${salsicha}, ketchup ${ketchup ? 'sim' : 'não'}, mostarda ${mostarda ? 'sim' : 'não'}.`;
});
