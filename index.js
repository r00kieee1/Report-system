document.addEventListener("DOMContentLoaded", function () {
  const addInput = document.querySelector('#addInput');
  const addButton = document.querySelector('#addBtn');
  const refreshBtn = document.querySelector('#refreshBtn');
  const divList = document.querySelector('.listHolder');
  const listUl = document.querySelector('.list');
  const names = JSON.parse(localStorage.getItem('names')) || [];

  function addName() {
    const nameText = addInput.value.trim();
    if (nameText === '') return;

    const name = { text: nameText };
    names.push(name);

    localStorage.setItem('names', JSON.stringify(names));

    addInput.value = '';

    displayNames();
  }

  function deleteName(index) {
    names.splice(index, 1);

    localStorage.setItem('names', JSON.stringify(names));

    displayNames();
  }

  function displayNames() {
    listUl.innerHTML = '';

    names.forEach((name, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${name.text}</span>
        <br>
        <button class="delete-button">Delete Name</button>
      `;

      listUl.appendChild(li);
    });
  }

  refreshBtn.addEventListener('click', function () {
    window.location.reload();
  });

  divList.addEventListener('click', function (event) {
    if (event.target.className === 'delete-button') {
      const li = event.target.parentNode;
      const index = Array.from(listUl.children).indexOf(li);
      deleteName(index);
    }
  });

  addButton.addEventListener('click', function () {
    if (addInput.value === '') {
      alert('Enter a student name, please!');
    } else {
      const li = document.createElement("li");
      const listNameSpan = document.createElement('span');
      listNameSpan.className = 'listName';
      listNameSpan.textContent = addInput.value;
      li.appendChild(listNameSpan);
      listUl.appendChild(li);
      createDeleteButton(li);

      li.addEventListener("click", function () {
        const itemText = listNameSpan.textContent;
        reportCard.search = `?item${names.indexOf(nameText)}=${encodeURIComponent(itemText)}`;
        reportCard.click();
      });

      const nameText = addInput.value.trim();
      const name = { text: nameText };
      names.push(name);

      localStorage.setItem('names', JSON.stringify(names));

      addInput.value = '';
      displayNames();

      const index = names.indexOf(name);
      navigateToNextPage(index, nameText);
    }
  });

  function navigateToNextPage(index, nameText) {
    const nextPageURL = 'Report-card/card.html'; 
    const encodedName = encodeURIComponent(nameText);
    const queryParam = `?item${index}=${encodedName}`;
    window.location.href = nextPageURL + queryParam;
  }

  function createDeleteButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);
  }

  displayNames();
});

