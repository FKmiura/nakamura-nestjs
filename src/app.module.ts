import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
