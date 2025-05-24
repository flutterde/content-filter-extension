import { Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import { loginAdminValidator } from "../validators/admin";
import { mainControllers } from "../controllers/main.controllers";


const router = Router();

router.post("/login", checkSchema(loginAdminValidator), (req, resp) => {
     if (!validationResult(req).isEmpty()) {
            const errors = validationResult(req).array();
            return resp.send(errors.map((error) => ({
                field: error.path,
                message: error.msg,
            })));
        }
    return mainControllers.adminLoginController(req, resp);
})

export default router;