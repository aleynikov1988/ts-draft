import { genMenu } from './menu';
import { list } from './menu/data';

const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;

navMenu.innerHTML = genMenu(list);
navMenu.addEventListener('click', (e) => {
    const el: HTMLElement = e.target as HTMLElement;

    if (!el.classList.contains('title')) {
        return;
    }

    const parent: HTMLElement = el.parentElement as HTMLElement;
    parent.classList.toggle('menu-open');
});

