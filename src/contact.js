function createContact(){
    const contact = document.createElement('div');
    contact.addClass('contact');
    
    const phone = document.createElement('p');
    phone.innerText = '📞 123 456 789';
    contact.appendChild(phone);
    const address = document.createElement('p');
    address.innerText = '🏠 Union 01 Morris Ave';
    contact.appendChild(address);
    const map = document.createElement('img');
    map.src = 'location.png';
    contact.appendChild(map);
    return contact;
}
function loadContact(){
    const main = document.createElement('main');
    main.innerText = '';
    main.appendChild(createContact());
}
export default loadContact;