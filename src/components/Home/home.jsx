/* eslint-disable react-hooks/rules-of-hooks */
import {Link } from 'react-router-dom'
import React, { Component } from 'react'


export default function Home(props)  {

    return (
        <div className="container my-5">
            {
                props.post.map( (post, index) => {
                    if(index < 10) {
                    return (
                        <div className="d-flex list-group-item list-group-item-action" key={post.id}>
                            <div className="w-100"><span className="badge badge-dark">{post.id}</span> {post.title}</div>
                            <div className="flex-shrink-0">
                                <Link to={`/detail/${post.id}`} className="btn btn-info">Info</Link>
                            </div>
                        </div>
                    )
                    }
                })
            }
        </div>

    )
}
