import { Module } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { RecipieRepository } from './recipe.repository';
import { RecipieResolver } from './recipie.resolver';
import { IngredientModule } from '../ingredient/ingedient.module';
import { InstructionModule } from '../instruction/instruction.module';

@Module({
  imports: [IngredientModule, InstructionModule],
  providers: [RecipieService, RecipieRepository, RecipieResolver],
})
export class RecipieModule {}
