/////
// Mock classes related to Drive service
// https://developers.google.com/apps-script/reference/drive?hl=en
/////

const { MOCK_FILES } = require('./mockDriveFiles');

/**
 * DriveApp class
 * @see https://developers.google.com/apps-script/reference/drive/drive-app?hl=en
 */
class MockDriveApp {
  /**
   * @param {String} id
   */
  static getFileById(id) {
    return new MockFile(MOCK_FILES[id]);
  }
  /**
   * @param {String} id
   */
  static getFolderById(id) {
    console.log(`MockDriveApp.getFolderById with id: ${id}`);
    return new MockFolder(MOCK_FILES);
  }
}

/**
 * File class
 * @see https://developers.google.com/apps-script/reference/drive/file?hl=en
 */
class MockFile {
  constructor(fileObj) {
    this.id = fileObj.id;
    this.name = fileObj.name;
    this.owner = fileObj.users.owner;
    this.editors = fileObj.users.editors;
    this.viewers = fileObj.users.viewers;
    this.sheets = fileObj.sheets;
    this.mimeType = fileObj.mimeType;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getOwner() {
    return new MockUser(this.owner);
  }
  getEditors() {
    return this.editors.map((editor) => new MockUser(editor));
  }
  getViewers() {
    return this.viewers.map((viewer) => new MockUser(viewer));
  }
  getMimeType() {
    return this.mimeType;
  }
}

/**
 * User class
 * @see https://developers.google.com/apps-script/reference/drive/user?hl=en
 */
class MockUser {
  /**
   * @param {String} email
   */
  constructor(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
}

/**
 * Folder class
 * @see https://developers.google.com/apps-script/reference/drive/folder?hl=en
 */
class MockFolder {
  /**
   * @param {Object} folderObj
   */
  constructor(folderObj) {
    this.folderObj = folderObj;
  }
  getFiles() {
    return new MockFileInterator(Object.values(this.folderObj));
  }
}

/**
 * FileIterator class
 * @see https://developers.google.com/apps-script/reference/drive/file-iterator?hl=en
 */
class MockFileInterator {
  /**
   * @param {Array} fileObjArr
   */
  constructor(fileObjArr) {
    this.fileObjArr = fileObjArr.slice();
    this.done = false;
    this.index = 0;
  }
  next() {
    if (this.done) {
      return undefined;
    } else {
      this.index += 1;
      if (this.index >= this.fileObjArr.length) {
        this.done = true;
      }
      return new MockFile(this.fileObjArr[this.index - 1]);
    }
  }
  hasNext() {
    return !this.done;
  }
}

module.exports = { MockDriveApp, MockUser };
