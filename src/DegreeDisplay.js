import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_DEGREES } from "./DegreeQuery";
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function DegreeDisplay() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = React.useState([]);
  const [searchData, { loading }] = useLazyQuery(GET_DEGREES, {
    variables: { courseName: inputText },
    onCompleted: (res) => {
      console.log("coursesearch");
      setData(res.getAllDegrees ? res.getAllDegrees : []);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSearch = () => {
    searchData();
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      <TableContainer component={Paper} className="one">
        <Table>
          <TableHead>
            <TableCell>Courses</TableCell>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow>
                <TableCell>{item.courseName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DegreeDisplay;
