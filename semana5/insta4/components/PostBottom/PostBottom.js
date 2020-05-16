import React from 'react';
import PropTypes from 'prop-types';
import './PostBottom.css'
import heartWhite from './icones/favoritewhite.svg';
import heartBlack from './icones/favorite.svg';
import commentIcon from './icones/commenticon.svg';

class PostBottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            heartIcon: heartWhite,
            favoriteCounter: 0,
            commentCounter: 0,
            formComentario: '',
            comments: []
        }

    }

    darLike = () => {
        let like = this.state.liked;
        let counter = this.state.favoriteCounter;
        if (like) {
            const novoEstado = {
                liked: !like,
                favoriteCounter: --counter,
                heartIcon: heartWhite
            }
            this.setState(novoEstado)
        }
        else {

            const novoEstado = {
                liked: !like,
                favoriteCounter: ++counter,
                heartIcon: heartBlack
            }
            this.setState(novoEstado)
        }
    };

    comentar = () => {
        let form = this.state.formComentario;
        if (!form) {
            form = (<div className="form-comment"><input placeholder="Faça seu Comentario!" onKeyPress={this.apertouEnter} /></div>);
            this.setState({
                formComentario: form
            })
        }
        else {
            this.setState({
                formComentario: ''
            })
        }
    }
    apertouEnter = (event) => {
        const code = event.which;
        const text = event.target.value;
        if (code === 13) {
            let counter = this.state.commentCounter;
            let newComments = this.state.comments;
            newComments.push(text);
            this.setState({
                formComentario: '',
                commentCounter: ++counter,
                comments: newComments
            })
        }
    }


    render() {
        return (
            <div className="post-bottom-container">
                <div className="favorite-icon">
                    <img onDoubleClick={this.darLike} src={this.state.heartIcon} alt="" />
                    {this.state.favoriteCounter}
                </div>
                <div className="comment-icon">
                    <img onClick={this.comentar} src={commentIcon} alt="" />
                    {this.state.commentCounter}
                </div>
                {this.state.formComentario}
                <div className="comment-section">
                    {this.state.comments.map((element) => (<p>{element}</p>))}
                </div>
            </div>
        );
    }
}

export default PostBottom