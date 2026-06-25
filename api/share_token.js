import http from 'k6/http';
import { token } from './env.js';

export function share_token() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/share-token';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.post(url, null, params);

    console.log('Response body:', response.body);

    return response;
}