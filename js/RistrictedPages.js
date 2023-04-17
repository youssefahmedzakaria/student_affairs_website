const nav = document.getElementById("nav");

var session = sessionStorage.getItem("LoggedInAdmin");

if (session === "true") {
    displayLoggedInPages();
}
else {
    hideLoggedOutPages();
}

nav.addEventListener("click", function (event) {
    if (event.target.id === "LogOut") {
        logOut();
    }
});

function logOut() {
    console.log('Log Out clicked');
    alert("Log out successful");
    sessionStorage.setItem("LoggedInAdmin", "false");
    hideLoggedOutPages();
}

function displayLoggedInPages() {
    while (nav.firstChild) {
        nav.firstChild.remove();
    }
    var homeLItem = document.createElement("li");
    homeLItem.appendChild(document.createTextNode("Home"));

    var homeAnchor = document.createElement("a");
    homeAnchor.href = "home.html";
    homeAnchor.id = "home";
    homeAnchor.appendChild(homeLItem);
    nav.appendChild(homeAnchor);

    var dashBoardLItem = document.createElement("li");
    dashBoardLItem.appendChild(document.createTextNode("Dash Board"));

    var dashBoardAnchor = document.createElement("a");
    dashBoardAnchor.href = "DashBoard.html";
    dashBoardAnchor.id = "dashboard";
    dashBoardAnchor.appendChild(dashBoardLItem);
    nav.appendChild(dashBoardAnchor);

    var aboutUsLItem = document.createElement("li");
    aboutUsLItem.appendChild(document.createTextNode("About Us"));

    var aboutUsAnchor = document.createElement("a");
    aboutUsAnchor.href = "AboutUs.html";
    aboutUsAnchor.id = "about";
    aboutUsAnchor.appendChild(aboutUsLItem);
    nav.appendChild(aboutUsAnchor);

    var logOutLItem = document.createElement("li");
    logOutLItem.appendChild(document.createTextNode("Log Out"));
    logOutLItem.id = "LogOut";

    var logOutAnchor = document.createElement("a");
    logOutAnchor.href = "home.html";
    logOutAnchor.appendChild(logOutLItem);
    nav.appendChild(logOutAnchor);
}

function hideLoggedOutPages() {
    while (nav.firstChild) {
        nav.firstChild.remove();
    }

    var homeLItem = document.createElement("li");
    homeLItem.appendChild(document.createTextNode("Home"));

    var homeAnchor = document.createElement("a");
    homeAnchor.href = "home.html";
    homeAnchor.id = "home";
    homeAnchor.appendChild(homeLItem);
    nav.appendChild(homeAnchor);

    var aboutUsLItem = document.createElement("li");
    aboutUsLItem.appendChild(document.createTextNode("About Us"));

    var aboutUsAnchor = document.createElement("a");
    aboutUsAnchor.href = "AboutUs.html";
    aboutUsAnchor.id = "about";
    aboutUsAnchor.appendChild(aboutUsLItem);
    nav.appendChild(aboutUsAnchor);

    var loginLItem = document.createElement("li");
    loginLItem.appendChild(document.createTextNode("Log In"));

    var loginAnchor = document.createElement("a");
    loginAnchor.href = "Login.html";
    loginAnchor.id = "login";
    loginAnchor.appendChild(loginLItem);
    nav.appendChild(loginAnchor);
}
