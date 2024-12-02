describe(("Add Patient Page Test"),()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.login();
    })
    afterEach(()=>{
        cy.logout();
    })

    it("Should visit add patient page and add a new patient",()=>{
        cy.get('a[href="/patients"]').should('be.visible').click();
        cy.get('button[type="submit"]').should('be.visible').eq(0).click();
       
        // Add patient details in form
        cy.get('input[name="name"]').should('be.visible').type('John Doe');
        cy.get('input[name="email"]').should('be.visible').type('johndoe@gmail.com');
        cy.get('input[name="phone"]').should('be.visible').type('1234567890');
        cy.get('button[type="button"]').contains("General Details").click();

        // Add Patient secondary details
        cy.get('input[name="height"]').should('be.visible').clear().type('160');
        cy.get('input[name="weight"]').should('be.visible').clear().type('70');
        cy.get('input[name="age"]').should('be.visible').clear().type('30');
        // cy.get('input[name="Gender"]').should('be.visible').type('Male');
        cy.get('button[type="button"]').contains("Add Tests").click();

        // Add Patient tests
        cy.get('input[id="patient-test"]').click().type('UR URIC ACID');
        cy.get('.MuiAutocomplete-listbox').contains('UR URIC ACID').click();
        cy.get('input[id="patient-tests-labs"]').click().type('Test Lab - UR URIC ACID');
        cy.get('.MuiAutocomplete-listbox').contains('Test Lab - UR URIC ACID').click();

        // Add patient equipments
        cy.get('button[type="button"]').contains('add_box').click({ multiple: true });
        cy.get('div[aria-label="Eqipment Name"').click()
        cy.get('ul.MuiMenu-list').find('li').contains('injection')
        cy.get('ul.MuiMenu-list').find('li[role="option"]').contains('injection').click();
        cy.wait(2000);
        cy.get('button[title="Save"]').should('be.visible').click();
        cy.get('button[type="button"]').contains("Add Patient").click();
        cy.wait(6000)
    })

    it("Should search patient 'John' which was added in previous test in patients tab",()=>{
        cy.get('a[href="/patients"]').should('be.visible').click();
        cy.wait(2000);
        cy.get('input[aria-label="Search"]').should('be.visible').type('John');
        cy.get('table').contains('td', 'John').should('be.visible');
        cy.wait(2000);
    })

    it("Should search patient 'John' in list of todos on the home/dashboard page.", () => {
        cy.get('ul[aria-label="completed todo"]').should('be.visible');
        cy.wait(4000);
        cy.contains('li', 'John').scrollIntoView().should('be.visible');
    });
})