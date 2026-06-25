import http from 'k6/http';
import encoding from 'k6/encoding';
import { token } from './env.js';

export function introspect() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/oauth/introspect';

    const basicUser = '019d7047-5135-7e40-bb44-c7d4d62b7a88';
    const basicPass = 'de66fb0a1245b60dd5e096f3d5ba327db1b0fdc7';

    const payload = `token=${encodeURIComponent('Bearer ' + token)}`;

    const params = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization':
                'Basic ' +
                encoding.b64encode(`${basicUser}:${basicPass}`),
        },
    };

    const response = http.request('GET', url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}