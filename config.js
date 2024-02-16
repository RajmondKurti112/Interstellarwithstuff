const config = {
  routes: true, // Change this to false if you just want to host a bare server.
  local: true, // Change this to false to disable local assets.
  challenge: true,
  users: {
    // username: 'password', you can add multiple users
  },
}

config.users[process.env.USER1] = process.env.USER1P;
config.users[process.env.USER2] = process.env.USER2P;
config.users[process.env.USER3] = process.env.USER3P;
config.users.interstellar = 'password';

export default config;
