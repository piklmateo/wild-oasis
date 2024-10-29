import { Guest } from "../../data/types";
import DB from "../../database/db";

class GuestsDAO {
  db: DB;
  constructor() {
    this.db = new DB();
  }

  async getGuests() {
    try {
      const sql = `SELECT * FROM "guests"`;
      const data = await this.db.query(sql, []);
      return data.rows;
    } catch (error: any) {
      throw new Error(`Error fetching guests: ${error.message}`);
    }
  }

  async getGuest(id: number) {
    try {
      const sql = `SELECT * FROM "guests" WHERE "id" = $1`;
      const data = await this.db.query(sql, [id]);
      return data.rows.length === 1 ? data.rows[0] : null;
    } catch (error: any) {
      throw new Error(`Error fetching guest with ID ${id}: ${error.message}`);
    }
  }

  async insertGuest(guest: Guest) {
    try {
      const sql = `
        INSERT INTO "guests" ("fullName", "email", "nationalID", "nationality", "countryFlag")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        guest.fullName,
        guest.email,
        guest.nationalID,
        guest.nationality,
        guest.countryFlag,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error inserting guest: ${error.message}`);
    }
  }

  async updateGuest(id: number, guest: Guest) {
    try {
      const sql = `
        UPDATE "guests"
        SET "fullName" = $1, "email" = $2, "nationalID" = $3, "nationality" = $4, "countryFlag" = $5
        WHERE "id" = $6
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        guest.fullName,
        guest.email,
        guest.nationalID,
        guest.nationality,
        guest.countryFlag,
        id,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error updating guest with ID ${id}: ${error.message}`);
    }
  }

  async deleteGuest(id: number) {
    try {
      const sql = `DELETE FROM "guests" WHERE "id" = $1 RETURNING *`;
      const data = await this.db.query(sql, [id]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error deleting guest with ID ${id}: ${error.message}`);
    }
  }
}

export default GuestsDAO;
