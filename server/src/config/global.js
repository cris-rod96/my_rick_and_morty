import { config } from "dotenv";
config();
const { URI_DATABASE, HOST_PORT } = process.env;

export { URI_DATABASE, HOST_PORT };
