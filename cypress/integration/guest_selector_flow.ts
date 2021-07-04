/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

context(`Guest Selector Add Room Functions `, () => {
  before(() => {
    cy.visit(`/?rooms=?rooms=2:4`);
  });

  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  it("should have the correct guest number", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("guest-number-label").contains("2");
  });

  it("should open the guest selector modal", () => {
    cy.wait(1000);
    cy.get(".guest-picker").first().click();
    cy.getElementByTestAttrib("guest-picker-modal").should("have.length", 1);
  });

  it("should increment the guest count", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("spinner-value").eq(0).should("have.value", "3");
  });

  it("should decrease the guest count", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("minus-btn").eq(0).click();
    cy.getElementByTestAttrib("spinner-value").eq(0).should("have.value", "2");
  });

  it("should not decrease the guest count below min value", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("minus-btn").eq(0).click();
    cy.getElementByTestAttrib("minus-btn").eq(0).should("be.disabled");
  });

  it("should not increase the guest count above max value", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).should("be.disabled");
  });

  it("should have the correct button label", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("btn-search").contains(
      "Search 1 rooms • 5 guests"
    );
  });

  it("should disable the add-room after 8 rooms", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).click();
    cy.getElementByTestAttrib("add-room").eq(0).should("be.disabled");
  });

  it("should not update the state when close cliked", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("close-btn").eq(0).click();
    cy.getElementByTestAttrib("guest-number-label").contains("2");
  });

  it("should update the state when search btn clicked", () => {
    cy.wait(1000);
    cy.get(".guest-picker").first().click();
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("btn-search").eq(0).click();
    cy.getElementByTestAttrib("guest-number-label").contains("3");
  });
});

context(`Guest Selector Add Room with children Functions `, () => {
  before(() => {
    cy.visit(`/?rooms=1:4,6|3`);
  });

  beforeEach(() => {
    cy.viewport("iphone-6");
  });

  it("should have the correct guest number", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("guest-number-label").contains("6");
  });

  it("should open the guest selector modal", () => {
    cy.wait(1000);
    cy.get(".guest-picker").first().click();
    cy.getElementByTestAttrib("guest-picker-modal").should("have.length", 1);
  });

  it("should add child row", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("plus-btn").eq(1).click();
    cy.getElementByTestAttrib("child-age-selector")
      .eq(2)
      .should("have.value", "0");
  });

  it("should disable add btn when room occupancy is reached", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("plus-btn").eq(1).click();
    cy.getElementByTestAttrib("plus-btn").eq(1).should("be.disabled");
    cy.getElementByTestAttrib("plus-btn").eq(0).should("be.disabled");
    cy.getElementByTestAttrib("minus-btn").eq(0).should("be.disabled");
  });

  it("should disable + and - btn when maximum room occupancy is reached", () => {
    cy.getElementByTestAttrib("plus-btn").eq(0).should("be.disabled");
    cy.getElementByTestAttrib("minus-btn").eq(0).should("be.disabled");
  });

  it("should remove the last child", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("minus-btn").eq(1).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).should("not.be.disabled");
  });

  it("should add one more adult", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("plus-btn").eq(0).click();
    cy.getElementByTestAttrib("plus-btn").eq(0).should("be.disabled");
  });

  it("should remove last room", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("remove-room").eq(0).click();
    cy.get(".room-section").should("have.length", 1);
  });

  it("should update the state when search btn clicked", () => {
    cy.wait(1000);
    cy.getElementByTestAttrib("btn-search").eq(0).click();
    cy.getElementByTestAttrib("guest-number-label").contains("5");
    cy.url().should("include", `2:4,6,0`);
  });
});

export default undefined;
