# @conjoon/extjs-dev-imapusersim Documentation

**extjs-dev-imapusersim** is a **coon.js** package and is tagged as such in the
`package.json`:

```json
{
  "coon-js": {
    "package": {
      "autoLoad": {
        "registerController": true
      },
      "config": "${package.resourcePath}/extjs-dev-imapusersim.conf.json"
    }
  }
}
```

By default, this package's configuration can be found in this package's `resources` folder
in a file named `extjs-dev-imapusersim.conf.json`.

## What goes into a `extjs-dev-imapusersim` configuration?

The package intercepts outgoing network requests to all urls matching a specific
url-pattern. Additionally, you can configure whether the package's url intercepting should
be enabled or disabled - this makes it easier to use this package in environments where
you have to test for fully functional network behavior with real HTTP-requests and live- and mock-data should be used side-by-side.

The configuration file for this package has an entry `auth` that holds the following keys: `url`, `enabled`, `delay`:

```json
{
    "auth": {
        "url": "https://ddev-ms-email.ddev.site/rest-imapuser/api/v.*?/auth(/.*)?",
        "enabled": true,
        "delay": 250
    }
}
```


- `url` - In order to properly intercept outgoing requests to the services as described in
  [rest-api-mail](https://github.com/conjoon/rest-api-description),
  the package needs to be configured with a regular expression representing the url to catch.
  The package is pre-configured. For example, HTTP-requests to the following URLs are intercepted by this package:
   - `https://dev-ms-email.ddev.site/rest-imapuser/api/v0/auth`
   - `https://dev-ms-email.ddev.site/rest-imapuser/api/v1/auth?dc=22424sff4`

- `enabled` - If this package is used with your development or production environment, intercepting urls can be enabled/disabled by changing the property `enabled`
  to either `true` or `false`.
- `delay` - the delay in milliseconds to mimic network latency

## Response Data
If an url was intercpted, static data is returned to mimic responses of backends
fully implementing the [REST API](https://github.com/conjoon/rest-api-description). The data returned
can be edited in this package's `src/data/AuthenticationSim.js`.