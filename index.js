const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');
const refreshBtn = document.querySelector('#refreshBtn');
const divList = document.querySelector('.listHolder');
const listUl = document.querySelector('.list');
const lis = listUl.children;

addBtn.addEventListener('click', () => {
    if(addInput.value === '') {
        alert('Enter a student name please!');
    } else {
      const ul = divList.querySelector('ul');
      const li = document.createElement('li');
      li.innerHTML = addInput.value;
      addInput.value = '';
      ul.appendChild(li);
      createBtn(li);
    }   
});

refreshBtn.addEventListener('click', () => {
  window.location.reload();
})

function createBtn(li) {
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);
 
  return li;
}
for(var i = 0; i < lis.length; i++) {
  createBtn(lis[i])
}

divList.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if(button.className === 'btn-icon remove') {
      ul.removeChild(li);
    }
  }
})

