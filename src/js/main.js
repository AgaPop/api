"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
const list = document.querySelector('.list--js');

fetch('https://api.github.com/users/agapop/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    const repos = resp;
    for (const repo of repos) {
      // wersja podstawowoa:
      // list.innerHTML += `<li><a href=" ${repo.html_url}">${repo.name}</a> </li>`;

      // wersja z destrukturyzacja:
      const {html_url, name} = repo;     
      list.innerHTML += `<li> <a href="${html_url}"> ${name}</a> </li>`;
    }
  })
  .catch(err => {
    console.log(err);
  })


console.log(`Hello world!`);


