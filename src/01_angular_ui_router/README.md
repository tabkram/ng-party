# 01_angular_ui_router

## In this section, we will move to use the routing system in angular. 

We will use angular-ui-router over angular-route because it offers more features and options.

--- 

For this, we need to start a http-server in order to launch our app. I recommend using the "http-server" package installed in node_modules folder.

After that you should:

* Create a config function for our "ngParty" module in order to set the routes ("app/ngparty.routes.js").

* Move "GreetingController" in a separated file "app/greeting/greeting.controller.js".

* Create a "app/greeting/greeting.view.html" file and move the following html content from index file to greeting.

```
	<div class="container-fluid" ng-controller="GreetingController">
		<div class="row">
			<div class="jumbotron">
				<h1>{{greeting}}</h1>
				<p></p>
			</div>
		</div>
	</div>
```

* create a named ui-route called "main", having as:  a state name -> "greeting", as path -> "/greeting", as templateUrl the greeting html, and as controller "GreetingController".

* create a new button in the index file associated with a new controller called "app/greeting/sayhello.controller.js" which enables navigation to "/greeting" route when clicked.

* run the 01_angular_ui_router.karma.conf.js tests