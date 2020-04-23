import axios from "axios";
import MockAdapter from "axios-mock-adapter"


export const loginApi = {
  root: "/api/users/authentication-fake",
};

export function apiPostLogin(payload){

  let url = loginApi.root

  return new Promise((resolve, reject)=>{

    if(url.match(/fake/g)){

      let mock = new MockAdapter(axios, { delayResponse: 1000 });
        mock.onPost(url, payload).replyOnce(200, {
          data: {
            result: true,
          }
        });

        axios
          .post(url, payload )
          .then(response => {
            mock.restore();
            resolve({response: response.data})
          })
          .catch(err => {
            return { error: err.response };
          });
      }else{

        axios
        .post(url, payload)
        .then(response => {
          resolve({ response: response.data })
        })
        .catch(err => {
          // let err =  { error: err.response };
          reject(err.response)
        });


      }

  })

}
