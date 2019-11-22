'use strict';

{
  const { createAndAppend } = window.Util;

  class ContributorsView {
    constructor(container) {
      this.container = container;
    }

    update(state) {
      if (!state.error) {
        this.render(state.contributors);
      }
    }

    /**
     * Renders the list of contributors
     * @param {Object[]} contributors An array of contributor objects
     */
    render(contributors) {
      try {
        this.container.innerHTML = '';
        createAndAppend('h4', this.container, { text: 'Contributions' });
        const contributorsList = createAndAppend('div', this.container, {
          class: 'contributorsList',
        });
        contributors.forEach(contributor => {
          const contributors = createAndAppend('span', contributorsList, {
            class: 'contributor',
          });

          createAndAppend('img', contributors, {
            src: contributor.avatar_url,
            class: 'avatars',
          });

          createAndAppend('a', contributors, {
            text: contributor.login,
            href: contributor.html_url,
            class: 'login',
          });

          createAndAppend('p', contributors, {
            text: contributor.contributions,
            class: 'contributions',
          });
        });
      } catch (error) {
        return new Error(error.message);
      }
    }
  }
  window.ContributorsView = ContributorsView;
}