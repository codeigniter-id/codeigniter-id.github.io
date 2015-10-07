describe('github.activity tests', function () {
    var svc, httpBackend;

    beforeEach(function (){  
      module('ngResource');
      module('github.activity');
      inject(function($httpBackend, GithubActivityService) {
        svc = GithubActivityService;      
        httpBackend = $httpBackend;
      });
    });

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should send the message and return the response', function (){
        var returnData = { testing: 'anything'};
        httpBackend.expectJSONP('https://api.github.com/users/gigablox/events?callback=JSON_CALLBACK').respond(returnData);
        svc.events({
            user:'gigablox',
            params:{
                callback:'JSON_CALLBACK'
            }
        }).get(function(user) {
            expect(user.testing).toEqual('anything');
        });
        httpBackend.flush();
    });
});