describe("Home/Dashboard Page Test",()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.login();
    })
    afterEach(()=>{
        cy.wait(2000)
        cy.logout();
    })

    it("Should visit home/dashboard page and access todos",()=>{
        cy.contains('div.title', "Remaining work").should('be.visible');
        cy.get('ul[aria-label="completed todo"]').should('be.visible');
    })

    it("Should add a new todo and should be visible in home/dashboard list",()=>{
        cy.get('a[href="/dashboard/todos"]').should('be.visible').click()
        cy.get('input[id="outlined-add-todo-input"]').type('New Todo Added')
        cy.get('button[type="submit"]').contains('Save').click()
        cy.visit('/dashboard/')
        cy.get('ul[aria-label="completed todo"]').should('be.visible')
        cy.contains('li', 'New Todo Added').scrollIntoView().should('be.visible')
    })

    it("Should access cost calculator on home/dashboard page",()=>{
        cy.contains('div.title', "Test Cost Calculator").should('be.visible')
        cy.get('label[id="patient-test-label"]').should('be.visible').contains("Add tests for patient")

    })

    it("Should access cost calculator for uric acid test and calculate total after applying 10% discount which equals to 135",()=>{
        cy.contains('div.title', "Test Cost Calculator").should('be.visible');
        cy.get('label[id="patient-test-label"]').should('be.visible');

        // Search and select the "UR URIC ACID" test
        cy.get('input[id="patient-test"]').click().type('UR URIC ACID');
        cy.get('.MuiAutocomplete-listbox') .contains('UR URIC ACID').click();

        // Apply a 10% discount
        cy.get('.MuiSelect-root').click(); 
        cy.get('[data-value="10"]').click();

        // Verify that the total amount is correctly calculated
        cy.contains('div', 'Total').parent().find('div').eq(1).should('have.text', '135 ₹');
        // cy.wait(2000)
    })

})