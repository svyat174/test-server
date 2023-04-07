import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { responsePosts } from 'src/post/post.response';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@ApiBearerAuth()
@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({
    status: 201,
    description: 'Success',
    schema: {
      example: responsePosts,
    },
  })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    schema: {
      example: [responsePosts],
    },
  })
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post by id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    schema: {
      example: responsePosts,
    },
  })
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'update post by id' })
  @ApiResponse({
    status: 201,
    description: 'Success',
    schema: {
      example: responsePosts,
    },
  })
  update(@Param('id') id: string, @Body() createPostDto: CreatePostDto) {
    return this.postService.update(id, createPostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post by id' })
  @ApiResponse({
    status: 204,
    description: 'Success',
    schema: {
      example: responsePosts,
    },
  })
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
