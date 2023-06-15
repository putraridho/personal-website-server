import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ResultError {
  @ApiProperty({
    default: false,
  })
  @IsNotEmpty()
  @IsBoolean()
  success: false;

  @ApiProperty({
    default: {
      message: 'Error!!!',
    },
  })
  @IsNotEmpty()
  message: string;
}
