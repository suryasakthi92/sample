// @flow
import React, {Component} from "react";
import {Dimensions, Platform, StatusBar, Image, ScrollView} from "react-native";
import {Button, Content, Icon, Input, Item, Right, Text, Toast, View,Left} from "native-base";
import {Field, formValueSelector, reduxForm} from "redux-form";
import * as validate from '../../common/service/validation'
import styles from "./styles";
import * as common from '../../actions/common'
import * as types from '../../lib/types'
import {ActionCreators, bindActionCreators, connect} from "../../common/imports/redux/";
import {constants, URLs, Session} from "../../lib";
import dashboard from "../../data/dashboard/dashboard.json";

const required = validate.required

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
                show: true,
            disabled: false
        };
    }

    onLayout(e) {
        const width = Dimensions.get('window').width;
        if (width < 430) {
            this.setState({show: true})
        } else {
            this.setState({show: false})
        }
    }

    textInput: Any;

    renderInput({input, label, type, meta: {touched, error, warning}}) {
        return (
            <View>
                <Item error={error && touched} style={styles.inputGrp}>
                    <Icon
                        active
                        name={input.name === "username" ? "person" : "unlock"}
                        style={{color: "#fff", marginLeft: 15, marginTop: 13}}
                    />
                    <Input
                        ref={c => (this.textInput = c)}
                        placeholderTextColor="#FFF"
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize='none'
                        placeholder={input.name === "username" ? "Username" : "Password"}
                        secureTextEntry={input.name === "password" ? true : false}
                        {...input}
                    />
                    {touched && error
                        ? <Icon
                            active
                            style={styles.formErrorIcon}
                            name="close"
                        />
                        : <Text />}
                </Item>
                {touched && error
                    ? <Text style={styles.formErrorText1}>
                        {error}
                    </Text>
                    : <Text style={styles.formErrorText2}>error here</Text>}
            </View>
        );
    }

    login(username, password) {
        if (username !== undefined) {
            if (password !== undefined) {
                if (username === dashboard.username && password === dashboard.password) {
                    this.props.navigation.navigate("Home");
                    common.showToast(types.TOAST_SUCCESS, "Login Successfully")
                } else
                    common.showToast(types.TOAST_ERROR, "Invalid Username or Password")
            } else
                common.showToast(types.TOAST_ERROR, "Please Enter Password")
        } else
            common.showToast(types.TOAST_ERROR, "Please Enter Username")
    };

    render() {
        const deviceHeight = Dimensions.get("window").height;
        return (
            <View style={styles.container}>
                <View style={[styles.form, {marginTop: 20}]} onLayout={this.onLayout.bind(this)}>
                    <Field
                        name="username"
                        component={this.renderInput}
                        type="email"
                        validate={[required]}
                        onChange={() => {
                        if (this.state.disabled) {
                        this.setState({disabled: false})}}}/>
                    <Field
                        name="password"
                        component={this.renderInput}
                        type="password"
                        validate={[required]}
                        onChange={() => {
                        if (this.state.disabled) {
                        this.setState({disabled: false})
                        }
                        }}/>
                    <Button
                        white
                        bordered
                        block
                        large
                        disabled={this.state.disabled}
                        style={[styles.loginBtn]}
                        onPress={() => {
                        this.login(this.props.username, this.props.password)
                        }}>
                        <Text
                            style={Platform.OS === "android"
                                   ? {fontSize: 16, textAlign: "center", top: -5}
                                   : {fontSize: 18, fontWeight: "900"}}>Login</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
const Login = reduxForm({
    form: "login"
})(LoginForm);

function bindAction(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
const selector = formValueSelector('login');

function mapStateToProps(state) {
    return {
        username: selector(state, 'username'),
        password: selector(state, 'password'),
    }
}

export default connect(mapStateToProps, bindAction)(Login);
