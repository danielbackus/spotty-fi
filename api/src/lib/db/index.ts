import "reflect-metadata"; // typeorm requires this shim
import { createConnection } from "typeorm";
export { Connection, getConnection } from "typeorm";

// once you call connect, you can call typeorm.getConnection from anywhere to get this connection
export const connect = () => createConnection();
