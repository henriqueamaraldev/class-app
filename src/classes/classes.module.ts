import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from 'src/students/students.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { ClassesSchema, IClass } from './entities/classes.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: IClass.name, schema: ClassesSchema }]),
    TeachersModule,
    StudentsModule,
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
