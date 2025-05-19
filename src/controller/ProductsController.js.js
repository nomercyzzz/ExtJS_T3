Ext.define('MyApp.view.products.ProductsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.products',

    init: function() {
        const store = Ext.getStore('Products');
        if (store) {
            store.load();
        }
    },

    onFilterEnterKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.onFilter();
        }
    },

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
    },

    onNameEditClick: function(grid, info) {
        this.showProductForm(info.record);
    },

    showProductForm: function(record) {
        const editedRecord = record.copy(record.id);

        const form = Ext.create({
            xtype: 'product-form',
            title: 'Редактирование: ' + record.get('name'),
            record: editedRecord,
            originalRecord: record
        });

        form.query('textfield[name=name]')[0].setValue(editedRecord.get('name'));
        form.query('textfield[name=description]')[0].setValue(editedRecord.get('description'));
        form.query('numberfield[name=price]')[0].setValue(editedRecord.get('price'));
        form.query('numberfield[name=quantity]')[0].setValue(editedRecord.get('quantity'));

        Ext.Viewport.add(form);
        form.show();
    },

    onCancelForm: function() {
        this.getView().destroy();
    },

    onSaveForm: function() {
        const form = this.getView();
        const editedRecord = form.record;
        const originalRecord = form.originalRecord;
        const store = originalRecord.store;

        const newValues = {
            name: form.query('textfield[name=name]')[0].getValue(),
            description: form.query('textfield[name=description]')[0].getValue(),
            price: form.query('numberfield[name=price]')[0].getValue(),
            quantity: form.query('numberfield[name=quantity]')[0].getValue()
        };

        let hasChanges = false;
        Ext.Object.each(newValues, function (key, value) {
            if (originalRecord.get(key) !== value) {
                hasChanges = true;
                return false;
            }
        });

        const saveChanges = function () {
            originalRecord.set(newValues);

            if (store) {
                if (store.autoSync) {
                    store.sync({
                        success: function() {
                            form.destroy();
                            Ext.toast('Изменения сохранены', 3000);
                        },
                        failure: function() {
                            Ext.toast('Ошибка сохранения', 3000, 'error');
                        }
                    });
                } else {
                    originalRecord.commit();
                    form.destroy();
                    Ext.toast('Изменения сохранены', 3000);
                }
            } else {
                form.destroy();
            }
        };

        if (hasChanges){
                        Ext.Msg.show({
                title: 'Изменения обнаружены',
                message: 'Вы внесли изменения. Сохранить их?',
                buttons: [
                    { text: 'Да', itemId: 'yes' },
                    { text: 'Нет', itemId: 'no' }
                ],
                fn: btn => {
                    if (btn === 'yes') {
                        saveChanges();
                    }
                }
            });
        } else {
            saveChanges();
        }
    }
});
