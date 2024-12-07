import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const getDbInstance = async () => {
  const db = await open({
    filename: 'KoboReader.sqlite', // Path to the SQLite file
    driver: sqlite3.Database,
  });
  return db;
};