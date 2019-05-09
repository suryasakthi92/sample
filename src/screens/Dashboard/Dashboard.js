import React, {Component} from "react";
import {Image,FlatList, FlatListListView, TouchableOpacity, Dimensions, Alert, BackHandler, ScrollView, Platform, ProgressViewIOS} from "react-native";
import {ActionCreators, bindActionCreators, connect} from "../../common/imports/redux/";
import {CardItem, Card, View, Text, Icon, Badge, Body, Button, Header, Left, Right,Title} from "native-base";
import employee from "../../data/dashboard/employee.json";
import _ from "lodash";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: employee.user
        }
    }

    render() {
        return (
            <View>
                <Header>
                    <Left><Text title style={{fontSize:14, color: '#ffff'}}> Menu</Text></Left>
                    <Body>
                        <Title header>DASHBOARD</Title>
                    </Body>
                    <Right >
                        <Text title style={{fontSize:14, color: '#ffff'}} onPress={() => {this.props.navigation.navigate("Login")}}> LogOut</Text>
                    </Right>
                </Header>
            <FlatList
                data={this.state.user}
                scrollEnabled={true}
                renderItem={({item}) =>
                        <Card style={{flexDirection: "row"}}>
                        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
                                <Icon nsa-icon name="man" style={{color: '#000'}}/>
                            </View>
                            <View style={{flex:3.5}}>
                                <Text title style={{fontSize:14}}> Name: {item.name}</Text>
                                <Text title style={{fontSize:14}}> Phone: {item.phoneNo}</Text>
                                <Text title style={{fontSize:14}}> Age: {item.age}</Text>
                                <Text title style={{fontSize:14}}> Gender: {item.gender}</Text>
                                <Text title style={{fontSize:14}}> Email: {item.email}</Text>
                            </View>
                        </Card>

                }
            />
        </View>
        )
    }
}

function bindAction(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
const mapStateToProps = state => ({
    isLoading: state.common.isLoading,
});

export default connect(mapStateToProps, bindAction)(Home);
