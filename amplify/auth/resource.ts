// import { defineAuth } from '@aws-amplify/backend';

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//   },
// });
import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET')
      },
      scopes: ['EMAIL'],
      
      callbackUrls: [
        'https://localhost:5173',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['https://localhost:5173/', 'https://mywebsite.com'],
    }
  }
});