import { Request, Response } from "express";
import GuestsDAO from "./guestsDAO";
import { Guest } from "../../data/types";

class GuestsREST {
  constructor() {}

  async getGuestsRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const gdao = new GuestsDAO();
      const data = await gdao.getGuests();
      res.send(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getGuestRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const gdao = new GuestsDAO();
      const id = Number(req.params.id);
      const data = await gdao.getGuest(id);
      res.send(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async insertGuestRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const gdao = new GuestsDAO();
      const guest: Guest = req.body;
      await gdao.insertGuest(guest);
      res.status(200).json({ message: "Guest successfully inserted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateGuestRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const gdao = new GuestsDAO();
      const id = Number(req.params.id);
      const guest: Guest = req.body;
      await gdao.updateGuest(id, guest);
      res.status(200).json({ message: "Guest successfully updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteGuestRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const gdao = new GuestsDAO();
      const id = Number(req.params.id);
      await gdao.deleteGuest(id);
      res.status(200).json({ message: "Guest successfully deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default GuestsREST;
