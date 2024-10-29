import { CustomSettings } from "../../data/types";
import DB from "../../database/db";

class SettingsDAO {
  db: DB;

  constructor() {
    this.db = new DB();
  }

  async getSettings() {
    try {
      const sql = `SELECT * FROM "settings"`;
      const data = await this.db.query(sql, []);
      return data.rows;
    } catch (error: any) {
      throw new Error(`Error fetching settings: ${error.message}`);
    }
  }

  async getSetting(id: number) {
    try {
      const sql = `SELECT * FROM "settings" WHERE "id" = $1`;
      const data = await this.db.query(sql, [id]);
      return data.rows.length === 1 ? data.rows[0] : null;
    } catch (error: any) {
      throw new Error(`Error fetching setting with ID ${id}: ${error.message}`);
    }
  }

  async insertSetting(settings: CustomSettings) {
    try {
      const sql = `
        INSERT INTO "settings" ("minBookingLength", "maxBookingLength", "maxGuestsPerBooking", "breakfastPrice")
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        settings.minBookingLength,
        settings.maxBookingLength,
        settings.maxGuestsPerBooking,
        settings.breakfastPrice,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error inserting setting: ${error.message}`);
    }
  }

  async updateSetting(id: number, settings: CustomSettings) {
    try {
      const sql = `
        UPDATE "settings"  // Ensure the correct table name
        SET "minBookingLength" = $1, "maxBookingLength" = $2, "maxGuestsPerBooking" = $3, "breakfastPrice" = $4
        WHERE "id" = $5
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        settings.minBookingLength,
        settings.maxBookingLength,
        settings.maxGuestsPerBooking,
        settings.breakfastPrice,
        id,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error updating setting with ID ${id}: ${error.message}`);
    }
  }

  async deleteSetting(id: number) {
    try {
      const sql = `DELETE FROM "settings" WHERE "id" = $1 RETURNING *`;
      const data = await this.db.query(sql, [id]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error deleting setting with ID ${id}: ${error.message}`);
    }
  }
}

export default SettingsDAO;
