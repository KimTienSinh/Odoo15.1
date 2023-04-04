{
    'name': 'Hide input popup (PAP_234)',
    'category': 'point_of_sale',
    'description': """
CHide input number popup close pos     
created by Nguyen Kim Hieu
=================================================
    """,
    'depends': [
        'point_of_sale',
    ],
    'auto_install': True,
    'assets': {
        'web.assets_qweb': [
            'PAP_234/static/src/xml/cus_ClosePosPopup.xml',
            'PAP_234/static/src/xml/cus_CashOpeningPopup.xml',
        ],
    },
    'license': 'LGPL-3',
}