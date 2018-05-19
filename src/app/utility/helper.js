import Vue from 'vue'

export function vueGet(url, headers) {

  return Vue.http.get(url, headers).then(response => response.body).catch(error => error)
}
export function vuePost(url, body, headers) {
  return new Promise((resolve, reject) => {
  Vue.http.post(url, body, headers).then((response) => {
    resolve(response.body)
  }).catch(error => {
    reject(error.body)
  });
  });
}
