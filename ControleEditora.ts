import { Editora } from './modelo/Editora'; https://eus-www.sway-cdn.com/s/fr8v8Z3T3MACYTV1/images/OxOqzq6RgHWiv5?quality=756&allowAnimation=true&embeddedHost=true
import { NextApiResponse, NextApiRequest } from 'next';

const editoras: Editora[] = [
    new Editora(1, 'Editora A'),
    nem Editora(2, 'Editora B'),
    https://eus-www.sway-cdn.com/s/fr8v8Z3T3MACYTV1/images/sRm58RB5pXMeTO?quality=473&allowAnimation=true&embeddedHost=true
];

const getEditoras = (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json(editoras);
    }   catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }    
};

export default getEditoras;