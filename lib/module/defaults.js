module.exports = {
  //  -- Error handling --

  resetOnError: false,

  // -- Authorization --

  scopeKey: 'scope',

  // -- Redirects --

  rewriteRedirects: true,

  fullPathRedirect: false,

  watchLoggedIn: true,

  redirect: {
    login: '/login',
    logout: '/',
    home: '/',
    callback: '/login'
  },

  //  -- Vuex Store --

  vuex: {
    namespace: 'auth'
  },

  // -- Cookie Store --

  cookie: {
    prefix: 'auth.',
    options: {
      path: '/'
    }
  },

  // -- localStorage Store --

  localStorage: {
    prefix: 'auth.'
  },

  // -- Token --

  token: {
    prefix: '_token.'
  },

  // -- Refresh token --

  refresh_token: {
    prefix: '_refresh_token.'
  },

  // -- Expires In --

  expires_in: {
    prefix: '_expires_in.'
  },

  // -- Okta User Id --

  okta_user_id: {
    prefix: '_okta_user_id.'
  },

  // -- Strategies --

  defaultStrategy: undefined /* will be auto set at module level */,

  strategies: {
    local: {
      endpoints: {
        login: {
          url: '/api/auth/login',
          method: 'post',
          propertyName: 'token'
        },
        logout: {
          url: '/api/auth/logout',
          method: 'post'
        },
        user: {
          url: '/api/auth/user',
          method: 'get',
          propertyName: 'user'
        }
      }
    }
  }
}
