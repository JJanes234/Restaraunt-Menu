import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const welcome = document.createElement('h1');
    welcome.innerText = "JJ's Burger Joint";
    welcome.classList.add("restaraunt-name");
    header.append(welcome);
    header.appendChild(createNav());
    return header;
}
function createNav(){
    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    homeButton.innerText = "Home";
    homeButton.classList.add('button-nav');
    homeButton.addEventListener("click",(e) =>{
        if(e.target.classList.contains("active"))return;
        setActive(homeButton);
        loadHome();
    });
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.innerText = "Menu";
    menuButton.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setActive(menuButton);
        loadMenu();
    });
    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.innerText = "Contact";
    contactButton.addEventListener("click",(e) =>{
        if(e.target.classList.contains("active"))return;
        setActive(contactButton);
        loadContact();
    })
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}
function setActive(button){
    const buttons = querySelectorAll('button-nav');
    buttons.forEach((button)=>{
        if(button!==this){
            button.classList.remove('active');
        }
    });
    button.classList.add('active');

}
function main(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id","main");
    return main;
}
function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const paras = document.createElement('p');
    paras.innerText ='Copyright © 2022 janesj';
    footer.appendChild(paras);
    return footer;   
}
function initWebsite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader);
    content.appendChild(createNav);
    content.appendChild(createFooter);
    setActive(document.querySelector('.button-nav'));

    loadHome();
}
export default initWebsite;