angular.module('peopleoftheUSCapital').
    component('menu', {}).
    controller('MenuController', function() {
        this.brandName = 'Protractor Demo';

        this.links = [
            { name: 'Page 1', href: 'index.html' },
            { name: 'Page 2', href: 'page2.html' }
        ];

        this.activePage = window.location.pathname.replace('/', '');

    });
