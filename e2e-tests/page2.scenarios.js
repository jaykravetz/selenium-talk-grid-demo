describe('People of the US Capital', function() {

    describe('Page 2 - It\'s nothing special', function() {

        beforeEach(function() {
            browser.get('page2.html');
            browser.waitForAngular();
        });

        it('has the correct title', function() {
            expect(browser.getTitle()).toBe('My AngularJS App - Page 2');
        });

        it('has the correct active menu item', function() {
            var menuItem = element(by.css('li[class="active"]'))

            expect(menuItem.getText()).toEqual('Page 2');
        });

        it('has a jumbotron', function() {

            var jumbotron = element(by.css('div[class="jumbotron"]')),
                jumboTitle = jumbotron.element(by.tagName('h1')),
                jumboParagraph = jumbotron.element(by.tagName('p'));

            expect(jumbotron.isPresent()).toBeTruthy();
            expect(jumboTitle.getText()).toBe('This is Page 2');
            expect(jumboParagraph.getText()).toBe('There is nothing special here');
        });

    })
})