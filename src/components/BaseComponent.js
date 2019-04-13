import React from 'react';
import {is} from 'immutable';

class BaseComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props.state || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps.state || {};

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

            if (!is(thisProps, nextProps)) {
                return true;
            }

            if (!is(thisState, nextState)) {
                return true;
            }
        return false;
    }
}

export default BaseComponent;