function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    const greeting = document.createElement('h2')
    greeting.innerText = 'Who we Are';
    home.appendChild(greeting);
    home.appendChild(makePara("Using fresh ingredients to serve you delicious    burgers cooked to your preference"));
    
    const homePic = document.createElement('img');
    homePic.classList.add('home_img');
    homePic.src = "2.jpg";
    home.appendChild(homePic);

    home.appendChild(makePara("Sunday: 8am - 8pm"));
    home.appendChild(makePara("Monday:8am - 9pm"));
    home.appendChild(makePara("Tuesday:8am - 9pm"));
    home.appendChild(makePara("Wednesday 8am - 9pm"));
    home.appendChild(makePara("Thursday:8am - 9pm"));
    home.appendChild(makePara("Friday:8am - 10pm"));
    home.appendChild(makePara("Saturday:8am - 10pm"));
    return home;
}
function makePara(text){
    const para = document.createElement('p');
    para.innerText = text;
    return para;
}
function loadHome(){
    const main = document.getElementById("main");
    main.textContent ="";
    main.appendChild(createHome());
}
export default loadHome;
