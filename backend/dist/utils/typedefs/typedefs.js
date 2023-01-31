"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gqlWrapper = exports.importGraphQL = void 0;
const fs_1 = __importDefault(require("fs"));
const graphql_tag_1 = require("graphql-tag");
const importGraphQL = (file) => {
    return fs_1.default.readFileSync(file, "utf-8");
};
exports.importGraphQL = importGraphQL;
const gqlWrapper = (...files) => {
    return (0, graphql_tag_1.gql) `
    ${files}
  `;
};
exports.gqlWrapper = gqlWrapper;
