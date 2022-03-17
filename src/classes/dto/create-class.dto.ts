import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsArray()
  students: string[];

  @IsString()
  teacher: string;
}

export class UpdateClassDto extends PartialType(CreateClassDto) {}
