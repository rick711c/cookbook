import { prismaService } from '../prisma/prisma.service';
import { AddCommentDto } from './dto/addComment.dto';

export class CommentRepository {
  async addComment(dto: AddCommentDto) {
    try {
      const res = await prismaService.comment.create({ data: { ...dto } });
    } catch (err) {
      throw err;
    }
  }
}
