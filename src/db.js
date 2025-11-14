import { openDB } from "idb";

const DB_NAME = "EmpleadosDB";
const STORE_NAME = "empleados";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "name" });
      }
    },
  });
}

export async function getAllEmployes() {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
}

export async function addEmploye(employe) {
  const db = await initDB();
  await db.put(STORE_NAME, employe);
}

export async function deleteEmploye(name) {
  const db = await initDB();
  await db.delete(STORE_NAME, name);
}

export async function updateEmploye(employe) {
  const db = await initDB();
  await db.put(STORE_NAME, employe);
}
