const apiPath = 'api/v1';

export const appPaths = {
  signUp: '/signup',
  login: '/login',
  chat: '/',
  notFound: '*',
};

export const apiRoutes = {
  signup: () => [apiPath, 'signup'].join('/'),
  login: () => [apiPath, 'login'].join('/'),
  channels: () => [apiPath, 'channels'].join('/'),
  messages: () => [apiPath, 'messages'].join('/'),
};
