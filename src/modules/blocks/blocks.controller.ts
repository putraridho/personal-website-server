import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlocksService } from './blocks.service';
import {
  BlocksChildrenResultSuccess,
  BlocksRetrieveResultSuccess,
  ResultError,
} from '@/entities';

@ApiTags('Blocks')
@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get('/:block_id')
  @ApiResponse({
    status: 200,
    description: 'Retrieves a Block object using the ID specified.',
    type: BlocksRetrieveResultSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'An error occurred while performing the databases query.',
    type: ResultError,
  })
  async retrieve(
    @Param('block_id') block_id: string,
  ): Promise<BlocksRetrieveResultSuccess | ResultError> {
    return this.blocksService.retrieve({
      block_id,
    });
  }

  @Get('/:block_id/children')
  @ApiResponse({
    status: 200,
    description:
      'Returns a paginated array of child block objects contained in the block using the ID specified. In order to receive a complete representation of a block, you may need to recursively retrieve the block children of child blocks.',
    type: BlocksChildrenResultSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'An error occurred while performing the databases query.',
    type: ResultError,
  })
  async children(
    @Param('block_id') block_id: string,
  ): Promise<BlocksChildrenResultSuccess | ResultError> {
    return this.blocksService.children({
      block_id,
    });
  }
}
