interface IDbConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}
const dbConfig: IDbConfig = {
  user: 'shubham',
  host: 'database',
  database: 'tracker',
  password: 'helloworld',
  port: 5432,
};

export default dbConfig;
