Ext.define('MyApp.view.login.LoginForm', {
    extend: 'Ext.form.Panel',                                                         
    xtype: 'loginform',
    controller: 'login',
    title: 'Форма входа',
    centered: true,
    width: 400,
    shadow: true,
    bodyPadding: 24,
    style: {
        'background': '#232323',
        'border-radius': '12px'
    },
    items: [
        {
            xtype: 'textfield',
            label: 'Логин',
            name: 'login',
            clearable: true,
            labelAlign: 'placeholder',
            style: {
                'margin-bottom': '24px',
            }
        },
        {
            xtype: 'passwordfield',
            label: 'Пароль',
            name: 'password',
            clearable: true,
            labelAlign: 'placeholder',
            revealable: true,
            style: {
                'margin-bottom': '32px'
            }
        },
        {
            xtype: 'button',
            text: 'Войти',
            handler: 'onLoginClick',
            ui: 'action',
            style: {
                'background': '#7c3aed',
                'color': '#fff',
                'font-size': '18px',
                'border-radius': '6px',
                'height': '44px',
                'width': '100%',
                'font-weight': 'bold'
            }
        }
    ]
});

