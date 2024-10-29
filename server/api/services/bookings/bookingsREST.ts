import { Request, Response } from "express";
import BookingsDAO from "./BookingsDAO";
import { Booking } from "../../data/types";

class BookingsREST {
  constructor() {}

  async getBookings(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const bookingsDAO = new BookingsDAO();
      const bookings = await bookingsDAO.getBookings();
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getBooking(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const bookingsDAO = new BookingsDAO();
      const id = Number(req.params.id);
      const booking = await bookingsDAO.getBooking(id);
      if (booking) {
        res.json(booking);
      } else {
        res.status(404).json({ error: "Booking not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async insertBooking(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const bookingsDAO = new BookingsDAO();
      const booking: Booking = req.body;
      const newBooking = await bookingsDAO.insertBooking(booking);
      res.status(201).json(newBooking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateBooking(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const bookingsDAO = new BookingsDAO();
      const id = Number(req.params.id);
      const booking: Booking = req.body;
      const updatedBooking = await bookingsDAO.updateBooking(id, booking);
      if (updatedBooking) {
        res.json(updatedBooking);
      } else {
        res.status(404).json({ error: "Booking not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteBooking(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const bookingsDAO = new BookingsDAO();
      const id = Number(req.params.id);
      const deletedBooking = await bookingsDAO.deleteBooking(id);
      if (deletedBooking) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Booking not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default BookingsREST;
