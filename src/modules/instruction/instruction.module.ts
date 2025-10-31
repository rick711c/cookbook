import { Module } from '@nestjs/common';
import { IngredientResolver } from '../ingredient/ingedient.resolver';
import { InstructionRepository } from './instruction.repository';
import { InstructionResolver } from './instruction.resolver';
import { IngredientService } from '../ingredient/ingedient.service';
import { InstructionService } from './instruction.service';

@Module({
  imports: [],
  providers: [InstructionRepository, InstructionResolver, InstructionService],
  exports: [InstructionService]
})
export class InstructionModule {}
