/**
 * conjoon
 * dev-cn_imapusersim
 * Copyright (C) 2019 Thorsten Suckow-Homberg https://github.com/conjoon/dev-cn_imapusersim
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
 * Ext.ux.ajax.SimManager hook for Authenticating a user against an IMAP server.
 */
Ext.define('conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.auth.AuthenticationSim', {

    requires : [
        'conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.Init'
    ]

}, function() {



    Ext.ux.ajax.SimManager.register({
        type : 'json',

        url  : /cn_imapuser\/auth(\/\d+)?/,

        doPost: function(ctx) {
            const me = this,
                  params = ctx.xhr.options.params,
                  username = params.username,
                  password = params.password,
                  ret = {}

            ret.responseText = Ext.JSON.encode({
                success : true,
                data : {
                    firstname : 'John',
                    lastname : 'Smith',
                    username : username,
                    emailAddress : username,
                    isRoot : false,
                    lastLogin : new Date(),
                    password : password
                }
            });

            Ext.Array.forEach(me.responseProps, function (prop) {
                if (prop in me) {
                    ret[prop] = me[prop];
                }
            });

            if (username === "TESTFAIL") {
                ret.responseText = Ext.JSON.encode({
                    success : false
                });
                ret.status = 401;
            }

            return ret;


        }
    });

});