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
    window.location.reload();
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
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>IMG</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Views</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Attractive</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {newsList.map((news, index) => (
          <TableBody key={index}>
            <TableRow>
              <TableCell>{news.id}</TableCell>
              <TableCell>
                <img
                  style={{ width: "200px", height: "200px" }}
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
                  <Link to={`/${news.id}/edit`}>
                    <Button variant="contained" color="primary" onClick={() => deleteData(news.id)}>
                      Delete
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
}
