document.addEventListener("DOMContentLoaded", function () {
    const calculateTotalButton = document.getElementById("calculate-total");
    const calculatePercentButton = document.getElementById("calculate-percent");
    const findGradeButton = document.getElementById("grade");
    const testMarks = document.querySelectorAll(".test-mark");
    const examMarks = document.querySelectorAll(".exam-mark");
    const totalMarksDisplay = document.getElementById("total-marks");
    const percentageDisplay = document.getElementById("percentage");
    const gradeDisplay = document.getElementById("grades");
    const downLoad = document.getElementById("dd");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");


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
        if(parseFloat(totalMarksDisplay.textContent) <= 467) {
            gradeDisplay.textContent = 'Fail';
        } else if(parseFloat(totalMarksDisplay.textContent) >= 468 && parseFloat(totalMarksDisplay.textContent) <= 540) {
            gradeDisplay.textContent = 'E';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 568) {
            gradeDisplay.textContent = 'D';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 719) {
            gradeDisplay.textContent = 'C';
        } else if(parseFloat(totalMarksDisplay.textContent) <= 839) {
            gradeDisplay.textContent = 'B';
        } else if(parseFloat(totalMarksDisplay.textContent) >=840 && parseFloat(totalMarksDisplay.textContent) <= 1080) {
            gradeDisplay.textContent = 'A';
        } else if(parseFloat(totalMarksDisplay.textContent) >= 1081 && parseFloat(totalMarksDisplay.textContent) <=1200){
            gradeDisplay.textContent = 'A+';
        } else {
            gradeDisplay.textContent = 'Nil';
        }
    });

    downLoad.addEventListener('click', function () {
       const capture = document.body;
       
       canvas.clientWidth = capture.scrollWidth;
       canvas.clientHeight = capture.scrollHeight;

       ctx.drawWindow(window, 0, 0, canvas.width, canvas.height, "rgb(255, 255, 255)");
    
        const dataURL = canvas.toDataURL("image/png");

        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "page_content.png";
        a.style.display = "none";
        document.body.appendChild(a);

        a.onclick(capture);
    });
});
