document.addEventListener("DOMContentLoaded", function () {
    const calculateTotalButton = document.getElementById("calculate-total");
    const calculatePercentButton = document.getElementById("calculate-percent");
    const testMarks = document.querySelectorAll(".test-mark");
    const examMarks = document.querySelectorAll(".exam-mark");
    const totalMarksDisplay = document.getElementById("total-marks");
    const percentageDisplay = document.getElementById("percentage");

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
});