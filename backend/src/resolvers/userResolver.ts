import { Arg, Query, Resolver } from "type-graphql";
import { User, Friends } from '../models/Users'
import { user } from '../db/test.json'


@Resolver()
export class UserResolver {
    private data: Friends[] = user

    @Query(() => [User])
    async users(){
        return this.data;
    }

    @Query(() => User)
    async usersOne(
        @Arg("id") id: String
    ){
        return this.data.find(user => user.id == id)
    }

    @Query(() => [User])
    async usersSearch(
        @Arg("name") name: String
    ){
        return this.data.filter(
            user => {
                return user.name == name
            }
        )
    }

}