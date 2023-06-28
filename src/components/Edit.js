import { Link } from 'react-router-dom';
import {Button} from 'react-materialize';
import {Card, CardContent, CardHeader} from '@mui/material';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import callApi from '../utils/apiCaller';
import { useEffect } from 'react';

export default function Edit() {
    const userName = useParams();
    const navigate = useNavigate();

    async function getData(){
        await callApi(`FPT/${userName.id}`, "GET", null).then(res => {
            formik.setFieldValue("title", res.data.title);
            formik.setFieldValue("descrition", res.data.descrition);
            formik.setFieldValue("content", res.data.content);
            formik.setFieldValue("img", res.data.img);
            formik.setFieldValue("status", res.data.status);
            formik.setFieldValue("views", res.data.views);
            formik.setFieldValue("actractive", res.data.actractive);
        })
    }

    useEffect(()=>{
        getData();
    },[])

    async function editData(values){
        await callApi(`FPT/${userName.id}`, "PUT", {
            title: values.title,
            descrition: values.descrition,
            content: values.content,
            img: values.img,
            status: values.status,
            views: values.views,
            actractive: values.actractive,
        }).then(res => {
            console.log(res);
        })
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            descrition: "",
            content: "",
            img: "",
            status: "",
            views: "",
            actractive: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Required").typeError("Field must not be empty"),
            descrition: Yup.string().required("Required").typeError("Field must not be empty"),
            content: Yup.string().required("Required").typeError("Field must not be empty"),
            img: Yup.string().required("Required").typeError("Field must not be empty"),
            status: Yup.string().required("Required").typeError("Field must not be empty"),
            views: Yup.string().required("Required").typeError("Field must not be empty"),
            actractive: Yup.string().required("Required").typeError("Field must not be empty"),
        }),
        onSubmit: (values) => {
            editData(values);
            console.log(values);
            formik.resetForm();
            navigate('/dashboard');
        },
    });

    return (
        <div>

        <div>
            <Link to='/dashboard'><Button variant="contained" color="primary">Go Back Dashboard</Button></Link>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '30px'}}>
            <Card style={{width: '1000px'}}>
            <CardHeader
                title="Add New News"
            />
            <CardContent>
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={formik.values.title} onChange={formik.handleChange} placeholder="Enter title" />
                    </div>
                    {formik.errors.title && formik.touched.title && (<p style={{color: 'red'}}>{formik.errors.title}</p>)}

                    <div className="form-group">
                        <label htmlFor="descrition">Description</label>
                        <input type="text" className="form-control" id="descrition" value={formik.values.descrition} onChange={formik.handleChange} placeholder="Enter description" />
                    </div>
                    {formik.errors.descrition && formik.touched.descrition && (<p style={{color: 'red'}}>{formik.errors.descrition}</p>)}

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input type="text" className="form-control" id="content" value={formik.values.content} onChange={formik.handleChange} placeholder="Enter content" />
                    </div>
                    {formik.errors.descrition && formik.touched.descrition && (<p style={{color: 'red'}}>{formik.errors.descrition}</p>)}

                    <div className="form-group">
                        <label htmlFor="img">Image</label>
                        <input type="text" className="form-control" id="img" value={formik.values.img} onChange={formik.handleChange} placeholder="Enter img" />
                    </div>
                    {formik.errors.img && formik.touched.img && (<p style={{color: 'red'}}>{formik.errors.img}</p>)}

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <input type="text" className="form-control" id="status" value={formik.values.status} onChange={formik.handleChange} placeholder="Enter status" />
                    </div>
                    {formik.errors.status && formik.touched.status && (<p style={{color: 'red'}}>{formik.errors.status}</p>)}

                    <div className="form-group">
                        <label htmlFor="views">Views</label>
                        <input type="text" className="form-control" id="views" value={formik.values.views} onChange={formik.handleChange} placeholder="Enter views" />
                    </div>
                    {formik.errors.views && formik.touched.views && (<p style={{color: 'red'}}>{formik.errors.views}</p>)}

                    <div className="form-group">
                        <label htmlFor="actractive">Actractive</label>
                        <input type="text" className="form-control" id="actractive" value={formik.values.actractive} onChange={formik.handleChange} placeholder="Enter actractive" />
                    </div>
                    {formik.errors.actractive && formik.touched.actractive && (<p style={{color: 'red'}}>{formik.errors.actractive}</p>)}

                    <Button variant="contained" color="primary" type="submit">Edit</Button>
                </form>
            </CardContent>
            </Card>
        </div>
        
        </div>
    )
}