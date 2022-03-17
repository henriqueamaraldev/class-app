import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Teacher, TeachersDocument } from './entities/teachers.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeachersDocument>,
  ) {}
  async list() {
    const teachers = await this.teacherModel.find();
    return teachers;
  }

  async listBySubject(subject: string) {
    const teachers = await this.teacherModel.find({
      subject: { $in: subject },
    });
    return teachers;
  }

  async create(inputTeacher: CreateTeacherDto) {
    const modelTeacher = new this.teacherModel(inputTeacher);

    return await modelTeacher.save();
  }

  async createMany(quantity: number) {
    const teachers = await this.list();
    const teachersQuantity = teachers.length;
    for (let i = 1; i <= quantity; i++) {
      const teacher = {
        name: 'Teacher' + (i + teachersQuantity),
        subject: ['Subject' + (i + teachersQuantity)],
      };
      const modelTeacher = new this.teacherModel(teacher);
      await modelTeacher.save();
    }
    return 'Concluded';
  }
}
