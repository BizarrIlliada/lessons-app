import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {
  ElButton,
  ElCard,
} from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/main.scss';

const app = createApp(App);

const elementPlusComponents = [
  ElButton,
  ElCard,
];

elementPlusComponents.forEach(component => {
  app.component(component.name, component);
});

app
  .use(router)
  .mount('#app');
