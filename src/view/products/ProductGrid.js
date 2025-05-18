Ext.define('MyApp.view.products.ProductGrid', {
    extend: 'Ext.Container',
    xtype: 'product-grid',
    controller: 'products', 
    layout: 'vbox',

    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'numberfield',
                    itemId: 'idFilter',
                    label: 'ID товара',
                    labelWidth: 100,
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                field.up('product-grid').getController().onFilter();
                            }
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    itemId: 'descFilter',
                    label: 'Описание',
                    labelWidth: 110,
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                field.up('product-grid').getController().onFilter();
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'grid',
            flex: 1,
            store: {
                type: 'products'
            },
            columns: [
                { text: 'ID', dataIndex: 'id', width: 50 },
                {
                    text: 'Имя',
                    dataIndex: 'name',
                    flex: 1,
                    cell: {
                        encodeHtml: false
                    },
                    renderer: function(val) {
                        return `<span style="color:blue;text-decoration:underline;cursor:pointer;">${val}</span>`;
                    }
                },
                { text: 'Описание', dataIndex: 'description', flex: 1 },
                { text: 'Цена', dataIndex: 'price', width: 100 },
                {
                    text: 'Кол-во',
                    dataIndex: 'quantity',
                    width: 100,
                    cell: {
                        encodeHtml: false
                    },
                    renderer: function(val) {
                        return val === 0
                            ? `<span style="background-color:red;width:100%;position:absolute">${val}</span>`
                            : val;
                    }
                }
            ]
        }
    ]
});