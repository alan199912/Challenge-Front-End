import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import React, { Component } from 'react'

// components
import Home from '../Home/home'
import Detail from '../Detail/detail'
import Create from '../Form/Create/create';
import Edit from '../Form/Edit/edit';

export default function Nav() {

    const [post, setPost] = React.useState([])

    React.useEffect( () => {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPost(data);
    }

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* <a class="navbar-brand" href="/">Challenge Front End</a> */}
                    <Link to="/" className="navbar-brand">Chellenge Front End</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/edit" className="nav-link" activeClassName="active">Edit</Link>
                            </li> */}
                        </ul>
                    </div> 
                </div>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <Home post={post}/>
                </Route>
                <Route path="/create">
                    <Create post={post}/>
                </Route>
                {/* <Route path="/edit">
                    <Edit/>
                </Route> */}
                <Route path="/detail/:id">
                    <Detail post={post}/>
                </Route>
                <Route path="/edit/:id">
                    <Edit post={post}/>
                </Route>
            </Switch>
        </Router>
    )
}

