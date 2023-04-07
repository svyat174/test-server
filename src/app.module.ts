import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, PostModule],
})
export class AppModule {}
