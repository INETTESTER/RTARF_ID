import http from 'k6/http';
import encoding from 'k6/encoding';
import { client_id, client_secret } from './env.js';

export function public_key() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/public-key';

    const params = {
        headers: {
            'Authorization':
                'Basic ' +
                encoding.b64encode(`${client_id}:${client_secret}`),
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}