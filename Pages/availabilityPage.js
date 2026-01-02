import availabilitySelectors from '../Selectors/availabilitySelectors';

class AvailabilityPage {
  visit() {
    cy.visit('/availability');
  }

  clickAddAvailability() {
    cy.get(availabilitySelectors.addAvailabilityButton).click();
  }

  selectUser(userName) {
    cy.get(availabilitySelectors.userDropdown).select(userName);
  }

  enterDate(date) {
    cy.get(availabilitySelectors.dateInput).type(date);
  }

  enterStartTime(time) {
    cy.get(availabilitySelectors.startTimeInput).type(time);
  }

  enterEndTime(time) {
    cy.get(availabilitySelectors.endTimeInput).type(time);
  }

  clickSave() {
    cy.get(availabilitySelectors.saveButton).click();
  }

  getSuccessMessage() {
    return cy.get(availabilitySelectors.successMessage);
  }
}

export default new AvailabilityPage();