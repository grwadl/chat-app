"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// npm install @apollo/server express graphql cors body-parser
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const graphql_import_files_1 = require("graphql-import-files");
const http_1 = __importDefault(require("http"));
const resolvers_1 = require("./resolvers");
const { json } = body_parser_1.default;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
async function main() {
    const typeDefs = (0, graphql_import_files_1.loadFiles)("./typedefs/*.{graphql, gql}");
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers: resolvers_1.resolvers,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    await server.start();
    app.use("/graphql", (0, cors_1.default)(), json(), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }));
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}
main().catch(console.error);
