import { Request, Response } from "express";
import CabinsDAO from "./cabinsDAO";
import { Cabin } from "../../data/types";

class CabinsREST {
  constructor() {}

  async getCabins(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const cabinsDAO = new CabinsDAO();
      const cabins = await cabinsDAO.getCabins();
      res.send(JSON.stringify(cabins));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getCabin(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const cabinsDAO = new CabinsDAO();
      const id = Number(req.params.id);
      const cabin = await cabinsDAO.getCabin(id);
      if (cabin) {
        res.send(JSON.stringify(cabin));
      } else {
        res.status(404).json({ error: "Cabin not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async insertCabin(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const cabinsDAO = new CabinsDAO();
      const cabin: Cabin = req.body;
      const newCabin = await cabinsDAO.insertCabin(cabin);
      res.status(201).json(newCabin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateCabin(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const cabinsDAO = new CabinsDAO();
      const id = Number(req.params.id);
      const cabin: Cabin = req.body;
      const updatedCabin = await cabinsDAO.updateCabin(id, cabin);
      if (updatedCabin) {
        res.send(JSON.stringify(updatedCabin));
      } else {
        res.status(404).json({ error: "Cabin not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteCabin(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const cabinsDAO = new CabinsDAO();
      const id = Number(req.params.id);
      const deletedCabin = await cabinsDAO.deleteCabin(id);
      if (deletedCabin) {
        res.status(204).send({ message: "Cabin successfully deleted" });
      } else {
        res.status(404).json({ error: "Cabin not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default CabinsREST;
