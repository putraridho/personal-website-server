import { Injectable } from '@nestjs/common';
import { Client, isFullBlock } from '@notionhq/client';
import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import {
  BlocksChildrenResultSuccess,
  BlocksRetrieveResultSuccess,
  ResultError,
} from '../../entities';
import { NotionClientError } from '../../type';
import { BlocksChildrenDto, BlocksRetrieveDto } from './dto';

@Injectable()
export class BlocksService {
  notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
      notionVersion: '2022-06-28',
    });
  }

  async retrieve({
    block_id,
  }: BlocksRetrieveDto): Promise<BlocksRetrieveResultSuccess | ResultError> {
    try {
      const retrieved_block = await this.notion.blocks.retrieve({
        block_id,
      });

      const {
        id,
        created_time,
        child_page: { title },
      } = retrieved_block as ChildPageBlockObjectResponse;

      const filtered = await this.notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
          property: 'Title',
          title: {
            equals: title,
          },
        },
      });

      let description: string | undefined = undefined;

      let tags: string[] = [];

      const page =
        filtered.results[0].object === 'page'
          ? (filtered.results[0] as PageObjectResponse)
          : undefined;

      if (page?.properties['Description'].type === 'rich_text') {
        description =
          page.properties['Description']?.rich_text[0]?.plain_text ||
          description;
      }
      if (page?.properties['Tags'].type === 'multi_select') {
        tags = page.properties['Tags']?.multi_select.map(({ name }) => name);
      }

      return {
        success: true,
        id,
        created_time,
        title,
        description,
        tags,
      };
    } catch (err) {
      if (err instanceof NotionClientError) {
        return {
          success: false,
          message: `Notion client error: ${err.message}`,
        };
      } else {
        return {
          success: false,
          message: `Notion client error: ${err}`,
        };
      }
    }
  }

  async children({
    block_id,
  }: BlocksChildrenDto): Promise<BlocksChildrenResultSuccess | ResultError> {
    try {
      const { has_more, next_cursor, results } =
        await this.notion.blocks.children.list({
          block_id,
        });

      const blocks: BlockObjectResponse[] = [];

      results.forEach((result) => {
        if (isFullBlock(result)) {
          blocks.push(result);
        }
      });

      return {
        success: true,
        has_more,
        next_cursor,
        blocks,
      };
    } catch (err) {
      if (err instanceof NotionClientError) {
        return {
          success: false,
          message: `Notion client error: ${err.message}`,
        };
      } else {
        return {
          success: false,
          message: `Notion client error: ${err}`,
        };
      }
    }
  }
}
