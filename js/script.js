

const list = document.querySelector('.list');
const list2 = document.querySelector('.list2');

for(let i = 0; i < 10; i++){
  const li = `<li>${i}</li>`;
  list.innerHTML += li;
}

for(let i = 0; i < 10; i++){
  const li = document.createElement('li');

  // rossi solo se divisibili per tre ma non lo 0
  // è come scrivere ((i % 3) === 0 && i !== 0)
  if(!(i % 3) && i){
    li.classList.add('red');
  }

  li.append(`Elemento ${i}`); // con append aggiungo il testo nell'innerHTML
  console.log(li);
  list2.append(li);  // acon append aggiungo l'elemento creato dinamicamente

}