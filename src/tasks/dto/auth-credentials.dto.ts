/* eslint-disable prettier/prettier */
import {IsString, Matches, MaxLength, MinLength} from 'class-validator'

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=,*\W+))(?![.\n])(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).*$/,
    {message: 'password to weak'}
  )
  password: string
}
