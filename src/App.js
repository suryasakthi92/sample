// @flow
import React from "react";
import {BackHandler} from "react-native"
import {addNavigationHelpers} from "react-navigation";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Root} from "native-base";

//This is used in order to see requests on the Chrome DevTools
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

import {AppNavigator} from './routing/';

class AppWithNavigationState extends React.Component {


    render() {
        return (
            <Root>
                <AppNavigator
                    navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>
            </Root>);
    }

}

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
    isLoading: state.common.isLoading,
    blockUI: state.common.blockUI,
});

export default connect(mapStateToProps)(AppWithNavigationState);
