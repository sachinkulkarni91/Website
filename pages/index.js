import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Course';
import Base from './components/Base';



export default function Home() {

  return (
    <React.Fragment>
      <header>
        <Base />
        <div className='container'>
          <Course />
        </div>

      </header>





    </React.Fragment>
  )
}
