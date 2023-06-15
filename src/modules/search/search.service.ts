import { ResultError, SearchResultSuccess } from '@/entities';
import { NotionClientError } from '@/type';
import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';

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
        // Handle specific error types with custom messages
        return {
          success: false,
          message: 'An error occurred while communicating with the Notion API.',
        };
      } else {
        // Handle other types of errors
        return {
          success: false,
          message: 'An error occurred during the search operation.',
        };
      }
    }
  }
}
