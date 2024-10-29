import { Cabin } from "../../data/types";
import DB from "../../database/db";

class CabinsDAO {
  private db: DB;

  constructor() {
    this.db = new DB();
  }

  async getCabins() {
    try {
      const sql = `SELECT * FROM "cabins"`;
      const data = await this.db.query(sql, []);
      return data.rows;
    } catch (error: any) {
      throw new Error(`Error fetching cabins: ${error.message}`);
    }
  }

  async getCabin(id: number) {
    try {
      const sql = `SELECT * FROM "cabins" WHERE "id" = $1`;
      const data = await this.db.query(sql, [id]);
      return data.rows.length === 1 ? data.rows[0] : null;
    } catch (error: any) {
      throw new Error(`Error fetching cabin with ID ${id}: ${error.message}`);
    }
  }

  async insertCabin(cabin: Cabin) {
    try {
      const sql = `
        INSERT INTO "cabins" ("name", "maxCapacity", "regularPrice", "discount", "description", "image")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        cabin.name,
        cabin.maxCapacity,
        cabin.regularPrice,
        cabin.discount,
        cabin.description,
        cabin.image,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error inserting cabin: ${error.message}`);
    }
  }

  async updateCabin(id: number, cabin: Cabin) {
    try {
      const sql = `
        UPDATE "cabins"
        SET "name" = $1, "maxCapacity" = $2, "regularPrice" = $3, "discount" = $4, "description" = $5, "image" = $6
        WHERE "id" = $7
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        cabin.name,
        cabin.maxCapacity,
        cabin.regularPrice,
        cabin.discount,
        cabin.description,
        cabin.image,
        id,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error updating cabin with ID ${id}: ${error.message}`);
    }
  }

  async deleteCabin(id: number) {
    try {
      const sql = `DELETE FROM "cabins" WHERE "id" = $1 RETURNING *`;
      const data = await this.db.query(sql, [id]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error deleting cabin with ID ${id}: ${error.message}`);
    }
  }
}

export default CabinsDAO;
