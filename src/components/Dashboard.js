import React from 'react';
import { Table, TableHead, TableRow, TableCell, Button, TableBody } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import callApi from "../utils/apiCaller";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [newsList, setNewsList] = useState([]);

  async function getData() {
    await callApi("FPT", "GET", null).then(res => {
      setNewsList(res.data);
    });
    console.log(newsList);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteData(id) {
    await callApi("FPT/" + id, "DELETE", null).then(res => {
      console.log(res);
    });
    setNewsList(prevList => prevList.filter(news => news.id !== id));
  }

  return (
    <div>
      <Link to="/add">
        <Button variant="contained" style={{ float: "left" }}>
          <AddIcon />
          Add New News
        </Button>
      </Link>
      <Table style={{ backgroundColor: "aliceblue", marginBottom: "20px" }}>
        <TableHead>
          <TableRow style={{backgroundColor:"#FFA07A"}}>
            <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>IMG</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Description</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Views</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Content</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Attractive</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsList.map((news, index) => (
            <TableRow key={index}>
              <TableCell>{news.id}</TableCell>
              <TableCell>
                <img
                  style={{ width: "200px", height: "200px", borderRadius:"100px" }}
                  src={news.img}
                  alt=""
                />
              </TableCell>
              <TableCell>{news.title}</TableCell>
              <TableCell>{news.descrition}</TableCell>
              <TableCell>
                {news?.status === true ? <p>true</p> : <p>false</p>}
              </TableCell>
              <TableCell>{news.views}</TableCell>
              <TableCell>
                <p style={{ textOverflow: "ellipsis" }}>{news.content}</p>
              </TableCell>
              <TableCell>
                {news?.actractive === true ? <p>true</p> : <p>false</p>}
              </TableCell>
              <TableCell>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Link to={`/${news.id}/edit`}>
                    <Button variant="contained" color="primary" style={{ marginBottom: "10px" }}>
                      Edit
                    </Button>
                  </Link>
                  <Button variant="contained" color="primary" onClick={() => deleteData(news.id)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
