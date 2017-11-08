import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './Common/styles/GlobalStyles.css';

// Import the SDK and Project Configuration
import AWS from 'aws-sdk';
import awsmobile from './aws-exports';

// Configure the SDK to use anonymous identity
AWS.config.update({
  region: awsmobile.aws_cognito_region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsmobile.aws_cognito_identity_pool_id
  })
});

ReactDOM.render(<Routes />, document.getElementById('root'));
