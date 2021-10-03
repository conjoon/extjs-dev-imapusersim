# @conjoons/extjs-dev-imapusersim 
This Sencha ExtJS NPM package contains mock data for development of [conjoon/extjs-app-imapuser](https://github.com/conjoon/extjs-app-imapuser).
When using this package, configured backend requests of `extjs-app-imapuser` will be intercepted.

## Installation
```
npm install --save-dev @conjoon/extjs-dev-imapusersim
```

If you want to develop with this package, run the `build:dev`-script afterwards:
```bash
npm run build:dev
```
Testing environment will then be available via

```bash
npm test
```

## Usage
Update the `app.json` of the application by specifying this package in the `uses`-property in 
either the `development` and/or `prodution` section:

*Example:*
```json
"development": {
        "uses": [
            "extjs-dev-imapusersim",
            "extjs-app-imapuser",
            "extjs-app-webmail",
            "extjs-dev-webmailsim"
        ]
},
"production": {
        "uses": [
            "extjs-app-imapuser",
            "extjs-app-webmail"
        ]
}
```
In order to properly intercept outgoing requests to the services as described in **conjoon/rest-api-descriptions/imap-user**,
the package needs to be configured with a regular expression representing the url to catch. 
The package is pre-configured so that it catches urls in the form of `https://php-ms-imapuser.ddev.site/rest-imapuser/api/v1/auth"`.
A custom configuration can be placed in the resources-folder of the application using the package.

```json
{
    "auth": {
        "url": "https://php-ms-imapuser.ddev.site/rest-imapuser/api/v.*?/auth(/.*)?",
        "enabled": true,
        "delay": 250
    }
}
```
If this package is used in your environment, intercepting urls can be enabled/disabled by changing the property `enabled`
to either `true` or `false`.
<br>Please refer to the documentation of [extjs-lib-core](https://github.com/coon-js/extjs-lib-core) on how to
create package-specific configurations.


###Dev 
#### Namespace
`conjoon.dev.cn_imapusersim.*`
#### Package name
`extjs-dev-imapusersim`
#### Shorthand to be used with providing aliases
`cn_imapusersim`