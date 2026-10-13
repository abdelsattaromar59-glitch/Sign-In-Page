const signinForm = document.getElementById("signin-form");
const signinView = document.getElementById("signin-view");
const menuView = document.getElementById("menu-view");
const signoutButton = document.getElementById("signout-button");

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    signinView.hidden = true;
    menuView.hidden = false;
    document.getElementById("menu-title").focus();
});

signoutButton.addEventListener("click", () => {
    menuView.hidden = true;
    signinView.hidden = false;
    signinForm.reset();
    document.getElementById("email").focus();
});