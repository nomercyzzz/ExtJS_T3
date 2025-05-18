Ext.define('MyApp.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products',

    onFilter: function() {
        const view = this.getView();
        const idFilter = view.down('#idFilter').getValue();
        const descFilter = view.down('#descFilter').getValue();
        const store = view.down('grid').getStore();

        store.clearFilter(true);

        if (idFilter) {
            store.filter('id', idFilter);
        }

        if (descFilter) {
            store.filter({
                property: 'description',
                value: descFilter,
                anyMatch: true,
                caseSensitive: false
            });
        }
    },

    onClearFilters: function() {
        const view = this.getView();
        view.down('#idFilter').setValue('');
        view.down('#descFilter').setValue('');
        view.down('grid').getStore().clearFilter();
    }
});