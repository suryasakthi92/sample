/**
 * Created by senthil on 11/12/17.
 */
import _ from 'lodash'
import {store} from '../boot/setup'
class Session {
    Session() {
        store.subscribe(this.getAuthState)
        store.subscribe(this.getPushState)
    }

    static state() {
        return store.getState()
    }

    static getAuthState() {
        return this.state().authenticationReducer
    }

    static getPushState() {
        return this.state().pushReducer
    }

    static getSessionId() {
        var userDetails = this.getUserDetails()
        return userDetails.session_id
    }

    static getUserDetails() {
        return this.getAuthState().userDetails
    }

    static getSessionUsers() {
        return this.getAuthState().session || []
    }

    static getESUserDetails() {
        return this.getAuthState().esUserDetails
    }

    static getClassDetails() {
        var user = this.getESUserDetails();
        return (user.classes !== undefined && user.classes.length) ? user.classes[0] : {}
    }

    static getClassId() {
        var userClass = this.getClassDetails();
        return userClass ? userClass.class_id ? userClass.class_id : null : null
    }

    static getSectionId() {
        var userClass = this.getClassDetails();
        return userClass ? userClass.section_id ? userClass.section_id : null : null
    }

    static getUserName() {
        var user = this.getESUserDetails();
        return user.userName ? user.userName : null
    }

    static getUserType() {
        var user = this.getESUserDetails();
        return user.userType ? user.userType : null
    }

    static hasSiblings() {
        return this.getAuthState().isSiblings
    }

    static getPushToken() {
        //alert(this.getPushState().pushToken+' => session!')
        return this.getPushState().pushToken
    }

    static isThisUserLoggedIn(username) {
        return _.isEqual(this.getUserName(), username);
    }

    static isTokenUpdated() {
        return this.getPushState().isTokenUpdated
    }
}
export default Session