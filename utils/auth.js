const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redis = require('redis');
const { promisify } = require('util');
const { SALT_ROUNDS, JWT_SECRET } = require('../api/constants');

const client = redis.createClient(process.env.REDIS_HOST);
client.on('error', (error) => {
  console.error('Redis Error', error);
  process.exit(1);
});
const getAsync = promisify(client.get).bind(client);

const hashPassword = async (password) => bcrypt.hash(password, SALT_ROUNDS);
const comparePassword = async (password, hash) => bcrypt.compare(password, hash);
const generateJWT = (data) => jwt.sign(data, JWT_SECRET, {
  issuer: 'Backend1',
  expiresIn: '20m',
});

const blackListToken = async (token) => {
  await client.set(token, token);
  const { exp } = jwt.decode(token);
  await client.expireat(token, exp);
};

const checkBlackList = async (token) => getAsync(token);

module.exports = {
  hashPassword,
  generateJWT,
  comparePassword,
  blackListToken,
  checkBlackList,
};
