import { Injectable } from '@nestjs/common';
import { prismaService } from '../prisma/prisma.service';
import { AddInstructionDto } from './dto/addInstruction.dto';
import { InstructionRepository } from './instruction.repository';

@Injectable()
export class InstructionService {
  constructor(private repo: InstructionRepository) {}

  async addInstruction(input: AddInstructionDto) {
    try {
      return this.repo.addInstruction(input);
    } catch (err) {
      throw err;
    }
  }
}
