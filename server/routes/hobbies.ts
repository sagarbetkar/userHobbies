import { Router } from "express";
import { hobbyController } from "../controllers/hobbyController";

const hobbiesRouter: Router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Hobby:
 *    type: object
 *    required:
 *      - passionlevel
 *      - name
 *      - year
 *    properties:
 *      passionLevel:
 *          type: string
 *          description: User's passion for a hobby
 *      name:
 *          type: string
 *          description: Hobby name
 *      year:
 *          type: string
 *          description: Starting year of hobby
 *    example:
 *      _id: '625148e5df4b21982aa8f8cf'
 *      passionLevel: high,
 *      name: Cycling
 *      year: 2019
 *      createdAt: '2022-04-09T08:50:45.611Z'
 *      modifiedAt: '2022-04-09T08:50:45.611Z'
 *        
 */

/**
 * @swagger
 * tags:
 *   name: Hobbies
 *   description: The Hobbies managing API
 */

/**
 * @swagger
 * /hobbies:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder hobbies.
 *     tags: [Hobbies]
 *     description: Retrieve a list of hobbies from JSONPlaceholder. Can be used to populate a list of fake hobbies when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: All hobbies fetched.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#components/schemas/Hobby'
 *       500:
 *          descprition: Server error, Please try after some time.
 */
hobbiesRouter.get('/', hobbyController.getHobbies);

/**
 * @swagger
 * /hobbies/{userId}:
 *  post:
 *    summary: Create a new hobby
 *    tags: [Hobbies]
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema: 
 *           type: string
 *        required: true
 *        description: A user id
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/Hobby'
 *    responses:
 *      200:
 *        description: Hobby created & added successfully
 *        content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Hobby'
 *              
 */

hobbiesRouter.post('/:userId', hobbyController.createHobby);

/**
 * @swagger
 * /hobbies/{id}:
 *  put:
 *    summary: Update the hobby by the id
 *    tags: [Hobbies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *           type: string
 *        required: true
 *        description: The hobby id
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *             schema:
 *              $ref: '#/components/schemas/Hobby'
 *    responses:
 *      200:
 *        description: Hobby updated successfully
 *        content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Hobby'
 *      500: 
 *        description: Server error, Please try after some time.
 * 
 *              
 */
hobbiesRouter.put('/:id', hobbyController.updateHobby);

/**
 * @swagger
 * /hobbies/{id}:
 *  delete: 
 *     summary: Delete the hobby by the id
 *     tags: [Hobbies]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *           type: string
 *        required: true
 *        description: The hobby id
 * 
 *     responses:
 *      200:
 *        description: Hobby deleted successfully
 *        content:
 *          application/json: 
 *              schema:
 *                  $ref: '#/components/schemas/Hobby'
 *      500: 
 *        description: Server error, Please try after some time.
 */
hobbiesRouter.delete('/:userId/:id', hobbyController.deleteHobby);


export default hobbiesRouter;