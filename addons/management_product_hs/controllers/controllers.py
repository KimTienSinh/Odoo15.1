# -*- coding: utf-8 -*-
# from odoo import http


# class ManagementProductHs(http.Controller):
#     @http.route('/management_product_hs/management_product_hs', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/management_product_hs/management_product_hs/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('management_product_hs.listing', {
#             'root': '/management_product_hs/management_product_hs',
#             'objects': http.request.env['management_product_hs.management_product_hs'].search([]),
#         })

#     @http.route('/management_product_hs/management_product_hs/objects/<model("management_product_hs.management_product_hs"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('management_product_hs.object', {
#             'object': obj
#         })
