import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DatabasesQueryDto {
  @IsString()
  @IsOptional()
  readonly start_cursor?: string;

  @IsNumber()
  @IsOptional()
  readonly page_size?: number;
}
