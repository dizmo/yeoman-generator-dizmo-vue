import App from './components/App.vue';
import Vue from 'vue';

window.showBack = dizmo.showBack;
window.showFront = dizmo.showFront;

document.addEventListener('dizmoready', () => {
    window.VUE = new Vue({
        el: '#front', render: h => h(App)
    });
    document.getElementById('done').onclick = () => {
        dizmo.showFront();
    };
}, {
    once: true
});
