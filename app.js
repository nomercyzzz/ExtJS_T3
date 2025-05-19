Ext.application({
    name: 'MyApp',
    appFolder: 'src',  

    launch: function () {

        Ext.Viewport.removeAll();
        Ext.Viewport.add({ xtype: 'loginform' });
    }
});
