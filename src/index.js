import { initialLoad } from "./initial-load-page";
initialLoad();

import { menu } from "./menu";
import {contact} from "./contact";

const headBackground = document.getElementById('header');
let h1 = document.createElement('h1');
headBackground.appendChild(h1);
h1.textContent = 'The Ice Cream Palace'

function tabSwitch(){
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', initialLoad);

    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.querySelector('.contact');
    contactBtn.addEventListener('click', contact);
}
tabSwitch();


