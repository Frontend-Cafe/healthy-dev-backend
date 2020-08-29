import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { strict } from 'assert';
import { UpdateUserDto } from './dto/update-user.dto';
import { NewPasswordDto } from 'src/auth/dto/new-password.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUserByUsernameOrEmail(usernameOrEmail: string): Promise<User> {
    const query = this.createQueryBuilder('user');
    query.where('user.username = :usernameOrEmail', {
      usernameOrEmail,
    });
    query.orWhere('user.email = :usernameOrEmail', {
      usernameOrEmail,
    });
    const user = await query.getOne();
    return user;
  }

  async createUser(
    createUserDto: CreateUserDto,
    photoUrl: string,
  ): Promise<{ id: number }> {
    const {
      email,
      username,
      password,
      name,
      twitter,
      instagram,
    } = createUserDto;
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;
    user.name = name;
    user.twitter = twitter;
    user.instagram = instagram;
    user.profilePhoto = photoUrl;
    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        if (error.detail.includes('email')) {
          throw new ConflictException(
            'HealthyDev te informa que ya hay un usuario registrado con ese email',
          );
        }
        if (error.detail.includes('username')) {
          throw new ConflictException(
            'HealthyDev te informa que ese nombre de usuario ya esta en uso.',
          );
        }
        throw new ConflictException(error.detail);
      } else {
        throw new InternalServerErrorException();
      }
    }

    return { id: user.id };
  }

  async updateUser(updateData: UpdateUserDto, username: string): Promise<User> {
    await this.update({ username }, updateData);
    const profile = this.findOne({ username });
    return profile;
  }

  async setNewPassword(
    newPassword: NewPasswordDto,
    username: string,
  ): Promise<{ message: string }> {
    await this.update({ username }, newPassword);
    return {
      message: 'Contraseña Cambiada con éxito.'
    }
  }
}
