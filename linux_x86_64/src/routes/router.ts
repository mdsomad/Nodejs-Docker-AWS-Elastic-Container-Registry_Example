import { Router } from "express";

const router = Router();

router.get("/", (req:any, res:any) =>
  res.status(200).json({ message: "Hello from Docker x86_64 v1 🎉" })
);

router.get("/health", (req:any, res:any) => {
  // throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here ✅" });
});
export default router;
