function login() {
  const code = document.getElementById("code").value;
  if (code === "TEST") {
    window.location.href = "portal.html";
  } else {
    alert("Invalid Access Code");
  }
}
