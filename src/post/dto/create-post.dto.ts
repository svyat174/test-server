import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    default: 'Post title - 1',
    description: 'Post title',
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    default: 'Content - 1',
    description: 'Content description',
  })
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty({
    default: true,
    description: 'Active status of post',
  })
  @IsNotEmpty()
  readonly published: boolean;

  @ApiProperty({
    default: '26995950-f19e-4a3b-bfa1-f75858ea6a6a',
    description: 'Author id',
  })
  @IsNotEmpty()
  readonly authorId: string;
}
