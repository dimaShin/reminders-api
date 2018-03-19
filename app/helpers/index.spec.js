const helper = require('./index');
const config = require(`../config/config.${process.env.NODE_ENV}`);

describe('testing helper: index', () => {
  let originEnv;

  beforeEach(() => {
    originEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env.NODE_ENV = originEnv;
  });

  test('getEnv', () => {
    const env = 'whatever';
    process.env.NODE_ENV = env;

    expect(helper.getEnv()).toBe(env);
  });

  test('getConfig', () => {
    expect(helper.getConfig()).toBe(config);
  });

  describe('testing getPort', () => {
    let originPort;

    beforeEach(() => {
      originPort = process.env.PORT;
    });

    afterEach(() => {
      process.env.PORT = originPort;
    });

    test('should use env PORT if set', () => {
      const port = 8080;
      process.env.PORT = port;

      expect(helper.getPort()).toBe(port.toString());
    });

    test('should use default port if env variable is empty', () => {
      delete process.env.PORT;

      expect(helper.getPort()).toBe(config.server.PORT);
    });
  })
});
