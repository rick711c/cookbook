import { loggerObj } from 'src/util/logger.util';
import { CreateIngredientDto } from './dto/createIngredient.dto';
import { IngredinetRepository } from './ingredient.repository';

export class IngredientService {
  constructor(private repo: IngredinetRepository) {}

  async createIngredient(input: CreateIngredientDto) {
    try {
      loggerObj.logInput('IngredientService', 'createIngredient ', input);
      const res = await this.repo.createIngredient(input);
      return res;
    } catch (err) {
      loggerObj.logError(
        'IngredientService',
        'createIngredient ',
        input,
        err.message,
      );

      throw err;
    }
  }
}
