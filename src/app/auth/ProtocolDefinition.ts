const ProtocolDefinition = {
    protocol: "https://OmniVerse",
    published: true,
    types: {
        Image: {
            dataFormats: ["image/png", "image/jpeg"]
        },
        ProductName: {
            dataFormats: ["application/json"]
        },
        Price: {
            dataFormats: ["application/json"]
        },
        Rating: {
            dataFormats: ["application/json"]
        },
        Id: {
            dataFormats: ["application/json"]
        },
        Product: {
            dataFormats: ["application/json"]
        },

    },
    structure: {
        Product: {
            $actions: [
                {
                    who: "anyone",
                    can: "write"
                },
                {
                    who: "anyone",
                    can: "read"
                }
            ],
            Id: {
                $actions: [
                    {
                        who: "anyone",
                        can: "write"
                    },
                    {
                        who: "anyone",
                        can: "read"
                    }
                ]
            },
            Image: {
                $actions: [
                    {
                        who: "anyone",
                        can: "write"
                    },
                    {
                        who: "anyone",
                        can: "read"
                    }
                ]
            },
            ProductName: {
                $actions: [
                    {
                        who: "anyone",
                        can: "write"
                    },
                    {
                        who: "anyone",
                        can: "read"
                    }
                ]
            },
            Price: {
                $actions: [
                    {
                        who: "anyone",
                        can: "write"
                    },
                    {
                        who: "anyone",
                        can: "read"
                    }
                ]
            },
            Rating: {
                $actions: [
                    {
                        who: "anyone",
                        can: "write"
                    },
                    {
                        who: "anyone",
                        can: "read"
                    }
                ]
            }
        }
    }
};

export default ProtocolDefinition;
