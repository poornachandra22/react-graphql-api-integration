import React from "react";
import SearchUserDisplay from "./SearchUserDisplay";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import DegreeDisplay from "./DegreeDisplay";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <SearchUserDisplay />
        <DegreeDisplay />
      </div>
    </ApolloProvider>
  );
}

export default App;


//comment added

//new comment added