import {
  DatabasesQueryResultSuccess,
  DatabasesRetrieveResultSuccess,
  ResultError,
} from '@/entities';
import { NotionClientError } from '@/type';
import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { DatabasesQueryDto } from './dto';

@Injectable()
export class DatabasesService {
  notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
      notionVersion: '2022-06-28',
    });
  }

  async retrieve(): Promise<DatabasesRetrieveResultSuccess | ResultError> {
    try {
      const { id, properties } = await this.notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID,
      });

      return {
        success: true,
        id,
        properties,
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

  async query(
    args: DatabasesQueryDto,
  ): Promise<DatabasesQueryResultSuccess | ResultError> {
    try {
      const { results, has_more, next_cursor } =
        await this.notion.databases.query({
          database_id: process.env.NOTION_DATABASE_ID,
          ...args,
        });

      return {
        success: true,
        results: results,
        has_more,
        next_cursor,
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
