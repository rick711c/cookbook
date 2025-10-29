import { Module } from '@nestjs/common';
import { IngredientService } from './ingedient.service';
import { IngredinetRepository } from './ingredient.repository';
import { IngredientResolver } from './ingedient.resolver';

@Module({
  imports: [],
  providers: [IngredientService, IngredinetRepository, IngredientResolver],
  exports: [IngredientService],
})
export class IngredientModule {}
