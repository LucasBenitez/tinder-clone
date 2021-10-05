import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('user.db');

export const init = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
          tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY NOT NULL,
            name TEXT NOT NULL,
            email TEXT NOT NULL
          )`,
          [],
          () => resolve(),
          (_, err) => reject(err),
        )
      });
    });
  }

  export const insertUser = (
    name,
    email
  ) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO user (name, email) VALUES (?, ?)',
          [name, email],
          (_, result) => resolve(result),
          (_, error) => reject(error),
        )
      })
    })
  }

  export const fetchUsers = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM user',
          [],
          (_, result) => resolve(result),
          (_, error) => reject(error),
        )
      })
    })
  }