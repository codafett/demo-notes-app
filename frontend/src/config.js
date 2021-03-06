const config = {
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
  // UI config
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51KidGAB6eVgwwAOzRqxNcnmfSsGqAfnyrGmZOYZrXRTJs34LFBPdbic2ANWSwLTUuyARk8CRRvdKQdnsgXnLLDOL00ySlzUkwd",
  SENTRY_DSN: "https://fe723e3c0c1d4e0db50b239dd06e851b@o1193069.ingest.sentry.io/6315229",
};

export default config;