import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}
  @Post()
  createClass(@Body() classInput: CreateClassDto) {
    return this.classesService.create(classInput);
  }
  @Get('/create/:quantity')
  async createMany(@Param('quantity') quantity: number) {
    return this.classesService.createMany(quantity);
  }
  @Get()
  async getTeachers() {
    return this.classesService.list();
  }
  @Get('/:subject')
  async getTeachersBySubject(@Param('subject') subject: string) {
    return this.classesService.listBySubject(subject);
  }
}
