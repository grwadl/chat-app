"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const mutations_1 = require("./mutations");
const queries_1 = require("./queries");
exports.resolvers = {
    Query: queries_1.RootQuery,
    Mutation: mutations_1.RootMutation,
};
