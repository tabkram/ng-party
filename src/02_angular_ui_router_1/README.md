# 02_angular_ui_router_1

# In this section we will try: setting a default route, creating an authentication form, navigating between routes, and communicating data between controllers through services.

---

* Remove the hello button from the "index.html" file

```
    <div ng-controller="SayHelloController" class⁼"row">
        <button ng-click="sayHello()" class="btn btn-default col-md-offset-4 col-md-4">say hello!</button>
    </div>
```

* Create a new controller with :
```
as template : "app/login/login.view.html"
as controller file : "app/login/login.controller.html"
as controller name : "LoginController"
```

* Create a new with :
```
* "login" as name
* "/login as path"
* and "main" as view name
```

* Set the following html code in the "login.view.html" file:

```
<div class="container-fluid">
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Authentication</h3>
  </div>
  <div class="panel-body">
    <form class="form-horizontal">
  <div class="form-group">
    <label for="inputLogin3" class="col-sm-2 control-label">Login</label>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="inputLogin3" placeholder="Login">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-4">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-4">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
  </div>
</div>
</div>
```

* Create a scope function called `connect()` which allows to set a `$scope.user` object as follow :

```
$scope.user = {
	login: login,
	password : password
}
```

* create an angular service file called "login.service.js", with as methods : `connect()` and `getUser()`

* Pass the `$scope.user` in order to be saved and communicated to `greeting.controller.js`.

* after saving the user in the login.service.js, navigate to `greeting` route and replace :


```
$scope.greeting = "Hello, world!";
```

by


```
$scope.greeting = "Hello, " + getUser.login + " !";
```
