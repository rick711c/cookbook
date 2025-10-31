import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { prismaService } from '../prisma/prisma.service';
import { AddInstructionDto } from './dto/addInstruction.dto';
import { Instruction } from 'src/lib/graphql/models/instruction.model';
import { InstructionService } from './instruction.service';

@Resolver()
export class InstructionResolver {
  constructor(private service: InstructionService) {}

  @Mutation(() => Instruction)
  async addInstruction(@Args('input') input: AddInstructionDto) {
    try {
      const res = await this.service.addInstruction(input);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
