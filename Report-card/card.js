document.addEventListener("DOMContentLoaded", function () {
    const calculateTotalButton = document.getElementById("calculate-total");
    const calculatePercentButton = document.getElementById("calculate-percent");
    const findGradeButton = document.getElementById("grade");
    const testMarks = document.querySelectorAll(".test-mark");
    const examMarks = document.querySelectorAll(".exam-mark");
    const totalMarksDisplay = document.getElementById("total-marks");
    const percentageDisplay = document.getElementById("percentage");
    const gradeDisplay = document.getElementById("grades");
    const downLoad = document.querySelectorAll("[data-download]");


    calculateTotalButton.addEventListener("click", function () {
        let totalMarks = 0;
        for (let i = 0; i < testMarks.length; i++) {
            const testMark = parseFloat(testMarks[i].value) || 0;
            const examMark = parseFloat(examMarks[i].value) || 0;
            totalMarks += testMark + examMark;
        }
        totalMarksDisplay.textContent = totalMarks;
    });

    calculatePercentButton.addEventListener("click", function () {
        const totalMarks = parseFloat(totalMarksDisplay.textContent) || 0;
        const percentage = (totalMarks / (1400)) * 100;
        percentageDisplay.textContent = percentage.toFixed(3);
    });

    findGradeButton.addEventListener('click', function () {
        if(parseFloat(totalMarksDisplay.textContent) <= 559) {
            gradeDisplay.textContent = 'Fail';
        } else if(parseFloat(totalMarksDisplay.textContent) >= 560 && parseFloat(totalMarksDisplay.textContent) <= 616) {
            gradeDisplay.textContent = 'E';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 686) {
            gradeDisplay.textContent = 'D';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 826) {
            gradeDisplay.textContent = 'C';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 966) {
            gradeDisplay.textContent = 'B';
        } else if(parseFloat(totalMarksDisplay.textContent) >=980 && parseFloat(totalMarksDisplay.textContent) <= 1260) {
            gradeDisplay.textContent = 'A';
        } else if(parseFloat(totalMarksDisplay.textContent) >= 1261 && parseFloat(totalMarksDisplay.textContent) <=1400){
            gradeDisplay.textContent = 'A+';
        } else {
            gradeDisplay.textContent = 'Nil';
        }
    });

    downLoad.forEach(button => {
        const id = button.dataset.download;
        const toDownlaod = document.getElementById(id);
        const a = document.createElement("a");

        a.href = toDownlaod.id;
        a.download = "";
        a.style.display = "none";

        button.addEventListener('click', () => {
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
   
    const queryParams = new URLSearchParams(location.search);
    const selectedItems = [];

    queryParams.forEach(function (value, key) {
        if (key.startsWith("item")) {
            selectedItems.push(value);
        }
    });

    const nameField = document.getElementById("nameField");
    nameField.textContent = selectedItems.join("<br>");

    const printBtn = document.getElementById('print');

    printBtn.addEventListener('click', function() {
        print();
    })
});
