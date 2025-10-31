import { Module } from "@nestjs/common";
import { FollowerRepositroy } from "./follower.repository";
import { FollowerService } from "./follower.service";
import { FollowerResolver } from "./follower.resolver";

@Module({
    providers:[FollowerRepositroy,FollowerService,FollowerResolver]
})
export class FollowerModule{}