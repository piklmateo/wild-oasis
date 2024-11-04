import express from "express";
import env from "dotenv";
import cors from "cors";
import CabinRest from "./api/services/cabins/cabinsREST";
import GuestRest from "./api/services/guests/guestsREST";
import SettingsRest from "./api/services/settings/settingsREST";
import BookingsRest from "./api/services/bookings/bookingsREST";

env.config();
const server = express();
const guestRest = new GuestRest();
const cabinRest = new CabinRest();
const settingsRest = new SettingsRest();
const bookingsRest = new BookingsRest();
const port = process.env.SERVER_PORT;

function startServer() {
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());

  server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
    next();
  });

  prepareGuestPaths();
  prepareSettingsPaths();
  prepareCabinsPaths();
  prepareBookingsPaths();

  server.use((req, res) => {
    res.status(404);
    res.json({ error: "Page not found" });
  });

  server.listen(port, () => {
    console.log("Server is running on: http://localhost:" + port);
  });
}

function prepareGuestPaths() {
  //get
  server.get("/api/guests", guestRest.getGuestsRest);
  server.get("/api/guests/:id", guestRest.getGuestRest);
  //post
  server.post("/api/guests", guestRest.insertGuestRest);
  //put
  server.put("/api/guests/:id", guestRest.updateGuestRest);
  //delete
  server.delete("/api/guests/:id", guestRest.deleteGuestRest);
}

function prepareSettingsPaths() {
  //get
  server.get("/api/settings", settingsRest.getSettingsRest);
  server.get("/api/settings/:id", settingsRest.getSettingRest);
  //post
  server.post("/api/settings", settingsRest.insertSettingRest);
  //put
  server.put("/api/settings/:id", settingsRest.updateSettingRest);
  //delete
  server.delete("/api/settings/:id", settingsRest.deleteSettingRest);
}

function prepareCabinsPaths() {
  //get
  server.get("/api/cabins", cabinRest.getCabins);
  server.get("/api/cabins/:id", cabinRest.getCabin);
  //post
  server.post("/api/cabins", cabinRest.insertCabin);
  //put
  server.put("/api/cabins/:id", cabinRest.updateCabin);
  //delete
  server.delete("/api/cabins/:id", cabinRest.deleteCabin);
}

function prepareBookingsPaths() {
  //get
  server.get("/api/bookings", bookingsRest.getBookings);
  server.get("/api/bookings/:id", bookingsRest.getBooking);
  //post
  server.post("/api/bookings", bookingsRest.insertBooking);
  //put
  server.put("/api/bookings/:id", bookingsRest.updateBooking);
  //delete
  server.delete("/api/bookings/:id", bookingsRest.deleteBooking);
}

startServer();
