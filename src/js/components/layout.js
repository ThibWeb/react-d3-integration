'use strict';

import React from 'react';

export default React.createClass({
    displayName: 'Layout',

    render() {

        return (
            <html>
            <head>
                <meta charSet='utf-8'/>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>

                <title>react-d3-integration – An example integration between React and D3</title>

                <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'/>
                <link rel='stylesheet' type='text/css' href='/styles.css'/>
            </head>
            <body>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            {this.props.children}
                        </div>
                    </div>
                </div>

                <script src='/bundle.js'></script>
            </body>
            </html>
        );
    },

    // Grabs the current rate from the slider, then updates the React state.
    changeRate() {
        const rateSlider = React.findDOMNode(this.refs.rate);
        const rate = parseInt(rateSlider.value, 10);

        this.setState({
            rate: rate,
            forecast: this.computeStubData(rate)
        });
    },

    // Does cool financial calculations for us.
    computeStubData(rate) {
        const futureValue = r => 5000 * Math.pow(1 + (r / 100 / 1), 10);

        return {
            money: futureValue(rate),
            moneyPotential: futureValue(rate + 2),
            moneyGoal: 30000
        };
    }
});
