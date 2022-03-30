import { useParams } from "react-router-dom";
import User from "../../components/user/user";

import Friends from '../../components/friends/friends'
import { gql, useQuery } from '@apollo/client';
import React from "react";

const GET_USER_ONE = gql`  
  query User($id: String!){
    usersOne(id: $id) {
      id
      name
      index
      picture
      age
      eyeColor
      company
      greeting
      email
      phone
      friends {
        id
        name
        index
        picture
        age
        eyeColor
        company
        email
        phone
      }
    }
  }
`

type Us = {
  id: String,
  name: String
  index: Number
  picture: String
  age: Number
  eyeColor: String
  company: String
  greeting: String
  email: String
  phone: String
  friends: [{
    id: String,
    name: String
    index: Number
    picture: String
    age: Number
    eyeColor: String
    company: String
    email: String
    phone: String
  }]
}

const People: React.FC = () => {
  const { id } = useParams()

  const { data, loading } = useQuery<{users: Us[]}>(GET_USER_ONE, {
    variables: { id }
  })
  if(loading){
    return <p>Carregando</p>
  }


  return (
    <div>
      <User children={data.usersOne} />
      <Friends children={data.usersOne.friends} />
    </div>
  )
}

export default People
