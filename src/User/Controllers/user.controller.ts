import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "../Services/user.service";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { ValidateCreateUserPipe } from "../Pipes/validate-create-user.pipe";
import { Authguard } from "../Guards/AuthGuard";

@Controller("users")
export class Usercontroller{

    constructor(private userService:UserService){}
    // @Get()
    // getUsers(){
    //     return { username: "rajat", email:"rajat@hood.live"}
    // }

    @Get()
    @UseGuards(Authguard)
    getUsers(@Query('sortyBy') sortyBy:string){
        return this.userService.fecthUsers();
    }

    // @Post()
    // createUser(@Req() request: Request, @Res() response: Response){
    //     response.send("created")
    // }

    @Post("create")
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData : CreateUserDto){
        return this.userService.createUser(userData);
    }

    // @Get(":id")
    // getUserById(@Req() request: Request, @Res() response: Response){
    //     console.log(request.params)
    //     response.send("")
    // }

    @Get(":id")
    getUserById(@Param('id', ParseIntPipe) id : number){
        const user = this.userService.fetchUserById(id);
        if(!user)
            throw new HttpException("user not found", HttpStatus.BAD_REQUEST)
        return user;
    }
}