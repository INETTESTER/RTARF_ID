import http from 'k6/http';
import { refresh_token, client_id, client_secret } from './env.js';

export function refresh() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/refresh';

    const payload = {
        refresh_token: refresh_token,
        grant_type: 'refresh_token',
        client_id: client_id,
        client_secret: client_secret,
    };

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}