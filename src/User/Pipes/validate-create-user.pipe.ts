import { ArgumentMetadata, HttpException, HttpStatus, PipeTransform } from "@nestjs/common";
import { CreateUserDto } from "../dtos/CreateUser.dto";

export class ValidateCreateUserPipe implements PipeTransform{
    transform(value: CreateUserDto, metadata: ArgumentMetadata) {
        console.log("Inside Validate Create User Pipe")

        const parseAgeToInt = parseInt(value.age.toString())

        if(isNaN(parseAgeToInt)){
            console.log(`${value.age} is not a number`)
            throw new HttpException("Invalid Data Type Property For age", HttpStatus.BAD_REQUEST)
        }
        
        console.log(`${value.age} is a number`)
        return {...value, age: parseAgeToInt}
    }
}