var config = {
  username: "username",
  password: "password"
};

if(process.env.XFE_USERNAME) {
  config.username = process.env.XFE_USERNAME
}

if(process.env.XFE_PASSWORD) {
  config.password = process.env.XFE_PASSWORD
}

module.exports = config;
