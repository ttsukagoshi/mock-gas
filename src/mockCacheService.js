/////////////////////////////////////////////////////////////////////
// Classes to mock classes related to cache service                //
// https://developers.google.com/apps-script/reference/cache?hl=en //
/////////////////////////////////////////////////////////////////////

/**
 * CacheService class
 * @see https://developers.google.com/apps-script/reference/cache/cache-service?hl=en
 */
class MockCacheService {
  static getDocumentCache() {
    return new MockCache();
  }
  static getScriptCache() {
    return new MockCache();
  }
  static getUserCache() {
    return new MockCache();
  }
}

/**
 * Cache class
 * @see https://developers.google.com/apps-script/reference/cache/cache?hl=en
 */
class MockCache {
  constructor() {
    this.cache = {};
    this.expirationInSec = 3600;
  }
  /**
   * @param {String} cacheKey
   * @returns {String}
   */
  get(cacheKey) {
    return this.cache[cacheKey] || null;
  }
  /**
   * @param {String} cacheKey
   * @param {String} cacheValue
   * @param {Number} expirationInSec
   */
  put(cacheKey, cacheValue, expirationInSec) {
    this.cache[cacheKey] = cacheValue;
    this.expirationInSec = expirationInSec;
  }
}

module.exports = { MockCacheService };
