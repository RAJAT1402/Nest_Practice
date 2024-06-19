import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/CreateUser.dto";

@Injectable()
export class UserService{
    fakeUsers = [
        { username: "rajat", email:"rajat@hood.live"},
        { username: "rajat1", email:"rajat1@hood.live"},
        { username: "rajat2", email:"rajat2@hood.live"},
        { username: "rajat3", email:"rajat3@hood.live"}
    ]

    fecthUsers(){
        return this.fakeUsers;
    }

    createUser(userdetails: CreateUserDto){
        this.fakeUsers.push(userdetails);
        return "success";
    }

    fetchUserById(id: number){
        return {id, name:"rg",email:"1234"}
    }
}