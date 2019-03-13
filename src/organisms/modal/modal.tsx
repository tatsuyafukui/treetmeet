import React, { Component } from 'react';
import classes from './modal.css';
import firebase, { providerFacebook } from '../../firebase-config';
class Modal extends Component<any, any> {

    handleLogin = () => {
        firebase.auth().signInWithPopup(providerFacebook).then((res) => {
            console.log('======');
            console.log(res);
            console.log('======');
        });
        firebase.auth().getRedirectResult().then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                console.log('not login');

            } else {
                // サインイン済み
                console.log('login');
            }
        });
    };



    render() {
        let modal = null;

        if(this.props.show) {
            modal = (
                <div>
                    <div className={classes.modal} onClick={this.props.close}></div>
                    <div className={classes.modalContents}>
                        <button onClick={this.handleLogin} className={`btn ${classes.facebook}`}>
                            Facebookで続ける
                        </button>
                        <button className={`btn ${classes.twitter}`}>
                            Twitterで続ける
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                {modal}
            </div>
        );
    }
}

export default Modal;


