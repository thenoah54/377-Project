# Your Developer Manual covers:
# How to install your application and all dependencies
Steam Sales is a simple web browser that uses an API to gather its information. There are no downloads neccessary.
# How to run your application on a server
I am using Vercel to fun this application. Simply opening this link: [text](https://steamsales-eight.vercel.app/) will allow you to access the application.
# How to run any tests you have written for your software
There are a few tests that I implemented using Insomnia to make mock API calls as to not compelte my maximum usages for this API and overload the servers. Set up a mock and change usingMock to true.
# The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do
The API I am using is CheapShark API [text](https://apidocs.cheapshark.com/#c58ecff8-ee51-2901-f263-8606e8dc281e) and there are a few GETs that allow my app to work. The first one is get list of deals which initializes on load of the page, giving you that initial list of deals on the home page. The next is another deal lookup but instead of staying general, it gets the list of games based on the user's search. 
# A clear set of expectations around known bugs and a road-map for future development.
There are a few key features missing that could be a route for future developement. It is clear that the slider's image quality is of poor quality and could somehow be increased. There can be clickable buttons to allow easy filtering between columns. There is also issue of the navigation bar moving between pages because of the removal of the search bar and submit button, future implementation should be able to fix this cosmetic issue. 
