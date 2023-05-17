import { initialLoad } from "./initial-load-page";
initialLoad();

import { menu } from "./menu";

import {contact} from "./contact"

function tabSwitch(){
    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', initialLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);
}