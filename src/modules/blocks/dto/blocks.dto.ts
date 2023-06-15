import { IsString } from 'class-validator';

export class BlocksRetrieveDto {
  @IsString()
  readonly block_id: string;
}

export class BlocksChildrenDto {
  @IsString()
  readonly block_id: string;
}
