import { Router, Request, Response } from 'express';
import {OfferInterface} from '../models/offers'
const router: Router = Router();
import { offerData as allOffers } from "./offerData";

router.get('/', (req: Request, res: Response) => {
  return res.json(allOffers);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const offer: OfferInterface|undefined = allOffers.find(s => s.id === id);
  if (!offer) {
    res.status(404);
    return res.json({error: "Not found"});
  }
  res.json(offer);
});

export const OfferController: Router = router;
