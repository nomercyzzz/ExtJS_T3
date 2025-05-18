Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'main',
    layout: 'vbox',

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                { text: 'Товары', handler: 'onProductsClick' },
                '->',
                { text: 'Выход', handler: 'onLogoutClick' }
            ]
        },
        {
            xtype: 'tabpanel',
            itemId: 'tabPanel',
            flex: 1, 
            tabBarPosition: 'top',
            items: []
            
        }
    ]
});
