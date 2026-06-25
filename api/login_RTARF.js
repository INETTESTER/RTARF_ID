import http from 'k6/http';
import encoding from 'k6/encoding';

export function login_RTARF() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/ldap/login';

    const username = '019ef91b-37d1-70ea-a06c-d820fb923deb';
    const password = '1a8c446bbf9cbd4b9819ed00f45607a9aad1450e';

    const basicAuth =
        'Basic ' +
        encoding.b64encode(`${username}:${password}`);

    const payload = JSON.stringify({
        username: 'uat03@UATRTRAF.local',
        password: 'Abc_123456',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': basicAuth,
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}