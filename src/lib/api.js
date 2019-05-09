import * as common from "../actions/common";
import {Session, URLs} from './'
import RNFetchBlob from 'react-native-fetch-blob'
import {constants} from "../lib";

class Api {
    static headersWithOutSession() {
        return {
            'Content-Type': 'application/json',
        }
    }

    static headers() {
        return {
            ...this.headersWithOutSession(),
        }
    }

    static headersWithId(id){
        return{
            ...this.headers(),
            'id':id
        }
    }

    static get(route, headers) {
        return this.xhr(route, null, 'GET', headers ? headers : {});
    }

    static getData(route, headers) {
        return this.xhrData(route, null, 'GET', headers ? headers : {});
    }

    static put(route, params, id) {
        const headers = id === undefined ? this.headers() : this.headersWithId(id);
        return this.xhr(route, params, 'PUT', headers);
    }

    static putWithOutSession(route, params) {
        return this.xhr(route, params, 'PUT', this.headersWithOutSession())
    }

    static post(route, params, id) {
        return this.xhr(route, params, 'POST', this.headers())
    }

    static postWithOutSession(route, params) {
        return this.xhr(route, params, 'POST', this.headersWithOutSession())
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE', this.headers())
    }

    static xhr(url, params, verb, headers) {
        let options = Object.assign({method: verb, credentials:'include'}, params ? {body: JSON.stringify(params)} : null);
        options.headers = headers
        return fetch(url, options)
            .then((response) =>  response.json())
            .then((data) => {
                return data;
            }).catch((error) => {
                console.log("err", error);
                throw error
            });
    }

    static xhrData(url, params, verb, headers) {
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = headers
        return fetch(url, options)
            .then((response) =>  response.json())
            .then((data) => {
                return data;
            }).catch((error) => {
                console.log("err", error);
                throw error
            });
    }


    static upload(data, id, uploadId, uploadUrl) {
        const url = uploadUrl !== undefined ? uploadUrl : URLs.UPLOAD_URL;
        return RNFetchBlob.fetch('POST', url, {
            Authorization: "Bearer access-token",
            'Content-Type': 'multipart/form-data',
            'id': id,
            'session-id': Session.getSessionId(),
            'uploadid': uploadId === undefined ? Session.getUserName() : uploadId
        }, data).then((res) => {
                return res;
            }).catch((error) => {
                throw error
            });

    }
}
export default Api
