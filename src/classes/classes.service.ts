import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClassesDocument, IClass } from './entities/classes.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { StudentsService } from 'src/students/students.service';
import { TeachersService } from 'src/teachers/teachers.service';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(IClass.name) private classModel: Model<ClassesDocument>,
    private studentsServices: StudentsService,
    private teachersServices: TeachersService,
  ) {}
  async list() {
    const classes = await this.classModel
      .find()
      .populate('teacher', 'name')
      .populate('students', 'name');
    return classes;
  }

  async listBySubject(subject: string) {
    const classes = await this.classModel.find({
      subject,
    });
    return classes;
  }

  async create(inputClass: CreateClassDto) {
    const modelClass = new this.classModel(inputClass);

    return await modelClass.save();
  }

  async createMany(quantity: number) {
    const classes = await this.list();
    const classesQuantity = classes.length;
    const students = await this.studentsServices.list();
    const teacher = await this.teachersServices.list();
    for (let i = 1; i <= quantity; i++) {
      const slicerIndex = (i - 1) * 5;
      const classStudens = students.slice(slicerIndex, slicerIndex + 5);
      const classStudentsIds = classStudens.map((student) => student._id);
      const MClass = {
        name: 'Class' + (i + classesQuantity),
        subject: 'Subject' + (i + classesQuantity),
        students: classStudentsIds,
        teacher: teacher[i - 1]._id,
      };
      const modelClass = new this.classModel(MClass);
      await modelClass.save();
    }
    return 'Concluded';
  }
}
