import { Injectable } from '@nestjs/common';
import { Student, StudentsDocument } from './entities/students.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentsDocument>,
  ) {}
  async list() {
    const students = await this.studentModel.find();
    return students;
  }

  async create(inputStudent: CreateStudentDto) {
    const modelStudent = await this.studentModel.create(inputStudent);
    return modelStudent;
  }

  async createMany(quantity: number) {
    const students = await this.list();
    const studentsQuantity = students.length;
    for (let i = 1; i <= quantity; i++) {
      const student = {
        name: 'Student' + (i + studentsQuantity),
        email: 'student' + (i + studentsQuantity) + '@gmail.com',
        password: '123456',
      };
      const modelStudent = new this.studentModel(student);
      await modelStudent.save();
    }
    return 'Concluded';
  }
}
