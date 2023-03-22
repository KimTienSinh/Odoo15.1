odoo.define('point_of_sale.ProductList', function(require) {
    'use strict';

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');
    // const Chrome = require('point_of_sale.Chrome');
    // const Gui = require('point_of_sale.Gui');

    // const pos_model = require('point_of_sale.models');
    // pos_model.load_fields("product.product", ["lst_product_hs"]);


    class ProductList extends PosComponent {
        // get displayedProducts() {
        //     //return this.props.products.filter(product => !product.lst_product_hs.some(hs => hs.hide_product_in_pos));
        //     //return !product.lst_product_hs.find(hs => hs.hide_product_in_pos);
        // }
        // get filteredProducts() {
        //     const products = this.props.products;
        //     const filteredProducts = products.filter((product) => {
        //         const lstProductHS = product.lst_product_hs || [];
        //         const hideProductInPos = lstProductHS.some((productHS) => {
        //             return productHS.hide_product_in_pos;
        //         });
        //         return !hideProductInPos;
        //     });
        //     return filteredProducts;
        // }
    }
    ProductList.template = 'ProductList';

    Registries.Component.add(ProductList);

    return ProductList;
});
