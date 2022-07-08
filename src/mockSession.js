const { MockUser } = require('./mockDriveApp');

/**
 * Session class
 * @see https://developers.google.com/apps-script/reference/base/session?hl=en
 */
class MockSession {
  static getActiveUser() {
    return new MockUser('me@test.com');
  }
}

module.exports = { MockSession };
