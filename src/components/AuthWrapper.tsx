import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';

import FileUpload from './FileUpload';

Amplify.configure(config);

export function AuthWrapper({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>

      <FileUpload />

      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AuthWrapper);