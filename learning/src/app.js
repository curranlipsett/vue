import { secretButton, secretParagraph} from './dom-loader';

import Vue from '../node_modules/vue/dist/vue.min.js';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
        app.updateMessage(true);
    } else {
        secretButton.textContent = 'Show the Secret';
        app.updateMessage();
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}

var app = new Vue({
    el: '#myApp',
    data: {
        message: "Box is hidden"
    },
    methods: {
        updateMessage: function(what) {
            if (what) {
                this.message = "Box ain't hidden";
            }
            else {
                this.message = "Box is hidden";
            }
            
        }
    }
})
