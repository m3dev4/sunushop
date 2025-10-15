import dotenv from "dotenv";
import { getEnv } from "../../common/utils/get.env.ts";

dotenv.config();

const appConfig = () => {
  const isDeveloppement = getEnv("NODE_ENV", "developpement") === "developpement";

  const DEV_JWT_SECRET = "dev_jwt_secret_ne_pas_utiliser_en_production";
  const DEV_JWT_REFRESH_SECRET = "dev_jwt_refresh_secret_ne_pas_utiliser_en_production";

  return {
    NODE_ENV: getEnv("NODE_ENV", "developpement"),
    PORT: getEnv("PORT", "8080"),
  };
};

export const config = appConfig();
