//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { login_RTARF } from '../api/login_RTARF.js';
import { userinfo } from '../api/userinfo.js';
import { refresh } from '../api/refresh.js';
import { logout } from '../api/logout.js';
import { public_key } from '../api/public_key.js';
import { introspect } from '../api/introspect.js';
import { mobile } from '../api/mobile.js';
import { share_token } from '../api/share_token.js';
import { Get_Profile } from '../api/Get_Profile.js';
import { profile } from '../api/profile.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  response = login_RTARF()
  error_check(response);
  // if (!response || response.error_code || (response.status !== 200 && response.status !== 201 && response.status !== 204)) {
  //   console.log(response.status+" : "+response.body);
  // }
  if (response.status === 401) {
    console.log(response.status + ' : ' + response.body);
  }
  //response = userinfo()
  //response = refresh()
  //response = logout()
  //response = public_key()
  //response = introspect()
  //response = mobile()
  //response = share_token()
  //response = Get_Profile()
  //response = profile()


  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };