const express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    request = require("request"),
    swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./documentation.json");

const jsonParser = bodyParser.json();

const config = require("./config/config.js"),
    eventsTransformer = require("./transformers/events");

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/insights/:accountNumber/key/:xinsertkey", jsonParser, (req, res) => {
    const accountNumber = req.params["accountNumber"];
    const xInsertKey = req.params["xinsertkey"];

    const insightEvent = eventsTransformer(req.body);

    request.post(`${config.insights_host}/v1/accounts/${accountNumber}/events`, {
        headers:
            {
                "X-Insert-Key": xInsertKey
            },
        json: insightEvent
    }, (error, response, body) => {
        if (error) {
            res.json(
                {
                    statusCode: 500,
                    message: error,
                }
            );
        }
        res.json(
            {
                statusCode: response.statusCode,
                message: body,
            }
        );
    });
});


app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;
