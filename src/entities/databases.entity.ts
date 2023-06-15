import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsObject } from 'class-validator';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export class DatabasesQueryResultSuccess {
  @ApiProperty({
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: true;

  @ApiProperty({
    default: [
      {
        object: 'page',
        id: '8c9cecea-c40e-48e6-bacd-23aa65b0e386',
        created_time: '2023-06-07T10:12:00.000Z',
        last_edited_time: '2023-06-07T10:18:00.000Z',
        created_by: {
          object: 'user',
          id: 'cb5404be-3443-4974-996f-8ce187fe5e16',
        },
        last_edited_by: {
          object: 'user',
          id: 'cb5404be-3443-4974-996f-8ce187fe5e16',
        },
        cover: null,
        icon: null,
        parent: {
          type: 'database_id',
          database_id: 'fcee7553-f4ba-4b85-8bbd-be9c17259331',
        },
        archived: false,
        properties: {
          Next: {
            id: 'CkJj',
            type: 'rich_text',
            rich_text: [],
          },
          Previous: {
            id: 'cQOl',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: '5a34201ab85141b4a440d1af0846b71a',
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
                plain_text: '5a34201ab85141b4a440d1af0846b71a',
                href: null,
              },
            ],
          },
          'Created At': {
            id: 'pq%3By',
            type: 'date',
            date: {
              start: '2023-06-07T17:15:00.000+07:00',
              end: null,
              time_zone: null,
            },
          },
          Description: {
            id: '%7DN%3Dt',
            type: 'rich_text',
            rich_text: [],
          },
          Tags: {
            id: '~%3CB_',
            type: 'multi_select',
            multi_select: [
              {
                id: 'a70ab29b-cd68-4ecf-8200-2c00d9abdfc8',
                name: 'DNN',
                color: 'yellow',
              },
              {
                id: 'f3f88357-631c-4bbe-a4b5-aa7d5221ccc7',
                name: 'Rust',
                color: 'default',
              },
            ],
          },
          Title: {
            id: 'title',
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content:
                    'Deep Neural Network from Scratch in Rust: Part 1 - Building the Foundational Structure',
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
                plain_text:
                  'Deep Neural Network from Scratch in Rust: Part 1 - Building the Foundational Structure',
                href: null,
              },
            ],
          },
        },
        url: 'https://www.notion.so/Deep-Neural-Network-from-Scratch-in-Rust-Part-1-Building-the-Foundational-Structure-8c9ceceac40e48e6bacd23aa65b0e386',
        public_url: null,
      },
    ],
  })
  @IsNotEmpty()
  results: (PageObjectResponse | PartialPageObjectResponse)[];

  @ApiProperty({
    default: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsNotEmpty()
  next_cursor: string | null;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  has_more: boolean;
}

export class DatabasesRetrieveResultSuccess {
  @ApiProperty({
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: true;

  @ApiProperty({
    default: 'fcee7553-f4ba-4b85-8bbd-be9c17259331',
  })
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    default: {
      properties: {
        Next: {
          id: 'CkJj',
          name: 'Next',
          type: 'rich_text',
          rich_text: {},
        },
        Previous: {
          id: 'cQOl',
          name: 'Previous',
          type: 'rich_text',
          rich_text: {},
        },
        'Created At': {
          id: 'pq%3By',
          name: 'Created At',
          type: 'date',
          date: {},
        },
        Description: {
          id: '%7DN%3Dt',
          name: 'Description',
          type: 'rich_text',
          rich_text: {},
        },
        Tags: {
          id: '~%3CB_',
          name: 'Tags',
          type: 'multi_select',
          multi_select: {
            options: [
              {
                id: 'f3f88357-631c-4bbe-a4b5-aa7d5221ccc7',
                name: 'Rust',
                color: 'default',
              },
              {
                id: 'a70ab29b-cd68-4ecf-8200-2c00d9abdfc8',
                name: 'DNN',
                color: 'yellow',
              },
            ],
          },
        },
        Title: {
          id: 'title',
          name: 'Title',
          type: 'title',
          title: {},
        },
      },
    },
  })
  @IsObject()
  properties: Record<string, any>;
}
