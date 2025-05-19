Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        const form = this.getView();
        const vals = form.getValues();

        if (vals.login === 'admin' && vals.password === 'padmin') {
            Ext.Viewport.removeAll(true,true);
            Ext.Viewport.add({ xtype: 'mainview' }); 
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    }
});
