odoo.define('pos_restaurant.BillScreen2', function (require) {
    'use strict';

    const ReceiptScreen = require('point_of_sale.ReceiptScreen');
    const Registries = require('point_of_sale.Registries');

    const BillScreen2 = (ReceiptScreen) => {
        class BillScreen2 extends ReceiptScreen {
            confirm() {
                this.props.resolve({ confirmed: true, payload: null });
                this.trigger('close-temp-screen');
            }
            whenClosing() {
                this.confirm();
            }
            /**
             * @override
             */
            async printReceipt() {
                await super.printReceipt();
                this.currentOrder._printed = false;
            }
        }
        BillScreen2.template = 'BillScreen2';
        return BillScreen2;
    };

    Registries.Component.addByExtending(BillScreen2, ReceiptScreen);

    return BillScreen2;
});
