let mcqs = JSON.parse(localStorage.getItem("mcqs")) || [];
let current = 0;

function showMCQ() {
  if(current >= mcqs.length) {
    document.getElementById("mcqCard").innerHTML = "<h2>All MCQs Completed ✅</h2>";
    return;
  }

  let m = mcqs[current];
  document.getElementById("question").innerText = `Q${current+1}: ${m.q}`;
  let optionButtons = document.querySelectorAll(".optionBtn");

  optionButtons[0].innerText = m.a;
  optionButtons[1].innerText = m.b;
  optionButtons[2].innerText = m.c;
  optionButtons[3].innerText = m.d;

  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(btn) {
  let m = mcqs[current];
  if(btn.innerText === m.ans) {
    document.getElementById("result").innerText = "Correct ✅";
    document.getElementById("result").style.color = "lime";
  } else {
    document.getElementById("result").innerText = `Wrong ❌ | Correct Answer: ${m.ans}`;
    document.getElementById("result").style.color = "red";
  }

  document.getElementById("nextBtn").style.display = "block";
}

function nextMCQ() {
  current++;
  showMCQ();
}

showMCQ();