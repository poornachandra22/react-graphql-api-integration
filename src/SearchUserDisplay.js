import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { HOME_SEARCH_USER } from "./HomeSearchUser"; // Define your GraphQL query
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function SearchUserDisplay() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = React.useState([]);
  const [searchUserData, { loading: userLoading }] = useLazyQuery(
    HOME_SEARCH_USER,
    {
      variables: {
        limit: 10,
        nextToken: null,
        inputFilter: { keyWord: inputText, filter: "all" },
      },
      onCompleted: (res) => {
        console.log("res : ", res);
        setData(res.homeSearchUser ? res.homeSearchUser.edges : []);
      },
      onError: (err) => {
        console.log(err);
      },
    },
    []
  );

  const handleUserSearch = (input) => {
    searchUserData({
      variables: {
        limit: 10,
        nextToken: null,
        inputFilter: { keyWord: input, filter: "all" },
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          handleUserSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleUserSearch(inputText);
        }}
      >
        Search User
      </button>

      {userLoading && <p>Loading users...</p>}

      <TableContainer component={Paper} className="one">
        <Table>
          <TableHead>
            <TableCell>Users</TableCell>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.node.id}>
                <TableCell>{item.node.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SearchUserDisplay;
