/* eslint-disable */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';

@Module({
  // imports: [PersonsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  imports: [PersonsModule, MongooseModule.forRoot('mongodb+srv://testUser:testPass@we-skill-cluster.wkejp.mongodb.net/perso-nest?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
