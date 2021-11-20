# @conjoons/extjs-dev-imapusersim ![MIT](https://img.shields.io/npm/l/@conjoon/extjs-dev-imapusersim) [![npm version](https://badge.fury.io/js/@conjoon%2Fextjs-dev-imapusersim.svg)](https://badge.fury.io/js/@conjoon%2Fextjs-dev-imapusersim)

This Sencha ExtJS NPM package contains mock data for development of [conjoon/extjs-app-imapuser](https://github.com/conjoon/extjs-app-imapuser).
When using this package, configured backend requests of `extjs-app-imapuser` will be intercepted.

## Installation
```bash
$ npm install --save-dev @conjoon/extjs-dev-imapusersim
```

If you want to develop with this package, run the `build:dev`-script afterwards:
```bash
$ npm run build:dev
```
Testing environment will then be available via

```bash
$ npm test
```

For using the package as an external dependency in an application, use
```bash
$ npm install --save-prod @conjoon/extjs-dev-imapusersim
```
In your `app.json`, add this package as a requirement, and make sure your ExtJS `workspace.json`
is properly configured to look up local repositories in the `node_modules`-directory.

Example (`workspace.json`) :
```json 
{
  "packages": {
    "dir": "${workspace.dir}/node_modules/@l8js,${workspace.dir}/node_modules/@conjoon,${workspace.dir}/node_modules/@coon-js,${workspace.dir}/packages/local,${workspace.dir}/packages,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name},${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-treegrid,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-base,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-ios,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-aria,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neutral,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-classic,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-gray,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-crisp-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-neptune-touch,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-triton,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-graphite,${workspace.dir}/node_modules/@sencha/ext-${toolkit.name}-theme-material,${workspace.dir}/node_modules/@sencha/ext-calendar,${workspace.dir}/node_modules/@sencha/ext-charts,${workspace.dir}/node_modules/@sencha/ext-d3,${workspace.dir}/node_modules/@sencha/ext-exporter,${workspace.dir}/node_modules/@sencha/ext-pivot,${workspace.dir}/node_modules/@sencha/ext-pivot-d3,${workspace.dir}/node_modules/@sencha/ext-ux,${workspace.dir}/node_modules/@sencha/ext-font-ios",
    "extract": "${workspace.dir}/packages/remote"
  }
}
```

## Configuration options

- `auth.url` - In order to properly intercept outgoing requests to the services as described in 
  [rest-api-mail](https://github.com/conjoon/rest-api-description),
  the package needs to be configured with a regular expression representing the url to catch.
  The package is pre-configured so that it catches urls in the form of `https://php-ms-imapuser.ddev.site/rest-imapuser/api/v0/auth`.
- `auth.enabled` - If this package is used with your development or production environment, intercepting urls can be enabled/disabled by changing the property `enabled`
  to either `true` or `false`.
- `auth.delay` - the delay in milliseconds to mimic network latency

## Usage
Update the `app.json` of the application by specifying this package in the `uses`-property in 
either the `development` and/or `prodution` section:

*Example:*
```json
{
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
}
```
