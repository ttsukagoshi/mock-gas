///////////////////////////////////////////////////////////////////////////////////////
// Classes to mock classes related to UrlFetchApp                                    //
// https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app?hl=en //
///////////////////////////////////////////////////////////////////////////////////////

/**
 * UrlFetchApp class
 * @see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app?hl=en
 */
class MockUrlFetchApp {
  /**
   * Mocks a request to fetch a URL using optional advanced parameters.
   * @param {string} url The URL to fetch.
   * @param {*} params The optional JavaScript object specifying advanced parameters as defined in below web page.
   * @return {*} The input URL and parameters as a JavaScript object.
   * @see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app?hl=en#fetchurl,-params
   */
  static fetch(url, params = {}) {
    return {
      url: url,
      params: params,
    };
  }
}

module.exports = { MockUrlFetchApp };
