import { Hobby } from "./hobby";

export interface User {
    _id: string;
    name: string;
    hobbies: Hobby[];
}