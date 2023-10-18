document.addEventListener("DOMContentLoaded", function () {
    const calculateTotalButton = document.getElementById("calculate-total");
    const calculatePercentButton = document.getElementById("calculate-percent");
    const findGradeButton = document.getElementById("grade");
    const testMarks = document.querySelectorAll(".test-mark");
    const examMarks = document.querySelectorAll(".exam-mark");
    const totalMarksDisplay = document.getElementById("total-marks");
    const percentageDisplay = document.getElementById("percentage");
    const gradeDisplay = document.getElementById("grades")

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
        const percentage = (totalMarks / (1200)) * 100;
        percentageDisplay.textContent = percentage.toFixed(3);
    });

    findGradeButton.addEventListener('click', function () {
        if(parseFloat(percentageDisplay) <= 39) {
            gradeDisplay.textContent = 'Fail';
        } else if(parseFloat(percentage) <= 49) {
            gradeDisplay.textContent = 'D';
        } else if(parseFloat(percentage) <= 59) {
            gradeDisplay.textContent = 'C';
        } else if(parseFloat(percentage) <= 69) {
            gradeDisplay.textContent = 'B';
        } else if(parseFloat(percentage) <= 89) {
            gradeDisplay.textContent = 'A';
        } else {
            gradeDisplay.textContent = 'A+';
        }
    });
});