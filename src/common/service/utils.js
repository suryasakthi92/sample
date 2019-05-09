import _ from "lodash";
import moment from 'moment';
import {constants} from "../../lib";


var utils = {
    uuid() {
        var chars = '0123456789abcdef'.split('');

        var uuid = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4

        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;

                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }

        return uuid.join('');
    },
    getDateByFormat(date, format) {
        return moment(new Date(String(date))).format(format);
    },

    getFileName(image) {
        const splittedName = image.path.split("/");
        return splittedName[splittedName.length - 1];
    },
}
export default utils