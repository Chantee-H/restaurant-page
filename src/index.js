import { initialLoad } from "./initial-load-page";
initialLoad();

let h1 = document.createElement('h1');
main.appendChild(h1);
footer.classList.add('h1');
h1.textContent = 'The Ice Cream Palace';

import { menu } from "./menu";
import {contact} from "./contact";

function tabSwitch(){
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', initialLoad);

    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.querySelector('.contact');
    contactBtn.addEventListener('click', contact);
}
tabSwitch();


