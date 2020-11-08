import React, { Component, useState, Fragment } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom'

export default function Edit(props) {

    const {id} = useParams();
    console.log(id)

    const [show, setShow] = useState(true);
    const { handleSubmit, register } = useForm();

    // console.log(props.post)

    const onSubmit = values => {
        props.post.map( (post, index) => {
            // console.log(post.id)
            if(post.id === parseInt(id)) {
                // console.log("index", index)
                
                props.post.splice(index, 1, {
                    id: parseInt(id),
                    title: values.title,
                    body: values.body
                })
            }
            
            setShow(!show);
        })

    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Edit</h1>
            <div className="row">
                <div className="offset-2 col-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                    
                    <form className="border border-dark p-5 rounded"
                        onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"
                                hidden
                                name="id"
                                // defaultValue={id}
                                // ref={register({
                                //     validate: value => value !== '' || "589"
                                // })}
                                />
                        <div className="form-group">
                            <label htmlFor="titulo" className="badge badge-dark text-white">Titulo</label>
                            <input type="text"
                                className="form-control"
                                name="title"
                                placeholder="Example input"
                                defaultValue={props.title}
                                ref={register({
                                    validate: value => value !== '' || "Los campos no pueden estar vacios!"
                                })}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc" className="badge badge-dark text-white">Descripcion</label>
                            <input type="text"
                                className="form-control"
                                name="body"
                                placeholder="Another input"
                                defaultValue={props.body}
                                ref={register({
                                    validate: value => value !== '' || "Los campos no pueden estar vacios!"
                                })}
                                />
                        </div>
                        <button className="btn btn-info btn-block">Edit</button>
                    </form>

                    {show ? (
                            ''
                            ) : <Fragment>
                                    <div className="alert alert-success mt-2" role="alert">
                                        <h4 className="alert-heading">Well done!</h4>
                                        You have edited it to the list
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </Fragment>
                                
                        }
                </div>
            </div>
        </div>
    )
}
