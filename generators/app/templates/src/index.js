import App from './components/App.vue';
import './style/style.scss';
import Vue from 'vue';

window.showBack = dizmo.showBack;
window.showFront = dizmo.showFront;

document.addEventListener('dizmoready', () => {
    window.VUE = new Vue({
        el: '#front', render: h => h(App)
    });
    const done = document.getElementById('done');
    done.onclick = () => dizmo.showFront();
}, {
    once: true
});
