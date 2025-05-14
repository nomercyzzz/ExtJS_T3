Ext.define('ModernLoginApp.controller.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(btn) {
        const form = btn.up('formpanel'),
            values = form.getValues();

        if (values.user === 'admin' && values.pass === 'padmin') {
            Ext.Viewport.removeAll(true, true);
            Ext.Viewport.add({ xtype: 'mainview' }); 
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    },
});