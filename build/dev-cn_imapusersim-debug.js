Ext.define('conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.Init', {requires:['Ext.ux.ajax.JsonSimlet', 'Ext.ux.ajax.SimManager'], singleton:true, constructor:function() {
  Ext.ux.ajax.SimManager.init({delay:1, defaultSimlet:null});
}});
Ext.define('conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.auth.AuthenticationSim', {requires:['conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.Init']}, function() {
  Ext.ux.ajax.SimManager.register({type:'json', url:/cn_imapuser\/auth(\/\d+)?/, doPost:function(ctx) {
    const me = this, params = ctx.xhr.options.params, username = params.username, password = params.password, ret = {};
    ret.responseText = Ext.JSON.encode({data:{firstname:'John', lastname:'Smith', username:username, emailAddress:username, isRoot:false, lastLogin:new Date, password:password}});
    Ext.Array.forEach(me.responseProps, function(prop) {
      if (prop in me) {
        ret[prop] = me[prop];
      }
    });
    if (username === 'TESTFAIL') {
      ret.status = 401;
    }
    return ret;
  }});
});
Ext.define('conjoon.dev.cn_imapusersim.data.imapuser.PackageSim', {requires:['conjoon.dev.cn_imapusersim.data.imapuser.ajax.sim.auth.AuthenticationSim']});
Ext.define('conjoon.dev.cn_imapusersim.app.PackageController', {extend:'coon.core.app.PackageController', requires:['conjoon.dev.cn_imapusersim.data.imapuser.PackageSim']});
