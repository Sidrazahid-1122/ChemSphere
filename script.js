function uploadMCQ() {
  let q = document.getElementById("question").value;
  let a = document.getElementById("opt1").value;
  let b = document.getElementById("opt2").value;
  let c = document.getElementById("opt3").value;
  let d = document.getElementById("opt4").value;
  let ans = document.getElementById("answer").value;

  if(q === "" || a === "" || b === "" || c === "" || d === "" || ans === "") {
    alert("Please fill all fields");
    return;
  }

  let mcqs = JSON.parse(localStorage.getItem("mcqs")) || [];
  mcqs.push({ q, a, b, c, d, ans });

  localStorage.setItem("mcqs", JSON.stringify(mcqs));
  alert("MCQ Uploaded Successfully ✅");

  document.getElementById("question").value = "";
  document.getElementById("opt1").value = "";
  document.getElementById("opt2").value = "";
  document.getElementById("opt3").value = "";
  document.getElementById("opt4").value = "";
  document.getElementById("answer").value = "";
}