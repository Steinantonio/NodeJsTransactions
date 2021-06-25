import { Router } from "express";
import { AuthenticateUserController } from "./src/controller/AuthenticateUserController";
import { CreateTransactionController } from "./src/controller/CreateTransactionController";
import { CreateUserController } from "./src/controller/CreateUserController";
import { ListTransactionController } from "./src/controller/ListTransactionsController";
import { ensureAuthenticated } from "./src/middleware/ensureAuthenticated";
import {DeleteTransactionsController} from "./src/controller/DeleteTransactionsController";
import { UpdateTransactionsController } from "./src/controller/UpdateTransactionsController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/api/v1/user", createUserController.handle)


const authUserController = new AuthenticateUserController(); 
router.post("/api/v1/auth", authUserController.handle);
router.get("/api/v1/auth", ensureAuthenticated, authUserController.check);

const createTransactionController = new CreateTransactionController();
router.post("/api/v1/transaction", ensureAuthenticated, createTransactionController.handle);

const listTransactionController = new ListTransactionController();
router.get("/api/v1/transaction", ensureAuthenticated, listTransactionController.handle);
router.get("/api/v1/transaction/:id", ensureAuthenticated, listTransactionController.listById);

const deleteUserTransactionController = new DeleteTransactionsController();
router.delete("/api/v1/transaction/:id", ensureAuthenticated, deleteUserTransactionController.handle);

const updateUserTransactionController = new UpdateTransactionsController();
router.put("(/api/v1/transaction/:id)", ensureAuthenticated, updateUserTransactionController.handle);

export{router}