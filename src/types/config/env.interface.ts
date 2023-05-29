interface IEnvConfig {
  env: string;
  http: {
    port: number;
    allowHosts: string[];
    allowCredentials: boolean;
  };
  db: {
    type: string;
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
    dbDrop: boolean;
    dbSync: boolean;
  };
  auth: {
    jwt: {
      secretKey: string;
      expiredAt: string;
    };
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    s3: {
      bucketName: string;
      bucketResizeName: string;
      bucketRegion: string;
      signedUrlExpires: number;
    };
  };
}

export default IEnvConfig;
