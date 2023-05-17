export function initialLoad(){
const main = document.getElementById('main');
main.replaceChildren();

let headBackground = document.createElement('div');
main.appendChild(headBackground);
headBackground.classList.add('head-background')

let home = document.createElement('button');
let menu = document.createElement('button');
let contact = document.createElement('button');
headBackground.appendChild(home);
headBackground.appendChild(menu);
headBackground.appendChild(contact);
home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';
home.classList.add('home');
menu.classList.add('menu');
contact.classList.add('contact');

let h1 = document.createElement('h1');
headBackground.appendChild(h1);
h1.textContent = 'The Ice Cream Palace'

let homeInfo = document.createElement('div');
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');
main.appendChild(homeInfo);
homeInfo.classList.add('homeInfo');
homeInfo.appendChild(para1);
homeInfo.appendChild(para2);
homeInfo.appendChild(para3);
para1.textContent = 'The best tasting ice cream around.';
para2.textContent = 'Come down and visit us or order online!';
para3.textContent = 'Mon-Fri: 9am-7pm & Sat-Sun: 9am-8pm';

let footer = document.createElement('div');
main.appendChild(footer);
footer.classList.add('footer');
footer.textContent = 'Background image by Sketchepedia on Freepik'
}