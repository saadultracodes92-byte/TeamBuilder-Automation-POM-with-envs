import { ReportingPage } from '../../Pages/reportingPage';
import { reportingSelectors } from '../../Selectors/reportingSelectors';

// Test suite for Reporting module
// Add your reporting test cases here

describe('Reporting Module', () => {
  before(() => {
    // Login before all tests
    cy.login();
  });

  beforeEach(() => {
    // Navigate to reporting module before each test
    ReportingPage.visit();
    cy.wait(1000); // Replace with loader check if needed
  });

  // 1. Availability Report
  it('should generate availability report for ABC office', () => {
    ReportingPage.clickReportingTab();
    ReportingPage.selectReportTab(reportingSelectors.availabilityReportTab);
    ReportingPage.selectLocation('ABC office');
    ReportingPage.clickSubmit();
    // Assert report loaded (add selector for report table if needed)
    cy.get('#availabilityReportTable').should('be.visible');
  });

  // 2. Call Out Report
  it('should generate call out report for ABC office after opening location DD', () => {
    ReportingPage.clickReportingTab();
    ReportingPage.selectReportTab(reportingSelectors.calloutReportTab);
    ReportingPage.selectLocation('DD');
    ReportingPage.scrollToLocation('ABC office');
    ReportingPage.selectLocation('ABC office');
    ReportingPage.clickSearch();
    cy.get('#calloutReportTable').should('be.visible');
  });

  // 3. Login Summary
  it('should generate login summary for Saad user', () => {
    ReportingPage.clickReportingTab();
    ReportingPage.selectReportTab(reportingSelectors.loginSummaryTab);
    ReportingPage.enterName('Saad user');
    ReportingPage.clickSearch();
    cy.get('#loginSummaryTable').should('be.visible');
  });

  // 4. Schedule Hours
  it('should generate schedule hours report', () => {
    ReportingPage.clickReportingTab();
    ReportingPage.selectReportTab(reportingSelectors.scheduleHoursTab);
    ReportingPage.clickSearch();
    cy.get('#scheduleHoursTable').should('be.visible');
  });

  // 5. Schedule Status
  it('should generate schedule status report', () => {
    ReportingPage.clickReportingTab();
    ReportingPage.selectReportTab(reportingSelectors.scheduleStatusTab);
    ReportingPage.clickSearch();
    cy.get('#scheduleStatusTable').should('be.visible');
  });
});
