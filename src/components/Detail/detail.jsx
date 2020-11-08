/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component, Fragment, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function Detail(props) {

    const {id} = useParams();
    console.log(id)

    const { handleSubmit } = useForm();
    const [show, setShow] = useState(true);

    const onSubmit = () => {
        props.post.map( (post, index) => {
            console.log("index", index)
            console.log(props.post)
            if(post.id === parseInt(id)) {
                props.post.splice(index, 1)
            }
            setShow(!show);
        })

    }


    return (
        <div className="row mt-5">
            <div className="offset-3 col-6">
                <div className="card border border-dark">
                    <div className="card-body text-center">
                        {
                            props.post.map( (post) => {
                                if(post.id == id) {
                                    return (
                                        <Fragment key={post.id}>
                                            
                                                <h4 className="card-title">{post.title}</h4>
                                                <p className="card-text">
                                                    {post.body}
                                                </p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Link to={`/edit/${post.id}`} className="btn btn-info px-5">Edit</Link>
                                                    </div>
                                                    <div className="col-6">
                                                        <form
                                                            onSubmit={handleSubmit(onSubmit)}>
                                                            <button className="btn btn-danger px-5" type="submit">
                                                                Delete
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            
                                        </Fragment>
                                    )
                                }
                                
                            })
                        }
                    
                        {show ? (
                            ''
                            ) : <Fragment>
                                    <div className="alert alert-success" role="alert">
                                        <h4 className="alert-heading">Well done!</h4>
                                        You have deleted the post
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div>
                                        <Link to={`/`} className="btn btn-info px-5">Back home</Link>
                                    </div>
                                </Fragment>
                                
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

