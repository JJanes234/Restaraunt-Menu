function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(addMenuItem('Brunch',"Bacon, American , 8oz Ground Beef, Brioche Bun"));
    menu.appendChild(addMenuItem("Classic"," Lettuce, Tomato, Onion, American, Sesame Bun"));
    menu.appendChild(addMenuItem('Philly',"Grilled Onions, Grilled Peppers, Swiss Cheese, 8oz Ribeye"));
    menu.appendChild(addMenuItem("Bacon","Bacon, Provolone, Sesame Bun"));
    menu.appendChild(addMenuItem("Turkey","8oz Ground Turkey, Gouda, Lettuce, Tomato"));
    menu.appendChild(addMenuItem("Spicy","Pepper Jack, Jalapeno, Hot Sauce, 8oz Ground Beef,Peppers, Avacado"));
    menu.appendChild(addMenuItem("Mexican","Queso, Jalapeno,Pepper, Tortilla Chips"));
    menu.appendChild(addMenuItem("Chicken ","Crispy Chicken, Lettuce, Tomato, Spicy Mayo"));
    return menu;
}
function addMenuItem(name,desc){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
        const title = document.createElement('h2');
        title.innerText = name;
        const para = document.createElement('p');
        para.innerText = desc;
        const foodImage = document.createElement('img');
        foodImage.src = `dist/${name.toLowerCase()}.png`;
        foodImage.alt = `${name}`;
        menuItem.appendChild(foodImage);
        menuItem.appendChild(title);
        menuItem.appendChild(para);
        return menuItem;
}
function loadMenu(){
    const main = document.createElement('div');
    main.textContent = "";
    main.appendChild(createMenu());
}
export default loadMenu;