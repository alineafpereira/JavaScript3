'use strict';

const options = document.getElementById("select");


{
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        cb(null, xhr.response);
      } else {
        cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
      }
    };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    const nullValue = "no information in this topic"; /*created this condition so when this key comes empty, the default quote goes to the table */
    parent.appendChild(elem);
    Object.entries(options).forEach(([key, value]) => {
      if (key === 'text') {
        elem.textContent = value;
      }if (value === null) {
        elem.textContent = nullValue;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function renderRepoDetails(repo, ul) { 
    const menuOption = createAndAppend('option', options, {text: repo.name}) //here the repo's name goes to the list of option inside select tag//
    menuOption.addEventListener('select', () => {
      const table = createAndAppend('table', ul);
      table.className = "lists";
      const line1 = createAndAppend('tr', table)
      line1.className = "line1"
      createAndAppend('td', line1, {text: "Name:"})
      
    }) 
  }
  /*Up here I tried to create a really basic structure to an addEventListener. My intention was have something that,
   when I select the name of the project it goes to my table. After I had this working I would create the two boxes as the examples shows.
  But is not working. I spent lots of time reviewing the content so I could learn better to modify the project but  was not enough.
  I was hoping I could advance so much more than this but here I am stucked again. I'll keep doing and updating the pull request.
  I am so so sorry because I am not evoluting nice.
   */


  function main(url) {}
    fetchJSON(url, (err, repos) => {
      const root = document.getElementById('root');
      if (err) {
        createAndAppend('div', root, {
          text: err.message,
          class: 'alert-error',
        });
        return;
      }
      const ul = createAndAppend('ul', root);
      repos.forEach(repo => renderRepoDetails(repo, ul));
    });
  }
 
  const HYF_REPOS_URL =
    'https://api.github.com/orgs/hackyourfuture/repos?per_page=10';
  window.onload = () => main(HYF_REPOS_URL);
}
