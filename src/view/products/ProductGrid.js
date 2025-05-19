Ext.define('MyApp.view.products.ProductGrid', {
    extend: 'Ext.Container',
    xtype: 'product-grid',
    controller: 'products', 
    layout: 'vbox',

    requires: [
        'MyApp.store.Products'
    ],

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
                        specialkey: 'onFilterEnterKey' 
                    }
                },
                {
                    xtype: 'textfield',
                    itemId: 'descFilter',
                    label: 'Описание',
                    labelWidth: 110,
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: 'onFilterEnterKey' 
                    }
                },
                {
                    xtype: 'button',
                    text: 'Сбросить фильтры',
                    handler: 'onClearFilters' 
                }
            ]
        },
        {
            xtype: 'grid',
            flex: 1,
            store: {
                type: 'products',
                autoLoad: true
            },
            columns: [
                { 
                    text: 'ID', 
                    dataIndex: 'id', 
                    width: 50 
                },
                {
                    text: 'Имя',
                    dataIndex: 'name',
                    flex: 1,
                    cell: {
                        tools: {
                            edit: {
                                iconCls: 'x-fa fa-edit',
                                tooltip: 'Редактировать',
                                handler: 'onNameEditClick'
                            }
                        }
                    }
                },
                { 
                    text: 'Описание', 
                    dataIndex: 'description', 
                    flex: 1 
                },
                { 
                    text: 'Цена', 
                    dataIndex: 'price', 
                    width: 100,
                    renderer: function(value) {
                        return Ext.util.Format.number(value, '0,000');
                    }
                },

                {
                    text: 'Кол-во',
                    dataIndex: 'quantity',
                    width: 100,
                    cell: {
                        encodeHtml: false
                    },
                    renderer: function(value) {
                        if (value == 0) {
                            return '<span style="background-color:red; color:white; display:block; width:100%;">' + value + '</span>';
                        }
                        return value;
                    }
                }
            ],
            listeners: {
                itemclick: 'onGridItemClick'
            }
        }
    ]
});