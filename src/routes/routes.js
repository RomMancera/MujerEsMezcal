import { Router } from "express";
import { methods as usersController } from "./../controllers/controllers"
const router=Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.addUser);
router.get("/:id", usersController.getOneUser);
router.delete("/:id", usersController.deleteUser);
router.put("/:id", usersController.UpdateUser);

export default router;