import http from 'k6/http';
import { token } from './env.js';

const profileImage = open('../file/upload.png', 'b');

export function profile() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/users/profile';

    const payload = {
        profile_image: http.file(profileImage, 'upload.png', 'image/png'),
    };

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}