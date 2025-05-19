Ext.define('MyApp.view.products.ProductForm', {
    extend: 'Ext.form.Panel',
    xtype: 'product-form',
    
    controller: 'products',
    
    floated: true,
    modal: true,
    centered: true,
    width: 400,
    bodyPadding: 10,
    
    items: [{
        xtype: 'textfield',
        name: 'name',
        label: 'Название',
        readOnly: true
    }, {
        xtype: 'textfield',
        name: 'description',
        label: 'Описание',
        readOnly: true
    }, {
        xtype: 'numberfield',
        name: 'price',
        label: 'Цена',
        minValue: 0,
        decimalPrecision: 2
    }, {
        xtype: 'numberfield',
        name: 'quantity',
        label: 'Количество',
        minValue: 0
    }],
    
    buttons: [{
        text: 'Отмена',
        handler: 'onCancelForm'
    }, {
        text: 'Сохранить',
        handler: 'onSaveForm'
    }]
});