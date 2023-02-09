import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { loadFiles } from 'graphql-import-files'
import http from 'http'
import { Environment } from './config'
import { resolvers } from './resolvers'
import rootService from './services'
export interface MyContext {
  rootService: typeof rootService
}

const { json } = bodyParser
const app = express()
const httpServer = http.createServer(app)

async function main(): Promise<void> {
  const typeDefs = loadFiles('./typedefs/*.{graphql, gql}')

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async () => ({
        rootService,
      }),
    })
  )

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: Environment.PORT }, resolve)
  )
  console.log(`🚀 Server is listening on ${Environment.PORT}`)
}

main().catch(console.error)
