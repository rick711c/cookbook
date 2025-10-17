import { Module } from '@nestjs/common';
import { RecipieService } from './recipie.service';
import { RecipieRepository } from './recipe.repository';
import { RecipieResolver } from './recipie.resolver';

@Module({
  imports: [],
  providers: [RecipieService, RecipieRepository, RecipieResolver],
})
export class RecipieModule {}
