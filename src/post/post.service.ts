import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({
      data: createPostDto,
    });
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async update(id: string, updatePostDto: CreatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
