const flatten = require("flat");
const _ = require("lodash");

module.exports = (eventName, data) => {

    const whiteList = require("../config/white-list.json");
    const bodyFlat = flatten(data);

    const result = _.pickBy(bodyFlat, function (value, key) {
        return (whiteList.fields.indexOf(key) !== -1);
    });

    result["eventType"] = "BitbucketEvent";

    return result;
};
