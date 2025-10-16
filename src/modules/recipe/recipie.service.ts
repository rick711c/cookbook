import { Injectable } from '@nestjs/common';
import { RecipieRepository } from './recipe.repository';
import { CreateRecipieInput } from './dto/createRecipe.dto';

@Injectable()
export class RecipieService {
  constructor(private readonly repo: RecipieRepository) {}

  async createRecipie(input: CreateRecipieInput) {
    try {
      const res = await this.repo.createRecipie(input);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
