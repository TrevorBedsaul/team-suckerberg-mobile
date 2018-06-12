import { Charity } from '../models/charity';
import { Payment } from '../models/payment';
export class User {
    constructor() {

    }

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}