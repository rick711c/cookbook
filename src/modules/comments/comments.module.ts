import { Module } from '@nestjs/common';
import { CommentRepository } from './comments.repository';
import { CommentService } from './comments.service.ts';
import { CommentResolver } from './comments.resolver';

@Module({
  providers: [CommentRepository, CommentService, CommentResolver],
  exports: [CommentService],
})
export class CommentModule {}
