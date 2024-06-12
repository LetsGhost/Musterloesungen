import { Response, Request } from 'express';

import sayingService from '../services/saying.service';

class sayingController {
  async create(req: Request, res: Response) {
    try {
      const { saying } = req.body;
      const result = await sayingService.create(saying)

      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: result.message,
        });
      }

      res.status(201).json({
        success: true,
        message: result.message,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await sayingService.getAll();

      if (!result.success) {
        return res.status(404).json({
          success: false,
          message: result.message,
        });
      }

      res.status(200).json({
        success: true,
        sayings: result.sayings,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await sayingService.getById(id);

      if (!result.success) {
        return res.status(404).json({
          success: false,
          message: result.message,
        });
      }

      res.status(200).json({
        success: true,
        saying: result.saying,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { saying } = req.body;
      const result = await sayingService.update(id, saying);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: result.message,
        });
      }

      res.status(200).json({
        success: true,
        message: result.message,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await sayingService.delete(id);

      if (!result.success) {
        return res.status(404).json({
          success: false,
          message: result.message,
        });
      }

      res.status(200).json({
        success: true,
        message: result.message,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }

  async getRandom(req: Request, res: Response) {
    try {
      const result = await sayingService.getRandom();

      if (!result.success) {
        return res.status(404).json({
          success: false,
          message: result.message,
        });
      }

      res.status(200).json({
        success: true,
        saying: result.randomSaying,
      });

    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err,
      });
    }
  }
}

export default new sayingController();