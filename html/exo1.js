let para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter un nouveau joueur :)');
  para.textContent = 'Player 1 : ' + name;
}
