import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(_type => ID)
    id: String

    @Field()
    name: String

    @Field()
    index: Number

    @Field()
    picture: String

    @Field()
    age: Number

    @Field()
    eyeColor: String

    @Field()
    company: String

    @Field()
    greeting: String

    @Field()
    email: String
    
    @Field()
    phone: String

    @Field(_type => [Friends])
    friends: [Friends]
}

@ObjectType()
export class Friends {
    @Field(_type => ID)
    id: String
    @Field()
    name: String
    @Field()
    index: Number
    @Field()
    picture: String
    @Field()
    age: Number
    @Field()
    eyeColor: String
    @Field()
    company: String
    @Field()
    email: String
    @Field()
    phone: String
}

