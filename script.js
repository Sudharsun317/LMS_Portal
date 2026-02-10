/* ========== ALERT SYSTEM ========== */
const showAlert = msg => {
  const alert = document.createElement("div");
  alert.className = "alert";
  alert.textContent = msg;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
};

/* ========== LOGIN VALIDATION ========== */
loginBtn.onclick = () => {
  const u = username.value.trim();
  const p = password.value.trim();

  if (!u || !p) {
    loginError.textContent = "All fields are required";
    return;
  }

  showAlert("Login Successful");
  loginBox.style.display = "none";
  app.style.display = "block";
};


/* ========== NAV ACTIVE ========== */
document.querySelectorAll(".nav").forEach(link => {
  link.onclick = () => {
    document.querySelectorAll(".nav").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  };
});