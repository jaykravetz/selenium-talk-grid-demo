'use strict';
let fs = require('fs');

var info = {};

describe('People of the US Capital', function () {

    beforeEach(function () {

        browser.driver.getCapabilities().then((caps) => {
            info.browserName = caps.get('browserName');
        });

    });

    describe('List of Reps', function () {

        beforeEach(function () {
            browser.get('index.html');
            browser.waitForAngular();
        });

        it('displays a list of reps', function () {

            var repList = element.all(by.repeater('row in $ctrl.reps'));
            repList.count().then(function (count) {
                expect(count).toBe(540);
            });

        });

        it('can filter the list of reps', function () {

            var repList = element.all(by.repeater('row in $ctrl.reps').column('row.last_name'));
            var query = element(by.model('$ctrl.query'))

            query.sendKeys('tammy b');

            function getNames() {
                return repList.map(function(elem) {
                    return elem.getText();
                })
            }

            repList.then(function (arr) {
                expect(arr.length).toBe(1);
                expect(getNames()).toEqual([
                    'Baldwin'
                ]);

                browser.takeScreenshot().then((png) => {
                    var stream = fs.createWriteStream(`./${info.browserName}-${Date.now()}-screenshot.png`);
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                });
            });
        });

        it('can sort the list of reps', function () {

            var repList         = element(by.repeater('row in $ctrl.reps').row(0)),
                sortSelect      = element(by.model('$ctrl.sortBy')),
                firstNameOption = sortSelect.element(by.css('option[value="first_name"]')),
                lastNameOption  = sortSelect.element(by.css('option[value="last_name"]'));

            // Sort by first name
            firstNameOption.click();

            repList.element(by.tagName('td:nth-child(2)'))
                .getAttribute('innerText')
                .then(function(text) {
                    expect(text.charAt(0)).toBe('A');
                });


            // Sort by last name
            lastNameOption.click();

            repList.element(by.tagName('td:nth-child(3)'))
                .getAttribute('innerText')
                .then(function(text) {
                    expect(text.charAt(0)).toBe('A');
                });

        });

        it('can open details', function () {

            var repList = element(by.repeater('row in $ctrl.reps').row(0)),
                button  = repList.element(by.tagName('button')),
                modal   = element(by.id('myModal'));

            button.click();

            browser.wait(modal.isDisplayed()).then(function () {
                expect(modal.element(by.tagName('img')).isPresent()).toBeTruthy();
            });
        });
    });

});
