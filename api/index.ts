import express from 'express';
import { Request, Response } from 'express';

const app = express();

const responseInit = async (req: Request, res: Response) => {
  res.send('Express on Vercel');
};

app.get('/api', responseInit);

app.listen(3000, () => console.log('Server ready on port 3000.'));

export default app;
