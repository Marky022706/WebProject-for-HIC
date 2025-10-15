// Toggle mobile nav
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Logout Modal
const logoutBtn = document.getElementById("logoutBtn");
const logoutModal = document.getElementById("logoutModal");
const logoutSuccessModal = document.getElementById("logoutSuccessModal");
const cancelLogout = document.getElementById("cancelLogout");
const confirmLogout = document.getElementById("confirmLogout");
const okLogout = document.getElementById("okLogout");

logoutBtn.addEventListener("click", () => {
    logoutModal.style.display = "flex";
});

cancelLogout.addEventListener("click", () => {
    logoutModal.style.display = "none";
});

confirmLogout.addEventListener("click", () => {
    logoutModal.style.display = "none";
    logoutSuccessModal.style.display = "flex";
});

okLogout.addEventListener("click", () => {
    logoutSuccessModal.style.display = "none";
    alert("You have logged out.");
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === logoutModal) logoutModal.style.display = "none";
    if (e.target === logoutSuccessModal) logoutSuccessModal.style.display = "none";
});
