import { reportingSelectors } from '../Selectors/reportingSelectors';

class ReportingPageClass {
  visit() {
    cy.visit('/reporting');
  }

  clickReportingTab() {
    cy.get(reportingSelectors.reportingTab).click();
  }

  selectReportTab(tabSelector) {
    cy.get(tabSelector).click();
  }

  selectLocation(location) {
    cy.get(reportingSelectors.locationDropdown).select(location);
  }

  enterName(name) {
    cy.get(reportingSelectors.nameField).type(name);
  }

  clickSubmit() {
    cy.get(reportingSelectors.submitButton).click();
  }

  clickSearch() {
    cy.get(reportingSelectors.searchButton).click();
  }

  scrollToLocation(location) {
    cy.get(reportingSelectors.locationDropdown).contains(location).scrollIntoView();
  }
}

export const ReportingPage = new ReportingPageClass();
