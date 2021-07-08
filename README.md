# @conjoons/extjs-dev-imapusersim 
This Sencha ExtJS NPM package contains mock data for development of [conjoon/extjs-app-imapuser](https://github.com/conjoon/extjs-app-imapuser).
When using this package, all backend requests of `extjs-app-imapuser` will be replaced with mocks.

## Installation
```
npm install --save-dev @conjoon/extjs-dev-imapusersim
```

## Usage
Simply update the app.json of the conjoon-application
by specifying this package in the `uses`-property in either the `development` and/or `prodution` section:

*Example:*
````javascript
"development": {
        "uses" : [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim"
        ]
},
"production": {
        "uses" : [
            "extjs-app-imapuser",
            "extjs-app-webmail"
        ]
}
````

Notice how in the example above all backend requests made by the [conjoon/extjs-app-imapuser](https://github.com/conjoon/extjs-app-imapuser) package
will be intercepted by the backend-mocks of the `extjs-dev-imapusersim` package when using the development-version.

## Dev 
### Naming
The following naming conventions apply:

#### Namespace
`conjoon.dev.cn_imapusersim.*`
#### Package name
`extjs-dev-imapusersim`
#### Shorthand to be used with providing aliases
`cn_imapusersim`