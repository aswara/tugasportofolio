import React, { Component } from 'react';

class Api extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        const urlFetch = fetch('alamaturl')
        urlFetch.then( res => {
           if(res.status === 200)
              return res.json()   
        }).then( resJson => {
           this.setState({
               data: resJson
           })
        })
     }
}