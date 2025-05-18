Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    onProductsClick: function () {
        const tabPanel = this.getView().down('#tabPanel');
        let existingTab = tabPanel.getItems().findBy(tab => tab.getTitle && tab.getTitle() === 'Товары');
        if (existingTab) {
            tabPanel.setActiveItem(existingTab);
            return;
        }
        const tab = tabPanel.add({
            xtype: 'product-grid',
            title: 'Товары',
            closable: true,
        });
    tabPanel.setActiveItem(tab);
},
    onLogoutClick: function () {
    Ext.Msg.show({
        title: 'Выход',
        message: 'Вы действительно хотите выйти?',
        buttons: [
            { text: 'Да', itemId: 'yes' },
            { text: 'Нет', itemId: 'no' }
        ],
        fn: btn => {
            if (btn === 'yes') {
                Ext.Viewport.removeAll();
                Ext.Viewport.add({ xtype: 'loginform' });
            }
        }
    });
    }
});
