import { initialLoad } from "./initial-load-page";
initialLoad();

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


