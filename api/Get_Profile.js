import http from 'k6/http';
import { client_id, client_secret } from './env.js';

export function Get_Profile() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/users/1782354334853215?include=profile_picture';

    const params = {
        headers: {
            'Client-Id': client_id,
            'Client-Secret': client_secret,
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}