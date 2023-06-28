import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default function Detail() {
    const userName = useParams();
    const [newsList, setNewsList] = useState([])
    console.log(userName);

    async function getData() {
        await axios.get("https://649c5abc04807571923803ad.mockapi.io/FPT/" + userName.id)
            .then(response => response.data)
            .then((data) => {
                setNewsList(data)
            });
        console.log(newsList);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="card" style={{background: '	rgb(245,245,220)'}}>
                    <div>
                        <img src={newsList.img} style={{width: '100%'}} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">{newsList.title}</h1><span>View: {newsList.views}</span>
                        <p>Description:</p>
                        <p className="card-text">{newsList.descrition}</p>
                        <div style={{left: '0'}} className="bottom-line2"></div>
                        <p className="card-text">{newsList.content}</p>
                        <div style={{left: '0', marginBottom: '50px'}} className="bottom-line2"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
