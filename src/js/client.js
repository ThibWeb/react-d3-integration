'use strict';

import Client from 'react-engine/lib/client';

import './components/index.js';

// boot options
const options = {
    viewResolver: viewName => require('./views/' + viewName)
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    Client.boot(options);
});
