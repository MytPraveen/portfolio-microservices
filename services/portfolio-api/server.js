import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

const PORT = process.env.PORT || 3001;

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "portfolio-api"
  });
});

app.get("/api/projects", (req, res) => {
  res.json({
    projects: [
      {
        name: "Portfolio DevSecOps Platform",
        status: "active"
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`portfolio-api listening on port ${PORT}`);
});
