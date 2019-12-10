# Introduction

This project explores graphql concepts and using mongodb.

# Steps

1. Clone project
2. Run npm install
3. Start server npm start
4. Access graphql playgroud http://localhost:8080/graphql

# Sample queries

Read
query {
  getFriend(id: "c1a4ec7bfe9ad94c8d4e") {
    firstName
    lastName
  }
}

Create

mutation {
  createFriend(input: {
    firstName: "Testing"
    lastName: "Cool"
  }) {
    id
    firstName
  }
}