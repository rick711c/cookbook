import { AddCommentDto } from './dto/addComment.dto';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentService } from './comments.service.ts';
import { Comment } from 'src/lib/graphql/models/comment.model';

@Resolver()
export class CommentResolver {
  constructor(private service: CommentService) {}

  @Mutation(()=>Comment)
  async addComment( @Args('input') input: AddCommentDto) {
    try {
      const res = await this.service.addComment(input);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
