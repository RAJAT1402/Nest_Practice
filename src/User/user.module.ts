import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { Usercontroller } from "./Controllers/user.controller";
import { UserService } from "./Services/user.service";
import { ExampleMiddleware } from "./Middlewares/example.middleware";

@Module({
    controllers:[Usercontroller],
    providers:[UserService]
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ExampleMiddleware).forRoutes("users")
    }
}