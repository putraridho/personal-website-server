import { ApiProperty } from '@nestjs/swagger';
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class SearchResultSuccess {
  @ApiProperty({
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: true;

  @ApiProperty({
    default: {
      type: 'database_id',
      database_id: '123e4567-e89b-12d3-a456-426614174000',
    },
  })
  @IsNotEmpty()
  results: (
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  )[];

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
