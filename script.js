function answerYes() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
}

function answerNo() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'block';
}

function secondYes() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
}

function secondNo() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'block';
}

function finalAnswer() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
}

function openNewPage() {
    window.location.href = "finalPage.html"; // Certifique-se de criar esta página
}
