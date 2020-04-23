import axios from "axios";
import MockAdapter from "axios-mock-adapter"


export const homepageApi = {
  root: "/home",
};

export function apiGetHomepage(){
  let baseUri = 'https://private-4639ce-ecommerce56.apiary-mock.com'
  let url = homepageApi.root

  const customAxios = axios.create({
    baseURL: baseUri,
  })

  return new Promise((resolve, reject)=>{

    if(url.match(/fake/g)){

      let mock = new MockAdapter(axios, { delayResponse: 1000 });
        mock.onPost(url).replyOnce(200, {
          data: {
            result: true,
          }
        });

        axios
          .get(url )
          .then(response => {
            mock.restore();
            resolve({response: response.data})
          })
          .catch(err => {
            return { error: err.response };
          });
      }else{

        customAxios
        .get(url, {
          page: 1
        })
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
