import { Http } from 'helpers/request';
import get from 'lodash/get';
// import size from 'lodash/size';
// import { stringify } from 'query-string';

function getSchoolData() {
    return Http.Request({
        url: "https://jsonblob.com/api/92331f39-4b51-11eb-a643-17139f2d235f",
    });
    // return Http.Request({
    //     url: `${API_V1}school/user/info/`,
    // });
}


module.exports = {
    getSchoolData
}
