import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiBriefcaseFill } from "oh-vue-icons/icons";
import { BiPersonCircle } from "oh-vue-icons/icons";
import { GiBuyCard } from "oh-vue-icons/icons";
import { FaUsers } from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

addIcons(BiPersonCircle, GiBuyCard, BiBriefcaseFill, FaUsers);
const pinia = createPinia();
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).use(pinia).mount("#app");
