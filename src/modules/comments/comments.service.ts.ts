import { Injectable } from '@nestjs/common';
import { AddCommentDto } from './dto/addComment.dto';
import { CommentRepository } from './comments.repository';

@Injectable()
export class CommentService {
  constructor(private repo: CommentRepository) {}
  async addComment(dto: AddCommentDto) {
    try {
      const res = await this.repo.addComment(dto);
    } catch (err) {
      throw err;
    }
  }
}
