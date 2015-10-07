# Angular Github Activity [![Build Status](https://travis-ci.org/gigablox/angular-github-activity.png)](https://travis-ci.org/gigablox/angular-github-activity)

[Homepage](http://gigablox.github.io/angular-github-activity/)

An [AngularJS](http://angularjs.org/) directive module for showing off your public [Github activity](http://developer.github.com/v3/activity/).

## Usage

1. `bower install --save angular-github-activity`
2. Include [dependencies](#dependencies) in your HTML.
3. Use the `github-activity` directive.

## Dependencies

The `github.activity` module requires a dependency of `ngResource` for service calls made to Github API

The templates expect `/fonts` which contain iconography so make sure to include those as well. You can [customize templates](#custom-templates) to change the icons or remove them entirely.

```html
<head>
<link href="app.css" /> <!-- Your application css and overrides -->
<link href="github-activity.css" /> <!-- Find this in /release -->
</head>

<body>
...
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular-resource.min.js"></script>
<script src="app.js"></script> <!-- Your angular app -->
<script src="github-activity.js"></script> <!-- Find this in /release -->
</body>
```


## Example

See the [homepage](http://gigablox.github.io/angular-github-activity/) for a live example.

```html
<div github-activity events="events" options="options"></div>
```

## Attributes

### `data`

The `data` attribute expects an array returned through the `GithubActivityService` callback:

```js
GithubActivityService.events({
  user:'gigablox',
  params:{
    
    //Github API supports CORS as well. (http://developer.github.com/v3/#cross-origin-resource-sharing)
    callback:'JSON_CALLBACK', 
    
    /*
    Github API rate limits to (60 requests per hour) for anonymous requests. (http://developer.github.com/v3/#cross-origin-resource-sharing)

    If you need more (5000 requests per hour) you can generate a "scope-less" (access_token) for your app and is safe for client side code:
    
    1. First register a new app by following:
        --> https://github.com/settings/applications
        --> "Developer Applications"
        --> "Register new application"
    2. Register a "scope-less" (access_token) via cURL call using that <client_id> and <client_secret> you just made.
        # curl -X PUT -H "application/json" -d
          '{"client_secret":"<client_secret>","scopes":[],"note":"no scope public access"}'
          https://api.github.com/authorizations/clients/<client_id>
          -u <username>
    3. Your response shoud look something like this and generate a scope-less (token):
        {
          "id": 1234567,
          "url": "https://api.github.com/authorizations/1234567",
          "app": {
            "name": "Angular Github Activity",
            "url": "http://gigablox.github.io/angular-github-activity/",
            "client_id": "123456712345671234567"
          },
          "token": "76841d7b319dc8bb2c731365d38b74b25ab00126", //<-- This is what you want
          "note": "no scope public access",
          "note_url": null,
          "created_at": "2013-10-06T21:06:18Z",
          "updated_at": "2013-10-06T21:06:18Z",
          "scopes": []
        }
    */
    
    access_token:'76841d7b319dc8bb2c731365d38b74b25ab00126' //<-- Put that bad boy right here.
  }
}).get().$promise.then(function(events){
  $scope.events = events.data;
});
```

### `options`

The `options` attribute expects an object that supports the following properties:

- *number* **limit**
 - Limits number of events rendered in array passed to `data`
 - If `null`, directive will render all events
  - Default: `null`

```js
$scope.settings = {
  limit:4
};
```

## Custom Templates

If you wish to change any of the templates or remove dependencies, feel free under `/src/views`.

Custom iconography can be changed by importing the `github-activity.json` file found in `/src/assets` into [icomoon.io/app](http://icomoon.io/app). After downloading a new set, make sure to update the cooresponding CSS in `github-activity.less` and fonts in `/assets/fonts`.

You will then have to [build](#build) the project which will recompile the `/release`

## Build

To build a `/release` from scratch:

1. `npm install -g grunt-cli bower karma`
2. `cd angular-github-activity`
3. `npm install`
4. `bower install`
5. `grunt release`

Alternatively, you can `grunt watch` over your project as you work and point your vhost to `/build` to see the changes.

## License

Copyright (c) 2013 Daniel Kanze (MIT)
