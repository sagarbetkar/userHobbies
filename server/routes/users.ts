import { Router } from "express";
import { userController } from "../controllers/userController";

const usersRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *    User:
 *      type: object
 *      required: 
 *        - name
 *      properties:
 *          name: 
 *             type: string
 *             description: A User Name
 *      example:
 *        _id: '625144e10ca535cd62b932c2'
 *        name: Anna Betkar
 *        hobbies: []
 *        createdAt: '2022-04-09T08:33:37.282+00:00'
 *        modifiedAt: '2022-04-09T08:33:37.282+00:00'
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Returns the list of all the users
 *      tags: [Users]
 *      responses:
 *        200:
 *          description: All users fetched
 *          content: 
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/User'
 */
usersRouter.get("/", userController.getUsers);

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create a new User
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User added successfully
 *        content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      500:
 *        description: User creation failed
 *              
 */
usersRouter.post("/", userController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Update the user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *            type: string
 *        required: true
 *        description: User Id
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: User updated successfully.
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      500:
 *        description: Server error, Please try after some time.
 */
usersRouter.put("/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete: 
 *     summary: Delete the User by the id
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *           type: string
 *        required: true
 *        description: User id
 * 
 *     responses:
 *      200:
 *        description: User deleted successfully
 *        content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *      500: 
 *        description: Server error, Please try after some time.
 */
usersRouter.delete("/:id", userController.deleteUser);

export default usersRouter;
