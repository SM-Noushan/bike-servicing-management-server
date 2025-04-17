/* eslint-disable no-console */
import app from './app';
import { Server } from 'http';
import config from './app/config';

let server: Server;

const PORT = config.port;

async function main() {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
main();

process.on('unhandledRejection', () => {
  if (server) server.close(() => process.exit(1));
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('Uncaught Exception! Shutting down...');
  process.exit(1);
});
