export function contact(){
const main = document.getElementById('main');
main.replaceChildren();

let contactInfo = document.createElement('div');
let contactHead = document.createElement('h3');
let contactpara1 = document.createElement('p');
let contactpara2 = document.createElement('p');
let contactpara3 = document.createElement('p');
main.appendChild(contactInfo);
contactInfo.classList.add('contactInfo');
contactInfo.appendChild(contactHead);
contactInfo.appendChild(contactpara1);
contactInfo.appendChild(contactpara2);
contactInfo.appendChild(contactpara3);
contactHead.textContent = 'Contact Us';
contactpara1.textContent = '011 234 5678';
contactpara2.textContent = 'theicecreampalace@gmail.com';
contactpara3.textContent = '55 Ice Cream Road, Bedfordview, Johannesburg, 2008';
}