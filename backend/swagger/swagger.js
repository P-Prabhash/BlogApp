const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Blog App API",
            version: "1.0.0",
            description: "Blog Application REST API"
        },

        servers: [
            {
                url: "http://localhost:5000"
            }
        ],

        tags: [
            {
                name: "Blogs",
                description: "Blog management APIs"
            }
        ]
    },

    apis: ["./routes/blogRoutes.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;