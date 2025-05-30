import { config } from 'dotenv';
import { join } from 'path';
import { cwd } from 'process';
import { DataSource, DataSourceOptions } from 'typeorm';
import { getAppModeEnv } from '../utility/env';

config({
  path: getAppModeEnv(),
});

const isDev = (process.env.APP_MODE ?? 'dev') === 'dev';

export const typeormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 3306),
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? 'password',
  database: process.env.DB_NAME ?? 'mashup_node',
  synchronize: isDev,
  logging: isDev,
  entities: [join(cwd(), 'dist', '**', `*.entity.js`)],
  migrations: [join(cwd(), 'dist', 'migrations', '*.js')],
};

export const AppDataSourceConfig = new DataSource(typeormConfig);
