
// Test suite for Availability & Unavailability flow
describe('Availability & Unavailability Flow', () => {
  before(() => {
    // Perform login once before all tests
    cy.login();
  });

  beforeEach(() => {
    // After login, navigate to availability module
    AvailabilityUnavailabilityPage.visit();
    // Wait for loader to disappear
    cy.wait(1000); 
  });

  // --- Availability Test Cases ---
  it('should add new availability for first user with personal type ancillary', () => {
    // Click to see availability of first user
    cy.get('.user-row').first().click();
    cy.wait(1000); // Wait for loader to disappear
    // Click Add Availability button
    AvailabilityUnavailabilityPage.clickAddAvailability();
    // Select location from dropdown
    cy.get('#locationDropdown').select('ABC office');
    // Enter current date in from and to fields
    const today = Cypress.moment().format('YYYY-MM-DD');
    AvailabilityUnavailabilityPage.enterDate(today);
    // Select days Mon and Tue
    cy.get('#daysDropdown').select(['Mon', 'Tue']);
    // Click Add button
    AvailabilityUnavailabilityPage.clickSave();
    // Assert success message
    AvailabilityUnavailabilityPage.getSuccessMessage().should('be.visible');
  });

  it('should edit availability by changing time', () => {
    // Click edit pencil icon for first availability
    cy.get('.edit-availability').first().click();
    // Change time in from and to fields
    AvailabilityUnavailabilityPage.enterStartTime('09:00');
    AvailabilityUnavailabilityPage.enterEndTime('17:00');
    // Click Edit button
    AvailabilityUnavailabilityPage.clickSave();
    // Assert success message
    AvailabilityUnavailabilityPage.getSuccessMessage().should('be.visible');
  });

  it('should delete availability', () => {
    // Click delete icon for first availability
    cy.get('.delete-availability').first().click();
    // Modal opens, click Remove button
    cy.get('#removeAvailabilityBtn').click();
    // Assert success message
    AvailabilityUnavailabilityPage.getSuccessMessage().should('be.visible');
  });

  it('should show expired availabilities', () => {
    // Click Show Expired button
    cy.get('#showExpiredBtn').click();
    // Assert expired availabilities are visible
    cy.get('.expired-availability').should('be.visible');
  });

  // --- Unavailability Test Cases ---
  it('should set unavailable dates for a user', () => {
    // Click Unavailable Dates tab
    cy.get('#unavailableDatesTab').click();
    // Click Set Unavailable Dates
    AvailabilityUnavailabilityPage.clickAddUnavailability();
    // Select date from calendar
    cy.get('#unavailabilityCalendar').click();
    cy.get('.calendar-day[data-day="7"]').click();
    // Select hours from and to
    cy.get('#unavailabilityStartTime').type('10:00');
    cy.get('#unavailabilityEndTime').type('15:00');
    // Select reason from dropdown
    cy.get('#reasonDropdown').select(0);
    // Click Add button
    AvailabilityUnavailabilityPage.clickSaveUnavailability();
    // Assert success message
    AvailabilityUnavailabilityPage.getUnavailabilitySuccessMessage().should('be.visible');
  });

  it('should edit unavailability by changing start and end time', () => {
    // Click on the unavailability entry
    cy.get('.unavailability-row').first().click();
    // Change start and end time
    cy.get('#unavailabilityStartTime').clear().type('11:00');
    cy.get('#unavailabilityEndTime').clear().type('16:00');
    // Click Save button
    AvailabilityUnavailabilityPage.clickSaveUnavailability();
    // Assert success message
    AvailabilityUnavailabilityPage.getUnavailabilitySuccessMessage().should('be.visible');
  });

  it('should apply changes to all related days for unavailability', () => {
    // Click on the added unavailability entry
    cy.get('.unavailability-row').first().click();
    // Click checkbox to apply changes to all related days
    cy.get('#applyToAllDaysCheckbox').check();
    // Click Save button
    AvailabilityUnavailabilityPage.clickSaveUnavailability();
    // Assert success message
    AvailabilityUnavailabilityPage.getUnavailabilitySuccessMessage().should('be.visible');
  });

  it('should delete unavailability', () => {
    // Click on the added unavailability entry
    cy.get('.unavailability-row').first().click();
    // Click Delete button
    cy.get('#deleteUnavailabilityBtn').click();
    // Assert success message
    AvailabilityUnavailabilityPage.getUnavailabilitySuccessMessage().should('be.visible');
  });
});
