import pg from "pg";
import env from "dotenv";

class DB {
  pool: pg.Pool;

  constructor() {
    env.config();
    this.pool = new pg.Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    });
  }

  async query<T extends pg.QueryResultRow = any>(sql: string, params: any[]): Promise<pg.QueryResult<T>> {
    const client = await this.pool.connect();
    try {
      const query = await client.query<T>(sql, params);
      return query;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  async disconnect(): Promise<void> {
    await this.pool.end();
  }
}

export default DB;
