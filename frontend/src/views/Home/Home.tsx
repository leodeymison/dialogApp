import { gql, useQuery } from "@apollo/client"
import React from "react"
import Peoples from '../../components/friends/friends'

type User = {
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
}

export const GET_USER = gql`
  query {
    users {
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
    }
  }
`

const App: React.FC = () => {
  const { data, loading } = useQuery<{users: User[]}>(GET_USER)

  if(loading){
    return <p>Carregando</p>
  }



  return (
    <div>
      <Peoples children={data.users} />
    </div>
  )
}

export default App
