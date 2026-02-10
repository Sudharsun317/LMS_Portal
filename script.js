/* ========== ALERT SYSTEM ========== */
const showAlert = msg => {
  const alert = document.createElement("div");
  alert.className = "alert";
  alert.textContent = msg;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 3000);
};

/* ========== LOGIN VALIDATION ========== */

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    loginError.innerText = "Please enter username and password";
    loginBox.classList.add("shake");

    setTimeout(() => loginBox.classList.remove("shake"), 300);
    return;
  }

  loginError.innerText = "";
  loginBox.style.display = "none";
  app.style.display = "block";

  showWelcome();
});


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

function showWelcome() {
  const welcome = document.getElementById("welcomeText");
  const hour = new Date().getHours();

  let msg = "Welcome!";
  if (hour < 12) msg = "Good Morning ☀️";
  else if (hour < 18) msg = "Good Afternoon 🌤️";
  else msg = "Good Evening 🌙";

  welcome.innerText = msg + ", Student!";
}
