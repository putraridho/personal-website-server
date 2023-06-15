import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { ResultError, SearchResultSuccess } from '../../entities';
import { NotionClientError } from '../../type';

@Injectable()
export class SearchService {
  notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
      notionVersion: '2022-06-28',
    });
  }

  async search(): Promise<SearchResultSuccess | ResultError> {
    try {
      const { results, next_cursor, has_more } = await this.notion.search({});

      return {
        success: true,
        results,
        next_cursor,
        has_more,
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
