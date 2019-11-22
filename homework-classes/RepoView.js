'use strict';

{
  const { createAndAppend } = window.Util;

  class RepoView {
    constructor(container) {
      this.container = container;
    }

    update(state) {
      if (!state.error) {
        this.render(state.selectedRepo);
      }
    }

    /**
     * Renders the repository details.
     * @param {Object} repo A repository object.
     */
    render(repo) {
      try {
        this.container.innerHTML = '';
        const reposList = createAndAppend('ul', this.container);

        // creating a list with the repos, instead of a table as in the second week file
        const reposItem = createAndAppend('li', reposList, {class: "repoList"});
        createAndAppend('span', reposItem, {text: `Repository Name: `});
        createAndAppend('a', reposItem, {
          text: repo.name,
          href: repo.html_url,
        });
        createAndAppend('p', reposItem, {
          text: `Fork:  ${repo.forks_count}`
        });
        createAndAppend('p', reposItem, {
          text: `Description:   ${repo.description}`
        });
        const dateAndTime = new Date(repo.updated_at);
        createAndAppend('p', reposItem, {
          text: `Updated: ${dateAndTime.toLocaleString('en-US')}`,
        });
      } catch (error) {
        return new Error(error.message);
      }
    }
  }

  window.RepoView = RepoView;
}
