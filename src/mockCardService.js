////////////////////////////////////////////////////////////////////////////
// Classes to mock classes related to card service                        //
// https://developers.google.com/apps-script/reference/card-service?hl=en //
////////////////////////////////////////////////////////////////////////////

/**
 * CardService class
 * @see https://developers.google.com/apps-script/reference/card-service/card-service?hl=en
 */
class MockCardService {
  static TextButtonStyle = {
    FILLED: 'FILLED',
  };
  static newCardBuilder() {
    return new MockCardBuilder();
  }
  static newCardSection() {
    return new MockCardSection();
  }
  static newTextParagraph() {
    return new MockTextParagraph();
  }
  static newFixedFooter() {
    return new MockFixedFooter();
  }
  static newTextButton() {
    return new MockTextButton();
  }
  static newOpenLink() {
    return new MockOpenLink();
  }
  static newAction() {
    return new MockAction();
  }
}

/**
 * Action class
 * @see https://developers.google.com/apps-script/reference/card-service/action?hl=en
 */
class MockAction {
  constructor() {
    this.functionName = '';
  }
  /**
   * @param {String} functionName
   * @returns This MockAction, for chaining
   */
  setFunctionName(functionName) {
    this.functionName = functionName;
    return this;
  }
  output() {
    return { functionName: this.functionName };
  }
}

/**
 * CardBuilder class
 * @see https://developers.google.com/apps-script/reference/card-service/card-builder?hl=en
 */
class MockCardBuilder {
  constructor() {
    this.card = {
      sections: [],
    };
  }
  /**
   * @param {Object} cardSection
   * @returns This CardSection, for chaining
   */
  addSection(cardSection) {
    this.card.sections.push(cardSection.output());
    return this;
  }
  setFixedFooter(cardFixedFooter) {
    this.card['fixedFooter'] = cardFixedFooter.output();
    return this;
  }
  build() {
    return this.card;
  }
}

/**
 * CardSection class
 * @see https://developers.google.com/apps-script/reference/card-service/card-section?hl=en
 */
class MockCardSection {
  constructor() {
    this.section = {
      widgets: [],
    };
  }
  /**
   * @param {Object} cardWidget
   * @returns This MockCardSection, for chaining
   */
  addWidget(cardWidget) {
    this.section.widgets.push(cardWidget.output());
    return this;
  }
  output() {
    return this.section;
  }
}

/**
 * FixedFooter class
 * @see https://developers.google.com/apps-script/reference/card-service/fixed-footer?hl=en
 */
class MockFixedFooter {
  constructor() {
    this.primaryButton = {};
    this.secondaryButton = {};
  }
  setPrimaryButton(cardButton) {
    this.primaryButton = cardButton.output();
    return this;
  }
  setSecondaryButton(cardButton) {
    this.secondaryButton = cardButton.output();
    return this;
  }
  output() {
    return {
      primaryButton: this.primaryButton,
      secondaryButton: this.secondaryButton,
    };
  }
}

/**
 * OpenLink class
 * @see https://developers.google.com/apps-script/reference/card-service/open-link?hl=en
 */
class MockOpenLink {
  constructor() {
    this.url = '';
  }
  /**
   * @param {String} url
   * @returns {String}
   */
  setUrl(url) {
    this.url = url;
    return this;
  }
  output() {
    return this.url;
  }
}

/**
 * TextButton class
 * @see https://developers.google.com/apps-script/reference/card-service/text-button?hl=en
 */
class MockTextButton {
  constructor() {
    this.text = '';
    this.textButtonStyle = '';
    this.openLink = '';
    this.onClickAction = {};
  }
  /**
   * @param {String} text
   * @returns This MockTextButton, for chaining
   */
  setText(text) {
    this.text = text;
    return this;
  }
  /**
   * @param {String} cardTextButtonStyle
   * @returns This MockTextButton, for chaining
   */
  setTextButtonStyle(cardTextButtonStyle) {
    this.textButtonStyle = cardTextButtonStyle;
    return this;
  }
  /**
   *
   * @param {Object} cardAction
   * @returns This MockTextButton, for chaining
   */
  setOnClickAction(cardAction) {
    this.onClickAction = cardAction.output();
    return this;
  }
  /**
   * @param {String} openLink
   * @returns This MockTextButton, for chaining
   */
  setOpenLink(openLink) {
    this.openLink = openLink.output();
    return this;
  }
  output() {
    return {
      text: this.text,
      textButtonStyle: this.textButtonStyle,
      onClickAction: this.onClickAction,
      openLink: this.openLink,
    };
  }
}

/**
 * TextParagraph class
 * @see https://developers.google.com/apps-script/reference/card-service/text-paragraph?hl=en
 */
class MockTextParagraph {
  constructor() {
    this.text = '';
  }
  /**
   * @param {String} text
   */
  setText(text) {
    this.text = text;
    return this;
  }
  output() {
    return { text: this.text };
  }
}

module.exports = { MockCardService };
