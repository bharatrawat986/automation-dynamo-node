require("dotenv").config();

const dynamoose = require("dynamoose");

dynamoose.Promise = global.Promise;

let AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
let AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
let AWS_REGION = process.env.AWS_REGION;

dynamoose.aws.sdk.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});
const db = {};
db.dynamoose = dynamoose;
db.companies = require("./companies.model")(dynamoose);
module.exports = db;