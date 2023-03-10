odoo.define('pos_restaurant.PrintBillButton2', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const { useListener } = require('web.custom_hooks');
    const Registries = require('point_of_sale.Registries');

    class PrintBillButton2 extends PosComponent {
        constructor() {
            super(...arguments);
            useListener('click', this.onClick);
        }
        async onClick() {
            const order = this.env.pos.get_order();
            if (order.get_orderlines().length > 0) {
                order.initialize_validation_date();
                this.trigger('close-popup');
                await this.showTempScreen('BillScreen2');
            } else {
                await this.showPopup('ErrorPopup', {
                    title: this.env._t('Nothing to Print'),
                    body: this.env._t('There are no order lines'),
                });
            }
        }
    }
    PrintBillButton2.template = 'PrintBillButton2';

    ProductScreen.addControlButton({
        component: PrintBillButton2,
        condition: function() {
            return this.env.pos.config.iface_printbill;
        },
    });

    Registries.Component.add(PrintBillButton2);

    return PrintBillButton2;
});
