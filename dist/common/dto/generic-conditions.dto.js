"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLOperator = exports.SortOrder = exports.WhereHasConditionsRelation = exports.WhereHasConditions = void 0;
const openapi = require("@nestjs/swagger");
class WhereHasConditions {
    static _OPENAPI_METADATA_FACTORY() {
        return { operator: { required: true, enum: require("./generic-conditions.dto").SQLOperator }, value: { required: true, type: () => String } };
    }
}
exports.WhereHasConditions = WhereHasConditions;
class WhereHasConditionsRelation {
    constructor() {
        this.amount = 1;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { relation: { required: true, type: () => String }, operator: { required: true, enum: require("./generic-conditions.dto").SQLOperator }, amount: { required: true, type: () => Object, default: 1 } };
    }
}
exports.WhereHasConditionsRelation = WhereHasConditionsRelation;
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SQLOperator;
(function (SQLOperator) {
    SQLOperator["EQ"] = "EQ";
    SQLOperator["NEQ"] = "NEQ";
    SQLOperator["GT"] = "GT";
})(SQLOperator = exports.SQLOperator || (exports.SQLOperator = {}));
//# sourceMappingURL=generic-conditions.dto.js.map