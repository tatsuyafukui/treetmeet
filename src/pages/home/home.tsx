import React, { Component } from 'react';
import classes from './home.css';
import Modal from '../../organisms/modal/modal';
import { connect } from 'react-redux'
class Home extends Component<any, any> {

    state= {
        modalShow: false
    };



    modalCloseHandler = () => {
      this.setState({modalShow: false});
    };

    modalOpenHandler = () => {
        this.setState({modalShow: true});
    };

    render() {
        return (
            <div>
                <div className={classes.topContainer}>
                    <div className={classes.inner}>
                        <div className={classes.title}>
                            <h1>ランチのセッティングを簡単に</h1>
                            <h1>毎日に新しい発見を</h1>
                        </div>
                        <div className={classes.btn} style={{minWidth: '64px', margin: '0 auto', maxWidth: '300px', textAlign: 'center'}}>
                            <button className={'btn'} onClick={this.modalOpenHandler}>
                                無料会員登録
                            </button>
                            <button className={`btn ${classes.facebook}`} onClick={this.modalOpenHandler}>
                                Facebookで続ける
                            </button>
                            <button className={`btn ${classes.twitter}`} onClick={this.modalOpenHandler}>
                                Twitterで続ける
                            </button>
                            <button style={{color: '#fff'}}>ログインはこちらから</button>
                        </div>
                    </div>
                </div>
                <Modal close={this.modalCloseHandler} show={this.state.modalShow} />
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {
    console.log(state.auth.uid);
    return {
        uid: state.auth.uid,
    }
};


export default connect(mapStateToProps)(Home);