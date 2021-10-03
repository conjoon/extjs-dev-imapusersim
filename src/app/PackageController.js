/**
 * conjoon
 * extjs-dev-imapusersim
 * Copyright (C) 2019-2021 Thorsten Suckow-Homberg https://github.com/conjoon/extjs-dev-imapusersim
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * PackageController for the extjs-dev-imapusersim package.
 * Inits the simlet for mocking authorization requests.
 */
Ext.define("conjoon.dev.cn_imapusersim.app.PackageController", {

    extend: "coon.core.app.PackageController",


    requires: [
        "Ext.ux.ajax.SimManager",
        "conjoon.dev.cn_imapusersim.data.AuthenticationSim"
    ],


    /**
     * Initializes the package with the simlet.
     * @param app
     */
    init (app) {
        "use strict";

        const
            me = this,
            config = app.getPackageConfig(me, "auth");

        if (!config.enabled) {
            return;
        }

        const regex =  new RegExp(config.url, "im");

        Ext.ux.ajax.SimManager.register(
            Ext.create("conjoon.dev.cn_imapusersim.data.AuthenticationSim", {
                url: regex,
                delay: config.delay
            })
        );

    }

});