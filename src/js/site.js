'use strict';

import Client from 'react-engine/lib/client';

import './components/index.js';

const options = {
    viewResolver: viewName => require('./components/' + viewName)
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
});
