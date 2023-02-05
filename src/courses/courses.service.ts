import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Curso de NestJS 1.0',
      description: 'Fundamentos do Framework NestJS',
      tags: ['Node.js', 'NestJS', 'JavaScript']
    }
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find(course => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));
    this.courses[indexCourse] = updateCourseDto;
  }
  
  remove(id: string) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id));
    
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
