import availabilityData from '../../fixtures/availability.json';
import availabilityPage from '../../../Pages/availabilityPage';

describe("Availability Tests", () => {
  // Add test cases for availability here
  // Example: it("Should check availability", () => { /* test code */ });

  // Test: Add availability for the first user
  it('Should add availability for the first user', () => {
    // Visit the availability page
    availabilityPage.visit();

    // Click the add availability button
    availabilityPage.clickAddAvailability();

    // Select the first user from dropdown
    availabilityPage.selectUser(availabilityData.availability.user);

    // Enter date, start time, and end time
    availabilityPage.enterDate(availabilityData.availability.date);
    availabilityPage.enterStartTime(availabilityData.availability.startTime);
    availabilityPage.enterEndTime(availabilityData.availability.endTime);

    // Click save
    availabilityPage.clickSave();

    // Assert that success message is visible
    availabilityPage.getSuccessMessage().should('be.visible').and('contain', 'success');

    // Take a screenshot after adding availability
    cy.screenshot('add-availability-success');
  });
});