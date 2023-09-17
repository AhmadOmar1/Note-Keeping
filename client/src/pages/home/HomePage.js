import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navbar/navbar.js'
import './HomePage.css';
import FullWidthTextField from '../../components/fullWidthTextField/FullWidthTextField';
import NoteList from '../../components/notelist/NoteList';

function HomePage() {

  return (
    <div className="home-page">
        <NavBar />
      <div className='container'>
        <FullWidthTextField/>
        <NoteList />

      </div>
    </div>
  );
}

export default HomePage;
