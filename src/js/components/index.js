'use strict';

import React from 'react';
import Layout from './layout';
import App from './app';

export default React.createClass({
    displayName: 'Index',

    render() {
        return (
            <Layout>
                <App/>
            </Layout>
        );
    }
});
