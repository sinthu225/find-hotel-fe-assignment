const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
};




module.exports = (on, config) => {
  // create new config settings
  const configOverride = {};
  if (config.env.userAgent === 'mobile') {
      configOverride.userAgent = 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36';
      configOverride.testFiles = 'mobile/**/*.*';
      configOverride.viewportWidth =414;
      configOverride.viewportWidth =736;
  } else {
      configOverride.userAgent = 'none';
  }
  require("cypress-fail-fast/plugin")(on, config);

  return Object.assign({}, config, configOverride);
};