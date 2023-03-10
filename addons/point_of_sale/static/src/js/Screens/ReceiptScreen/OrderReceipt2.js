odoo.define('point_of_sale.OrderReceipt2', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    class OrderReceipt2 extends PosComponent {
        constructor() {
            super(...arguments);
            this._receiptEnv = this.props.order.getOrderReceiptEnv();
        }
        willUpdateProps(nextProps) {
            this._receiptEnv = nextProps.order.getOrderReceiptEnv();
        }
        get receipt() {
            return this.receiptEnv.receipt;
        }
        get orderlines() {
            return this.receiptEnv.orderlines;
        }
        get paymentlines() {
            return this.receiptEnv.paymentlines;
        }
        get isTaxIncluded() {
            return Math.abs(this.receipt.subtotal - this.receipt.total_with_tax) <= 0.000001;
        }
        get receiptEnv () {
          return this._receiptEnv;
        }
        isSimple(line) {
            return (
                line.discount === 0 &&
                line.is_in_unit &&
                line.quantity === 1 &&
                !(
                    line.display_discount_policy == 'without_discount' &&
                    line.price < line.price_lst
                )
            );
        }
    }
    OrderReceipt2.template = 'OrderReceipt2';

    Registries.Component.add(OrderReceipt2);

    return OrderReceipt2;
});
