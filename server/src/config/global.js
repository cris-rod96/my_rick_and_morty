import { config } from "dotenv";
config();
const { URI_DATABASE_DEPLOY, HOST_PORT, URI_DATABASE_LOCAL, NODE_ENV } =
  process.env;

const DB_URI = NODE_ENV
  ? {
      URI: URI_DATABASE_DEPLOY,
      CONFIG: {
        logging: false,
        native: false,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
      },
    }
  : {
      URI: URI_DATABASE_LOCAL,
      CONFIG: {
        logging: false,
        native: false,
      },
    };

export { DB_URI, HOST_PORT };
