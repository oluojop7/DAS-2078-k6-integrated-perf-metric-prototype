import http from 'k6/http';
import { check, sleep } from "k6";


const target_vus = 5;

export let options = {
  stages: [
      // Ramp-up from 1 to TARGET_VUS virtual users (VUs) in 5s
      { duration: "5s", target: target_vus },

      // Stay at rest on TARGET_VUS VUs for 10s
      { duration: "10s", target: target_vus },

      // Ramp-down from TARGET_VUS to 0 VUs for 5s
      { duration: "5s", target: 0 }
  ]
};


export default function () {
    // http.get( "<>", {headers: {Accepts: "application/json"}} );
    // Vanila test
    //const response = http.get("https://harmony.sit.earthdata.nasa.gov/C1257437479-LAADSCDUAT/ogc-api-coverages/1.0.0/collections/Cloud_Mask/coverage/rangeset?forceAsync=true&outputcrs=%2Ba%3D6378137.0%20%2Bb%3D6356752.3142451793%20%2Bno_defs%20%2Bproj%3Dlatlong&interpolation=Nearest&scaleSize=0.004505&scaleSize=0.004505&granuleId=G1259231639-LAADSCDUAT", {headers: {Accepts: "application/json"}});

    // NSIDC - nsidc_granules
    //const response = http.get( "https://n5eil02u.ecs.nsidc.org/egi/request?short_name=ATL03&version=006&client=ESI&page_size=30", {headers: {Accepts: "application/json"}} );
    // CMR - cmr_granules
    const response = http.get( "https://cmr.earthdata.nasa.gov:443/search/granules.json?collection_concept_id=C2559919423-NSIDC_ECS&pretty=true", {headers: {Accepts: "application/json"}} );
    check(response, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
  // grp2

};
