require("dotenv").config({ path: "src/config/.env" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set. Put it in src/config/.env");
}

const common = {
  dialect: "postgres",
  url: databaseUrl,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...common },
  test: { ...common },
  production: { ...common },
};