import http from 'k6/http';
import { token } from './env.js';

export function userinfo() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/userinfo';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}