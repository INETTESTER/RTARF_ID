import http from 'k6/http';
import { token } from './env.js';

export function mobile() {
    const url = 'https://uat-rtarf-idconnect.one.th/api/v1/users/mobile';

    const payload = JSON.stringify({
        phone_number: '012345670',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsiY2lkIiwiYmlydGhkYXRlIiwiYWRkcmVzcyIsImdpdmVuX25hbWUiLCJnaXZlbl9uYW1lX2VuIiwiZmFtaWx5X25hbWUiLCJmYW1pbHlfbmFtZV9lbiIsIm1pZGRsZV9uYW1lIiwibWlkZGxlX25hbWVfZW4iLCJ0aXRsZSIsInRpdGxlX2VuIiwiZW1haWwiLCJmdWxsX25hbWUiLCJmdWxsX25hbWVfZW4iLCJkbiIsInVzZXJfcHJpbmNpcGFsX25hbWUiLCJzYW1fYWNjb3VudF9uYW1lIiwicGhvbmVfbnVtYmVycyIsInByb2ZpbGVfcGljdHVyZSIsImRlcGFydG1lbnRfY29kZSIsInBoeXNpY2FsX2RlbGl2ZXJ5X29mZmljZV9uYW1lIiwicG9zaXRpb24iLCJnaXZlbl9uYW1lX3dpdGhfdGl0bGUiLCJwcm9maWxlX3BpY3R1cmVfY3VzdG9tIiwiY24iXSwiYXVkIjoiMDE5ZWY5MWItMzdkMS03MGVhLWEwNmMtZDgyMGZiOTIzZGViIiwiZXhwIjoxNzgyNDQ3MTA5LCJqdGkiOiJmYmUwMDIxODg0MGY0MTEyMDUxNjY0MmExNjRjZWMxNWI2ZGYiLCJpYXQiOjE3ODIzNjA3MDksImlzcyI6ImNlbnRyYWxfYXV0aGVuIiwibmJmIjoxNzgyMzYwNzA5LCJzdWIiOiIxNzgyMzU0MzM0ODUzMjE1In0.yUM7LZarGxZIUNnbFPg_SfWeZyvTtRMGuofU72LCqwL0y-a3u0LsMQN2710LY9CqVaoPQVtytjdMYw57cdLOqt6rOLoONxMBMTftCNJsyqb0hTZC43alqcKM-S0X-GyOsjDV96fFnsgByF8RV2ftpH-GotlA3SSIrhO9U3SXo1j6fA8J-QkSsrr3EeloIYTF8XgKL7r70cecaFQk0sVIzCPLF6NC-SILWvwUxsnTeUBBT6pcotNdjH-nTpHCMdnJfaMMfBwVkWqL4n-YPJJamzvq_8G9j25ZEuZLVr2STXSaY3ELUMgU8rrzc-IgrjzvG_DOmAWs3KBOkSifL5isJAtluyZgGVLtreOLQRVh2kxt3DP8JujB6pr3hMs54GF8TbOtWfyhyAreb7Oy-oLalUZq7i6fFR08WovM8SM4gXQIH2S71-K5ddyOzHt1g_ZwgFbfEPHR8KYiZ6NkKFG2hRcNNFHfHOnE03RDgToXJyX8PtwB23I5KSsFhpFw9KRUyyC5t4SvgifsyHPE5gzHsPR16V4kLfWh6DQ-sDtJnR3yIlbe1RT8AUCJ-9Ha_mvG6qRT9cFt815lfWbhnYmanyS8Ab9qCN_6Di5lVX-HTI0ETpUVhglUxuw7Dr4_OvZvFS2U0RRMtNZoT9NolkG7li0We-sPlMFB6SNyREfWZbY',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}