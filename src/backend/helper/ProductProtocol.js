
const productProtocolDefinition = {
    protocol: 'https://OmniVerse.com/product',
    published: true,
    types: {
        product: {
            dataFormats: ['application/json'],
            schema: 'https://OmniVerse.com/schemas/productSchema',
            fields: {
                name: 'string',
                price: 'number',
                description: 'string',

            },
        },
        image: {
            dataFormats: ['image/png', 'image/jpeg'],
        },
    },
    structure: {
        product: {
            $actions: [
                {
                    who: 'admin',
                    can: 'create',
                },
                {
                    who: 'admin',
                    can: 'update',
                },
                {
                    who: 'user',
                    can: 'read',
                },
            ],
            image: {
                $actions: [
                    {
                        who: 'admin',
                        can: 'write',
                    },
                    {
                        who: 'user',
                        can: 'read',
                    },
                ],
            },
        },
    },
    roles: {
        user: {
            can: ['read'],
        },
        admin: {
            can: ['create', 'update', 'write', 'read'],
        },
    },
};
