import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ConfigurationsComponent extends Component {
    static propTypes = {
        Configurations: PropTypes.array
    };
    render() {
        return (
            <div>
                Configurations
            </div>
        );
    }
}