import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import { createI18n } from "vue-i18n";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import en from "../src/components/local/en.json";
import ar from "../src/components/local/ar.json";
// إعداد i18n
const i18n = createI18n({
  locale: "en", // اللغة الافتراضية
  messages: {
      en,
      ar,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(router);
app.use(i18n);


app.mount("#app");
