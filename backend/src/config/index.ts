import * as dotenv from "dotenv";
dotenv.config();

export const Environment = {
  HASH: process.env.HASH,
  TOKEN_KEY: process.env.TOKEN_KEY,
};
