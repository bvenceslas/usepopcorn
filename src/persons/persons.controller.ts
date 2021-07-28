import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.personsService.findOne(name);
  }

  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personsService.update(name, updatePersonDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.personsService.remove(name);
  }
}
