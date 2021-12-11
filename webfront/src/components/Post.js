import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getListProps: []
        }
    }

    componentDidMount() {
        fetch('/')
            .then(reponse => {
                return reponse.json();
            })
            .then((post) => {
                this.setState({ post: post.data })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (

            <React.Fragment>
                <section>

                    {this.state.post.map((post, i) => {
                        return <div key={i} className="">
                            <img src={post.image} alt=''></img>
                            <div>{post.title}</div>
                            <div>{post.Description}</div>
                        </div>
                    }
                    )}
                </section>
            </React.Fragment>
        )
    }
}


export default Post;