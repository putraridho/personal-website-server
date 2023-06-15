import { ApiProperty } from '@nestjs/swagger';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import {
  IsNotEmpty,
  IsBoolean,
  IsString,
  IsOptional,
  IsArray,
} from 'class-validator';

export class BlocksRetrieveResultSuccess {
  @ApiProperty({
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: true;

  @ApiProperty({
    default: '5a34201a-b851-41b4-a440-d1af0846b71a',
  })
  @IsString()
  id: string;

  @ApiProperty({
    default: '2023-05-17T15:28:00.000Z',
  })
  @IsString()
  created_time: string;

  @ApiProperty({
    default: 'Building a Deep Neural Network in Rust: Part 0 - Introduction',
  })
  @IsString()
  title: string;

  @ApiProperty({
    default:
      'Get started on building a Deep Neural Network from scratch using Rust as we explore the advantages of Rust and gain an understanding of the concept of DNNs in this introductory tutorial.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    default: ['DNN', 'Rust'],
  })
  @IsArray()
  tags: string[];
}

export class BlocksChildrenResultSuccess {
  @ApiProperty({
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: true;

  @ApiProperty({
    default: false,
  })
  @IsBoolean()
  has_more: boolean;

  @ApiProperty({
    default: null,
  })
  @IsOptional()
  next_cursor?: string | null;

  @ApiProperty({
    default: [
      {
        object: 'block',
        id: '9ca14cf9-b288-46d8-8994-25ee3da932e7',
        parent: {
          type: 'page_id',
          page_id: '5a34201a-b851-41b4-a440-d1af0846b71a',
        },
        created_time: '2023-05-17T15:42:00.000Z',
        last_edited_time: '2023-06-03T04:34:00.000Z',
        created_by: {
          object: 'user',
          id: 'cb5404be-3443-4974-996f-8ce187fe5e16',
        },
        last_edited_by: {
          object: 'user',
          id: 'cb5404be-3443-4974-996f-8ce187fe5e16',
        },
        has_children: false,
        archived: false,
        type: 'heading_2',
        heading_2: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Introduction',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text: 'Introduction',
              href: null,
            },
          ],
          is_toggleable: false,
          color: 'default',
        },
      },
    ],
  })
  @IsArray()
  blocks: BlockObjectResponse[];
}
