const toggleBtn = document.getElementById("toggle-mode");

if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light-mode");
}

toggleBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light-mode");

  const theme = document.body.classList.contains("light-mode") ? "light":"dark";
  localStorage.setItem("theme",theme);
});
