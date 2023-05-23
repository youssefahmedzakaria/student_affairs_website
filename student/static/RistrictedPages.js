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
    var homeLItem = document.createElement("i");
    homeLItem.setAttribute("class", "material-icons");
    homeLItem.appendChild(document.createTextNode("home"));

    var homeAnchor = document.createElement("a");
    homeAnchor.href = "/home";
    homeAnchor.setAttribute("class", "menu__item");
    homeAnchor.setAttribute("data-tooltip", "Home");
    homeAnchor.id = "home";
    homeAnchor.appendChild(homeLItem);
    nav.appendChild(homeAnchor);

    var dashBoardLItem = document.createElement("i");
    dashBoardLItem.setAttribute("class", "material-icons");
    dashBoardLItem.appendChild(document.createTextNode("dashboard"));

    var dashBoardAnchor = document.createElement("a");
    dashBoardAnchor.href = "/dash_board";
    dashBoardAnchor.setAttribute("class", "menu__item");
    dashBoardAnchor.setAttribute("data-tooltip", "DashBoard");
    dashBoardAnchor.id = "dashboard";
    dashBoardAnchor.appendChild(dashBoardLItem);
    nav.appendChild(dashBoardAnchor);

    var aboutUsLItem = document.createElement("i");
    aboutUsLItem.setAttribute("class", "material-icons");
    aboutUsLItem.appendChild(document.createTextNode("groups"));

    var aboutUsAnchor = document.createElement("a");
    aboutUsAnchor.href = "/about_us";
    aboutUsAnchor.setAttribute("class", "menu__item");
    aboutUsAnchor.setAttribute("data-tooltip", "About Us");
    aboutUsAnchor.id = "about";
    aboutUsAnchor.appendChild(aboutUsLItem);
    nav.appendChild(aboutUsAnchor);

    var logOutLItem = document.createElement("i");
    logOutLItem.setAttribute("class", "material-icons");
    logOutLItem.appendChild(document.createTextNode("logout"));
    logOutLItem.id = "LogOut";

    var logOutAnchor = document.createElement("a");
    logOutAnchor.href = "/home";
    logOutAnchor.setAttribute("class", "menu__item");
    logOutAnchor.setAttribute("data-tooltip", "Log Out");
    logOutAnchor.appendChild(logOutLItem);
    nav.appendChild(logOutAnchor);
}

function hideLoggedOutPages() {
    while (nav.firstChild) {
        nav.firstChild.remove();
    }

    var homeLItem = document.createElement("i");
    homeLItem.setAttribute("class", "material-icons");
    homeLItem.appendChild(document.createTextNode("home"));

    var homeAnchor = document.createElement("a");
    homeAnchor.href = "/home";
    homeAnchor.setAttribute("class", "menu__item");
    homeAnchor.setAttribute("data-tooltip", "Home");
    homeAnchor.id = "home";
    homeAnchor.appendChild(homeLItem);
    nav.appendChild(homeAnchor);

    var aboutUsLItem = document.createElement("i");
    aboutUsLItem.setAttribute("class", "material-icons");
    aboutUsLItem.appendChild(document.createTextNode("groups"));
    

    var aboutUsAnchor = document.createElement("a");
    aboutUsAnchor.href = "/about_us";
    aboutUsAnchor.setAttribute("class", "menu__item");
    aboutUsAnchor.setAttribute("data-tooltip", "About Us");
    aboutUsAnchor.id = "about";
    aboutUsAnchor.appendChild(aboutUsLItem);
    nav.appendChild(aboutUsAnchor);

    var loginLItem = document.createElement("i");
    loginLItem.setAttribute("class", "material-icons");
    loginLItem.appendChild(document.createTextNode("login"));

    var loginAnchor = document.createElement("a");
    loginAnchor.href = "/login";
    loginAnchor.setAttribute("class", "menu__item");
    loginAnchor.setAttribute("data-tooltip", "Log In");
    loginAnchor.id = "login";
    loginAnchor.appendChild(loginLItem);
    nav.appendChild(loginAnchor);
}
