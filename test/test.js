var assert = require('assert');
var expect = require('expect.js');
var c = require('../config').config;  // App configuration

var URL_REGEX = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;

// Begin Test
describe('My Test Suite', function() {

    before(function(done) {
        // Do some task that needs to be performed before the tests. 

        done();
    });
    
    // First test
    describe('Foo', function() {
        // Retreive data to power these tests. 
        before(function(done) {
            this.timeout(5000);
            
            // Get data. 

            done()
        });

        it('should not have an error', function() {
            expect(null).to.be.null;
        });

        it('should return ' + 3 + ' records', function() {
            expect([1,2,3]).to.have.length(3);
        });
    });
});
