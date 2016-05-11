 eventsApp.factory('eventData', fucntion() {
     return {
         event: {
             name: 'Angular Boot Camp'
             , date: '1/1/2013'
             , time: '10:30 am'
             , location: {
                 address: 'Google Headquarters'
                 , city: 'Mountain View'
                 , province: 'CA'
             }
             , imageUrl: 'img/angularjs-logo.png'
             , sessions: [
                 {
                     name: 'Directives Masterclass'
                     , duration: 1
                     , upVoteCount: 0
			}
            
                 , {
                     name: 'Scopes for fun and profit'
                     , duration: 2
                     , upVoteCount: 0
			}
            
                 , {
                     name: 'Well Behaved Controllers'
                     , duration: 4
                     , upVoteCount: 0
			}
		]
         }
     };
 });