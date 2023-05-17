function menu(){
const main = document.getElementById('main');

let menuInfo = document.createElement('div');
let menuhead1 = document.createElement('h3');
let menuItem1 = document.createElement('p');
let menuItem2 = document.createElement('p');
let menuItem3 = document.createElement('p');
let menuItem4 = document.createElement('p');
let menuhead2 = document.createElement('h3');
let menuItem5 = document.createElement('p');
let menuItem6 = document.createElement('p');
let menuItem7 = document.createElement('p');
main.appendChild(menuInfo);
menuInfo.classList.add('menuInfo');
menuInfo.appendChild(menuhead1);
menuInfo.appendChild(menuItem1);
menuInfo.appendChild(menuItem2);
menuInfo.appendChild(menuItem3);
menuInfo.appendChild(menuItem4);
menuInfo.appendChild(menuhead2);
menuInfo.appendChild(menuItem5);
menuInfo.appendChild(menuItem6);
menuInfo.appendChild(menuItem7);
menuhead1.textContent = 'Ice Creams';
menuItem1.textContent = 'Chocolate'
menuItem2.textContent = 'Vanilla'
menuItem3.textContent = 'Strawberry'
menuItem4.textContent = 'Caramel'
menuhead2.textContent = 'Drinks';
menuItem5.textContent = 'Milkshakes';
menuItem6.textContent = 'Hot Drinks';
menuItem7.textContent = 'Cold Drinks';
}