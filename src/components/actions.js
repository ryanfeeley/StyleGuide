'use strict';

/**
 * Get new content, and notify the store.
 *
 * @param {function} dispatch - The Redux dispatcher.
 * @param {string} file - The name of the file we’re getting.
 */
function getContent(dispatch, file) {
  // Put something innocuous in the text to indicate we're loading.
  dispatch({type: 'TEXT', text: '&nbsp;', file: file});
  return fetch(`contents/${file}.html`)
    .then(response => response.text())
    .then(text => dispatch({type: 'TEXT', text: text || '', file: file}));
}

/**
 * Get a url, and notify the store.
 *
 * @param {function} dispatch - The Redux dispatcher.
 * @param {string} url - The name of the url.
 */
function loadUrl(dispatch, url) {
  // Put something innocuous in the text to indicate we're loading.
  dispatch({type: 'URL', url: url});
}

/**
 * Notifies the store that we’ve navigated to a new section.
 *
 * @param {function} dispatch - The Redux dispatcher.
 * @param {string} section - The title of the section we’ve navigated to.
 */
function newSection(dispatch, section) {
  dispatch({type: 'NEW_SECTION', section: section})
}

/**
 * Notifies the store that we’ve found new sections.
 *
 * @param {function} dispatch - The Redux dispatcher.
 * @param {Element[]} sections - The new array of sections.
 */
function newSections(dispatch, sections) {
  dispatch({type: 'NEW_SECTIONS', sections: sections})
}

module.exports = {
  getContent: getContent,
  loadUrl: loadUrl,
  newSection: newSection,
  newSections: newSections
};
