import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import ENV_CONFIG from './env';

export const OrmModuleConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: ENV_CONFIG.db.host,
  port: ENV_CONFIG.db.port,
  username: ENV_CONFIG.db.username,
  password: ENV_CONFIG.db.password,
  database: ENV_CONFIG.db.database,
  entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
  namingStrategy: new SnakeNamingStrategy(),
  dropSchema: false,
  synchronize: false,
  logging: ENV_CONFIG.db.dbLogging,
  logger: ENV_CONFIG.db.dbLogger,
};

const OrmMigrationConfig = new DataSource({
  type: 'mysql',
  host: ENV_CONFIG.db.host,
  port: ENV_CONFIG.db.port,
  username: ENV_CONFIG.db.username,
  password: ENV_CONFIG.db.password,
  database: ENV_CONFIG.db.database,
  entities: [path.join(__dirname, '/../**/*.entity.{js,ts}')],
  migrations: [path.join(__dirname, '/../database/migrations/*{.ts,.js}')],
  namingStrategy: new SnakeNamingStrategy(),
  dropSchema: false,
  synchronize: false,
});

export default OrmMigrationConfig;
