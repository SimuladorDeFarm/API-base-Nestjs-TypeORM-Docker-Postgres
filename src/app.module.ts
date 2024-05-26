import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
//import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'ucodrr',
      entities: [User],
      database: 'codrrdb',
      synchronize: true,
      logging: true,
    }),
    UserModule,

   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DataSourceConfig } from './config/data.source';
//import { UsersModule } from './users/users.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig}),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

*/