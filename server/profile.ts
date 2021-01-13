import { Request, Response } from 'express';

const profile = (req: Request, res: Response) => {
    res.json({
        name: 'John',
        surname: 'Doe',
        age: 32,
        phone: 111111111111,
        email: 'john.doe@mail.com'
    });
};

export default profile;