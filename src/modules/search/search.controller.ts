import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { ResultError, SearchResultSuccess } from '@/entities';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description:
      'Returns the search results for parent or child pages and databases shared with an integration.',
    type: SearchResultSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'An error occurred while performing the search.',
    type: ResultError,
  })
  async search(): Promise<SearchResultSuccess | ResultError> {
    return this.searchService.search();
  }
}
