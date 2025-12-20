/* LOGIN */
function login() {
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if (user === "admine" && pass === "12345") {
    localStorage.setItem("loggedIn", "true");
    window.location.href= "index.html";
}else {
    document.getElementById("error").innerText = "Invalid login details";
}
}

/* CHECK LOGIN */
function checklogin() {
    if (loginStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
} else {        
    loadPage("home");
}
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

/* DYNAMIC CONTENT */
let content = document.getElementById("content");

function loadPage(page) {
    removeActive();
    document.getElementById(page).classList.add("active")

    if(page === "home") {
        changeBackground("home-bg");
        content.innerHTML = `                       
        <h2>Home</h2>
        <img src="c:\Users\ LAB\Downloads\play school HTML.jpg" class="section img"></img>
        <p>Welcome to thewebsite.</p>
       ` ;
    }

    if (page === "about") {
        changeBackground("about-bg");
        content.innerHTML =`
        <h2>About</h2>
        <img src=c:"c:\Users\ LAB\Downloads\about.jpg" class="section img">
        <p>Fronted project using HTML, CSS, and JavaScript.</p>
        `;
    }

    if (page === "services") {
        changeBackground("services-bg");
        content.innerHTML =`
        <h2>services</h2>
        <img src="c:\Users\ LAB\Downloads\services.jpg" class="section img">
             <li>Web Design</li>
             <li>Fronted Development</li>
             <li>JavaScript Projects</li>
             </ul>
             `;
    }
    if (page === "contact") {
        changeBackground("contact-bg");
        content.innerHTML =`
        <h2>Contact</h2>
        <img src="c:\Users\ LAB\Downloads\contact.jpg" class="section img">
        input type="text" placeholder="Name"><br><br>
        <input type="email" placeholder=Email"><br><br>
        <button>Submit<button>
        `;
    }
}

function removeActive() {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
}

function changeBackground(className) {
    document.body.className = className;
}
