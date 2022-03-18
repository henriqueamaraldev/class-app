import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Post()
  createTeacher(@Body() studentInput: CreateStudentDto) {
    return this.studentsService.create(studentInput);
  }
  @Post('/create/:quantity')
  async createMany(@Param('quantity') quantity: number) {
    return this.studentsService.createMany(quantity);
  }
  @Get()
  async getTeachers() {
    return this.studentsService.list();
  }
}
