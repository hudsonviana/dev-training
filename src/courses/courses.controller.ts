import { Controller, Get } from '@nestjs/common';
import { Body, Delete, HttpCode, Param, Patch, Post } from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';

@Controller('courses') // prefix
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}


  @Get('list') // rota
  findAll() {
    return 'Listagem de cursos.';
  }

  // @Get('curso/:id')
  // findOne(@Param() params) {
  //   return `Curso #${params.id}`;
  // }

  // outra forma de passar um parâmetro:
  @Get('curso/:id')
  findOne(@Param('id') id: string): string {
    return `Curso #${id}`;
  }

  // @Post()
  // @HttpCode(201)
  // create(@Body('description') body): any {
  //   return body;
  // }

  @Post()
  @HttpCode(201)
  create(@Body() body): any {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `Curso id ${id} excluído!`;
  }

}
