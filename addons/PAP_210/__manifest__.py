{
    'name': 'Popup decrease (PAP_102)',
    'category': 'point_of_sale',
    'description': """
Custom popup Pin Pos    
created by Nguyen Kim Hieu
=================================================
    """,
    'depends': [
        'point_of_sale',
    ],
    'auto_install': True,
    'assets': {
        'web.assets_qweb': [
            'PAP_210/static/src/xml/cus_NumberPopup.xml',
        ],
    },
    'license': 'LGPL-3',
}