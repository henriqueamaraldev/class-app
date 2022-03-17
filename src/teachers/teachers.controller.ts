import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersServices: TeachersService) {}
  @Post()
  createTeacher(@Body() teacherInput: CreateTeacherDto) {
    return this.teachersServices.create(teacherInput);
  }
  @Get('/create/:quantity')
  async createMany(@Param('quantity') quantity: number) {
    return this.teachersServices.createMany(quantity);
  }
  @Get()
  async getTeachers() {
    return this.teachersServices.list();
  }
  @Get('/:subject')
  async getTeachersBySubject(@Param('subject') subject: string) {
    return this.teachersServices.listBySubject(subject);
  }
}
