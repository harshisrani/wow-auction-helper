import * as mysql from 'mysql';
import {DATABASE_CREDENTIALS} from '../secrets';
import {Connection, MysqlError} from 'mysql';

export class DatabaseUtil {
  connection: Connection;

  constructor() {
    this.connection = mysql.createConnection(DATABASE_CREDENTIALS);
  }

  query(query: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.connection.query(query, (error: MysqlError, rows: any[]) => {
        this.connection.end();

        if (error) {
          reject(error);
          return;
        }

        resolve(rows);
      });
    });
  }
}