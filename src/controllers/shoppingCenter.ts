import { Router, Request, Response } from 'express';
const router: Router = Router();
import { shoppingCenterData } from "./shoppingCenterData";

router.get('/', (req: Request, res: Response) => {
  return res.json(shoppingCenterData);
});

export const ShoppingCenterController: Router = router;
