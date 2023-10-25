const db = new Dexie('StudentDatabase');
db.version(1).stores({
  students: '++id, name',
});

function addStudentToDatabase(name) {
  return db.students.add({ name });
}

document.addEventListener("DOMContentLoaded", function () {
  const addInput = document.querySelector('#addInput');
  const addBtn = document.querySelector('#addBtn');
  const divList = document.querySelector('.listHolder');
  const ul = divList.querySelector('ul');

  addBtn.addEventListener("click", function () {
    if (addInput.value === '') {
      alert('Enter a student name, please!');
    } else {
      const name = addInput.value;

      addStudentToDatabase(name).then(() => {
        const li = document.createElement("li");
        const ul = divList.querySelector('ul');
        const listNameSpan = document.createElement('span');
        listNameSpan.className = 'listName';
        listNameSpan.textContent = name;
        addInput.value = '';
        li.appendChild(listNameSpan);
        ul.appendChild(li);
      });
    }
  });


});
