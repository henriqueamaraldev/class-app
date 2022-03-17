import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeachersSchema } from './entities/teachers.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeachersSchema }]),
  ],
  providers: [TeachersService],
  controllers: [TeachersController],
  exports: [TeachersService],
})
export class TeachersModule {}
