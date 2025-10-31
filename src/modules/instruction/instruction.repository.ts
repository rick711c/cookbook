import { prismaService } from '../prisma/prisma.service';
import { AddInstructionDto } from './dto/addInstruction.dto';

export class InstructionRepository {
  async addInstruction(input: AddInstructionDto) {
    try {
      const res = await prismaService.instruction.create({
        data: { ...input },
      });
      return res;
    } catch (err) {
      throw err;
    }
  }
}
