import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ExampleMiddleware implements NestMiddleware{
    use(req:Request, res:Response, next: NextFunction){
        console.log("example middle ware");
        console.log(req.headers.authorization)

        const { authorization } = req.headers;

        if(!authorization) throw new HttpException("No Authorization Token Passed", HttpStatus.FORBIDDEN)

        if(authorization === 'token') next();
        else throw new HttpException("Wrong Authorization Token", HttpStatus.FORBIDDEN);
    }
}