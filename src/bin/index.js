import Home from '../page/index.vue'
import globalCSS from '../main.css'
import { createApp } from 'vue'
class TmpScipt {
    constructor() {
        this.init()
    }

    init() {
        this.createShadowDom()
    }

    createShadowDom() {
        const rootDiv = document.createElement("div");
        document.documentElement.appendChild(rootDiv);
        const shadowDOM = rootDiv.attachShadow({ mode: 'open' });
        createApp(Home).mount(shadowDOM);
        rootDiv.shadowRoot.appendChild(document.createElement('style'))
        shadowDOM.querySelector('style').innerHTML = globalCSS;
    }
}

export default TmpScipt