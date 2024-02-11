import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

export default server;
