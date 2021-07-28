import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PersonsService {
  // inject the constructor here
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return new this.personModel(createPersonDto).save();
  }

  async findAll() {
    return this.personModel.find().exec();
  }

  async findOne(name: string) {
    return this.personModel.findOne({ name }).exec();
  }

  async update(name: string, updatePersonDto: UpdatePersonDto) {
    return this.personModel
      .updateOne({ name }, { $set: { ...updatePersonDto } })
      .exec();
  }

  async remove(name: string) {
    return this.personModel.remove({ name }).exec();
  }
}
