import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Background from '../img/pondokit.png';
import 'animate.css';


const Example = (props) => {
    return (
      <div className="container header mt-5 animated bounceInDown">
        <Jumbotron style={{textAlign: 'center', fontFamily: 'monospace' ,backgroundSize: '100% 100%',backgroundImage: `url(${Background})`}}>
          <h1 className="display-2 animated infinite pulse">Selamat Datang!</h1>
          <h1 className="display-5">Saya adalah seorang programmer yang masih belajar.</h1>
          <hr className="my-2" />
          <h1 className="display-1 animated infinite bounce">Saya <b>Adi Aswara</b></h1>
          <h1 className="display-4">Santri Pondok IT</h1>
          <p className="lead">
            <button className="btn btn-lg btn-primary">Klik</button>
          </p>
        </Jumbotron>
      </div>
    );
  };
  
  export default Example;