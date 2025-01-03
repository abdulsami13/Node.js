import { Router } from "express"
import { HelloWorldController } from "../controllers/helloWorld"
import { handleLanguageHeader } from "../middlewares/headers"
import { handleTokenBasedAuthentication } from "../middlewares/authentication.middleware"

export const router = Router()

router.get("/", handleLanguageHeader, HelloWorldController.default)
router.get("/hello", handleTokenBasedAuthentication, HelloWorldController.hello)
router.get("/user/:userId", handleLanguageHeader, HelloWorldController.getUserById)
router.post('/user',handleLanguageHeader, HelloWorldController.createUser)
router.get("/search", handleLanguageHeader, HelloWorldController.searchUsers)
