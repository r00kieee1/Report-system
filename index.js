document.addEventListener("DOMContentLoaded", function () {
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');
const refreshBtn = document.querySelector('#refreshBtn');
const divList = document.querySelector('.listHolder');
const listUl = document.querySelector('.list');
const lis = listUl.children;

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
  createBtn(lis[i]);
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

  const ul = document.querySelector('.list');
  const addButton = document.querySelector('#addBtn');
  const reportCard = document.getElementById("reportCard");

  addButton.addEventListener("click", function () {
    if(addInput.value === '') {
      alert ('Enter a student name please!')
    } else {
      const li = document.createElement("li");
      const ul = divList.querySelector('ul');
      const listNameSpan = document.createElement('span');
      listNameSpan.className = 'listName'; 
      listNameSpan.textContent = addInput.value; 
      addInput.value = '';
      li.appendChild(listNameSpan); 
      ul.appendChild(li);
      createBtn(li);

      const listItems = document.querySelectorAll(".list li");
      listItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            const itemText = item.querySelector(".listName").textContent;
            reportCard.search = `?item${index}=${encodeURIComponent(itemText)}`;
            reportCard.click();
        });
      });
    }    
  });

  ul.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const itemText = event.target.querySelector(".listName");
      };
  });

  const listItems = document.querySelectorAll(".list li");
  listItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
        const itemText = item.querySelector(".listName").textContent;
        reportCard.search = `?item${index}=${encodeURIComponent(itemText)}`;
        reportCard.click();
    });
});

});
