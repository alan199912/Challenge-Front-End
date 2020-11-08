import React, { Component, Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'


export default function Create(props) {

    let random = 0
    const [show, setShow] = useState(true);
    const { handleSubmit, register, errors } = useForm();

    random = parseInt(100 + Math.random() * 500);

    console.log(random)

    const onSubmit = values => {
        props.post.unshift({
            id: random,
            title: values.title,
            body: values.body
        })
        console.log(props.post);
        console.log(values);
        setShow(!show);
        console.log(random)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Create</h1>
            <div className="row">
                <div className="offset-2 col-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4">
                    
                    <form className="border border-dark p-5 rounded"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="titulo" className="badge badge-dark text-light">Titulo</label>
                            <input type="text"
                                hidden
                                name="id"
                                ref={register}
                                defaultValue={random}/>
                            <input type="text"
                                name="title"
                                className="form-control"
                                id="title"
                                placeholder="Write the title"
                                name="title"
                                ref={register({
                                    validate: value => value !== '' || "Los campos no pueden estar vacios!"
                                })}
                                />
                                {errors.title && errors.title.message}
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc" className="badge badge-dark text-light">Descripcion</label>
                            <input type="text"
                                name="body"
                                className="form-control"
                                id="body"
                                placeholder="Write the body"
                                name="body"
                                ref={register({
                                    validate: value => value !== '' || "Los campos no pueden estar vacios!"
                                })}
                                />
                        </div>

                        {show ? (
                            ''
                            ) : <Fragment>
                                    <div className="alert alert-success" role="alert">
                                        <h4 className="alert-heading">Well done!</h4>
                                        You have added it to the list
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </Fragment>
                                
                        }

                        {errors.body && errors.body.message}

                        <button type="submit"
                            className="btn btn-success btn-block">
                                Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}