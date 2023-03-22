# -*- coding: utf-8 -*-

from odoo import models, fields, api


class management_product_hs(models.Model):
    _name = 'management.product_hs'
    _description = 'management.product_hs'


    id_product = fields.Many2one('product.product', string='Product', required=True)
    id_pos = fields.Many2one('pos.config', string='POS Configuration', required=True)
    hide_product_in_pos = fields.Boolean(string='Hide Product in POS')


    
    # @api.constrains('id')
    # def toggle_hide_in_pos(self):
    #     for record in self:
    #         record.hide_product_in_pos = not record.hide_product_in_pos
    

