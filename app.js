Ext.application({
    name: 'MyApp',         // <-- единый namespace для всех Ext.define
    appFolder: 'src',      // <-- здесь лежат все твои view/, controller/ и т.д.

    launch: function () {
        // При старте показываем только форму логина
        Ext.Viewport.removeAll();
        Ext.Viewport.add({ xtype: 'loginform' });
    }
});
