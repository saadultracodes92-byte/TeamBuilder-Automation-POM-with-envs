import { availabilityUnavailabilitySelectors } from '../Selectors/availabilitySelectors';

class AvailabilityUnavailabilityPage {
  visit() {
    cy.visit('/availability');
  }

  // Availability actions
  clickAddAvailability() {
    cy.get(availabilityUnavailabilitySelectors.addAvailabilityButton).click();
  }
  selectUser(userName) {
    cy.get(availabilityUnavailabilitySelectors.userDropdown).select(userName);
  }
  enterDate(date) {
    cy.get(availabilityUnavailabilitySelectors.dateInput).type(date);
  }
  enterStartTime(time) {
    cy.get(availabilityUnavailabilitySelectors.startTimeInput).type(time);
  }
  enterEndTime(time) {
    cy.get(availabilityUnavailabilitySelectors.endTimeInput).type(time);
  }
  clickSave() {
    cy.get(availabilityUnavailabilitySelectors.saveButton).click();
  }
  getSuccessMessage() {
    return cy.get(availabilityUnavailabilitySelectors.successMessage);
  }

  // Unavailability actions (reuse selectors or add new if needed)
  clickAddUnavailability() {
    cy.get(availabilityUnavailabilitySelectors.addUnavailabilityButton).click();
  }
  enterUnavailabilityReason(reason) {
    cy.get(availabilityUnavailabilitySelectors.unavailabilityReasonInput).type(reason);
  }
  clickSaveUnavailability() {
    cy.get(availabilityUnavailabilitySelectors.saveUnavailabilityBtn).click();
  }
  getUnavailabilitySuccessMessage() {
    return cy.get(availabilityUnavailabilitySelectors.unavailabilitySuccessMessage);
  }
}

export const AvailabilityUnavailabilityPage = new AvailabilityUnavailabilityPage();