import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { Prisma, PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import { loadFiles } from 'graphql-import-files'
import http from 'http'
import { resolvers } from './resolvers'

export interface MyContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
}

const { json } = bodyParser
const app = express()
const httpServer = http.createServer(app)

async function main(): Promise<void> {
  const typeDefs = loadFiles('./typedefs/*.{graphql, gql}')

  const prisma = new PrismaClient()

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
        prisma,
      }),
    })
  )

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
}

main().catch(console.error)
