'use strict';

{
  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    const nullValue = "no information in this topic"; 
    parent.appendChild(elem);
    Object.entries(options).forEach(([key, value]) => {
      if (key === 'text') {
        elem.textContent = value;
      }if (key === null) {
        elem.textContent = nullValue;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }
  const options = document.getElementById('select');
  const divSelect = document.getElementById('divSelect');
  const contributorsDiv = document.getElementById('contributors');
  //creating the options inside the select tag
  // the first part makes the function times 10, that's why I created the table after the { braket
  function selectOptions (data){ 
    data.map(function(repo) {
      createAndAppend('option', options, {text: repo.name, value: options.length})
    })
    //for all this below, I'm pretty sure I could create a function to make it more efficient and prettier 
    //but I decided not to design it right now because I wanted to see the program working minimally first
    let table = createAndAppend('table', divSelect);
    let line1 = createAndAppend('tr', table, {class: "lines"});
    const name = createAndAppend('td', line1, {text: "Name: "});      
    let nameData = createAndAppend('a', line1, {text: data[0].name, href: data[0].html_url});
    let line2 = createAndAppend('tr', table, {class: "lines"});
    const description = createAndAppend('td', line2, {text: "Description: "});
    let descriptionData = createAndAppend('td', line2, {text: data[0].description});
    let line3 = createAndAppend('tr', table, {class: "lines"});
    const forks = createAndAppend('td', line3, {text: "Forks: "});
    let forksData = createAndAppend('td', line3, {text: data[0].forks_count});
    let line4 = createAndAppend('tr', table, {class: "lines"});
    const update = createAndAppend('td', line4, {text: "Last Update: "});
    let updateData = createAndAppend('td', line4, {text: data[0].updated_at});
    let url_contributors = data[0].contributors_url;
    getContributors(url_contributors);
    
  

    //when we change select, the table is filled with the correspondent index info  
    options.addEventListener('change', () => {
      let i = options.selectedIndex;
      nameData.innerHTML = data[i].name;
      descriptionData.innerHTML = data[i].description;
      forksData.innerHTML = data[i].forks;
      updateData.innerHTML = data[i].updated_at;
      url_contributors = data[i].contributors_url;
      clean(contributorsDiv); //trying to rip the first spans from the div
      getContributors(url_contributors); //adding new contributors
      
      })

    function getContributors(url){
  
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data){
        createAndAppend('h4', contributorsDiv, {text: "Contributions"});
        data.map(function(contributors) {
          let contributorsList = createAndAppend('span', contributorsDiv, {class:'contributorsList'})
          createAndAppend('img',contributorsList, {src: contributors.avatar_url, class: 'avatars'})
          createAndAppend('a', contributorsList, {text: contributors.login, class: 'login', href: contributors.html_url})
          createAndAppend('p', contributorsList, {text: contributors.contributions, class: 'contributions'})
          
          })
        })
      }
    
    //went after a function that could help me cleaning the DIV with the contributors data,
    //so everything I select a new repo, the data that is already there goes away
    //and we are able to createAndAppend the new ones
    //I can apply the same function to make possible having a function to the first table as well
    //so I createAndAppend the first option and then clean and create all over again as the select goes being selected
    function clean(node){
      for(let n = 0; n < node.childNodes.length; n ++){
      let child = node.childNodes[n];
      if(child.nodeType === 1){
        node.removeChild(child);
        n --;
      }else if(child.nodeType === 1) {
        clean(child);
      }
    }
  }

}

  const URL = 'https://api.github.com/orgs/hackyourfuture/repos?per_page=10';
  fetch(URL)
  .then((resp) => resp.json())
  .then(function(data){
      selectOptions(data);
  
      })
  .catch(function(err){
     console.error(err)
  })
  
}
    



  
 


