Ext.define('MyApp.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    model: 'MyApp.model.Product',

    proxy: {
        type: 'ajax',
        url: 'products.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});
