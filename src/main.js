import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/Common/common.js";
import router from '@/router';

const app = createApp(App);
app.use(router).mount('#app');

//глобальная регистрация компонентов
components.forEach(element => {
    app.component(element.name, element)
});

//для анимации шапки при скролле
const header = document.getElementsByClassName("header_body");
const headerLinks = document.getElementsByClassName("header_menu-item-link");
const headerLogo = document.getElementsByClassName("header_logo");

export const body = document.getElementsByTagName("body");


window.addEventListener("scroll", ()=> {
    if(window.scrollY >= 100) {
        header[0].classList.add('scroll');
        headerLogo[0].classList.add('scroll');
        for (let item of headerLinks) {
            item.classList.add('scroll');
        }
    }else{
        header[0].classList.remove('scroll');
        headerLogo[0].classList.remove('scroll');
        for (let item of headerLinks) {
            item.classList.remove('scroll');
        }
    }
})