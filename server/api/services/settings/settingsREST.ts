import { Request, Response } from "express";
import SettingsDAO from "./settingsDAO";
import { CustomSettings } from "../../data/types";

class SettingsREST {
  constructor() {}

  async getSettingsRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const sdao = new SettingsDAO();
      const data = await sdao.getSettings();
      res.send(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getSettingRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const sdao = new SettingsDAO();
      const id = Number(req.params.id);
      const data = await sdao.getSetting(id);
      if (data) {
        res.send(JSON.stringify(data));
      } else {
        res.status(404).json({ error: "Setting not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async insertSettingRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const sdao = new SettingsDAO();
      const settings: CustomSettings = req.body;
      const data = await sdao.insertSetting(settings);
      res.status(201).json({ message: "Setting successfully inserted", data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateSettingRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const sdao = new SettingsDAO();
      const id = Number(req.params.id);
      const settings: CustomSettings = req.body;
      const data = await sdao.updateSetting(id, settings);
      if (data) {
        res.json({ message: "Setting successfully updated", data });
      } else {
        res.status(404).json({ error: "Setting not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteSettingRest(req: Request, res: Response): Promise<void> {
    res.type("application/json");
    try {
      const sdao = new SettingsDAO();
      const id = Number(req.params.id);
      const data = await sdao.deleteSetting(id);
      if (data) {
        res.json({ message: "Setting successfully deleted", data });
      } else {
        res.status(404).json({ error: "Setting not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default SettingsREST;
