import http from 'k6/http';
import { token } from './env.js';

export function logout() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/logout';

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}