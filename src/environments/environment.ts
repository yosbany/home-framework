// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBasfgI4OwXn5nQNClTwn1hNVT2KDMiHBM',
    authDomain: 'db-home-administration.firebaseapp.com',
    databaseURL: 'https://db-home-administration.firebaseio.com',
    projectId: 'db-home-administration',
    storageBucket: 'db-home-administration.appspot.com',
    messagingSenderId: '213870382676'
  }
};
