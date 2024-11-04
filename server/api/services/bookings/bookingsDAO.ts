import { Booking } from "../../data/types";
import DB from "../../database/db";

class BookingsDAO {
  private db: DB;

  constructor() {
    this.db = new DB();
  }

  async getBookings() {
    try {
      const sql = `
          SELECT bookings.*, "cabins"."name" AS "cabinName", "guests"."fullName" AS "guestFullName", "guests"."email" AS "guestEmail"
          FROM "bookings"
          JOIN "cabins" ON "bookings"."cabinId" = "cabins"."id"
          JOIN "guests" ON "bookings"."guestId" = "guests"."id"
      `;
      const data = await this.db.query(sql, []);
      return data.rows;
    } catch (error: any) {
      throw new Error(`Error fetching Bookings: ${error.message}`);
    }
  }

  async getBooking(id: number) {
    try {
      const sql = `SELECT * FROM "bookings" WHERE "id" = $1`;
      const data = await this.db.query(sql, [id]);
      return data.rows.length === 1 ? data.rows[0] : null;
    } catch (error: any) {
      throw new Error(`Error fetching Booking with ID ${id}: ${error.message}`);
    }
  }

  async insertBooking(booking: Booking) {
    try {
      const sql = `
        INSERT INTO "bookings" (
          "startDate", 
          "endDate", 
          "numNights", 
          "numGuests", 
          "cabinPrice", 
          "extrasPrice", 
          "totalPrice", 
          "status", 
          "hasBreakfast", 
          "isPaid", 
          "observations", 
          "cabinId", 
          "guestId"
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        booking.startDate,
        booking.endDate,
        booking.numNights,
        booking.numGuests,
        booking.cabinPrice,
        booking.extrasPrice,
        booking.totalPrice,
        booking.status,
        booking.hasBreakfast,
        booking.isPaid,
        booking.observations,
        booking.cabinId,
        booking.guestId,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error inserting Booking: ${error.message}`);
    }
  }

  async updateBooking(id: number, booking: Booking) {
    try {
      const sql = `
        UPDATE "bookings"
        SET 
          "startDate" = $1, 
          "endDate" = $2, 
          "numNights" = $3, 
          "numGuests" = $4, 
          "cabinPrice" = $5, 
          "extrasPrice" = $6, 
          "totalPrice" = $7, 
          "status" = $8, 
          "hasBreakfast" = $9, 
          "isPaid" = $10, 
          "observations" = $11, 
          "cabinId" = $12, 
          "guestId" = $13
        WHERE "id" = $14
        RETURNING *
      `;
      const data = await this.db.query(sql, [
        booking.startDate,
        booking.endDate,
        booking.numNights,
        booking.numGuests,
        booking.cabinPrice,
        booking.extrasPrice,
        booking.totalPrice,
        booking.status,
        booking.hasBreakfast,
        booking.isPaid,
        booking.observations,
        booking.cabinId,
        booking.guestId,
        id,
      ]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error updating Booking with ID ${id}: ${error.message}`);
    }
  }

  async deleteBooking(id: number) {
    try {
      const sql = `DELETE FROM "bookings" WHERE "id" = $1 RETURNING *`;
      const data = await this.db.query(sql, [id]);
      return data.rows[0];
    } catch (error: any) {
      throw new Error(`Error deleting Booking with ID ${id}: ${error.message}`);
    }
  }
}

export default BookingsDAO;
