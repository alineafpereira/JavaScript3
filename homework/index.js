'use strict';

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
 
  /*I didn't get any better way to insert the data inside a table, so that was I could do for now. First I tried to put a list inside of a div,
  but when I was setting the responsive on CSS file, I noticed that div wasn't giving me the result I wanted for smaller screens. */
  function renderRepoDetails(repo, ul) {
    const table = createAndAppend('table', ul);
    table.className = "lists";
    const line1 = createAndAppend('tr', table)
    line1.className = "line1"
    createAndAppend('td', line1, {text: "Name:"})
    createAndAppend('td', line1, {text: repo.name});
    const line2 = createAndAppend('tr', table)
    line2.className = "line2"
    createAndAppend('td', line2, {text: "Description:"})
    createAndAppend('td', line2, { text: repo.description})
    const line3 = createAndAppend('tr', table)
    line3.className = "line3"
    createAndAppend('td', line3, {text: "Forks:"})
    createAndAppend('td', line3, { text: repo.forks_count});
    const line4 = createAndAppend('tr', table)
    line4.className = "line4"
    createAndAppend('td', line4, {text: "Last Update:"})
    createAndAppend('td', line4, { text: repo.updated_at});
  }
   
  function main(url) {
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
