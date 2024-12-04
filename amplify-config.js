export const amplifyConfig = {
    Storage: {
      region: import.meta.env.PUBLIC_AWS_REGION,
      bucket: import.meta.env.PUBLIC_S3_BUCKET,
      identityPoolId: import.meta.env.PUBLIC_IDENTITY_POOL_ID
    }
  };
  