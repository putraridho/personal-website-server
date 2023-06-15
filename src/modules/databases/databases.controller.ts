import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DatabasesService } from './databases.service';
import { DatabasesQueryDto } from './dto';
import {
  DatabasesRetrieveResultSuccess,
  ResultError,
  DatabasesQueryResultSuccess,
} from '../../entities';

@ApiTags('Databases')
@Controller('databases')
export class DatabasesController {
  constructor(private readonly databasesService: DatabasesService) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    description:
      'Retrieves a database object — information that describes the structure and columns of a database — for a provided database ID. The response adheres to any limits to an integration’s capabilities.',
    type: DatabasesRetrieveResultSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'An error occurred while performing the databases query.',
    type: ResultError,
  })
  async retrieve(): Promise<DatabasesRetrieveResultSuccess | ResultError> {
    return this.databasesService.retrieve();
  }

  @Post('/query')
  @ApiBody({
    required: false,
    type: DatabasesQueryDto,
  })
  @ApiResponse({
    status: 201,
    description:
      'Gets a list of Pages contained in the database, filtered and ordered according to the filter conditions and sort criteria provided in the request. The response may contain fewer than page_size of results.',
    type: DatabasesQueryResultSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'An error occurred while performing the databases query.',
    type: ResultError,
  })
  async query(
    @Body() databasesQueryDto: DatabasesQueryDto,
  ): Promise<DatabasesQueryResultSuccess | ResultError> {
    return this.databasesService.query(databasesQueryDto);
  }
}
