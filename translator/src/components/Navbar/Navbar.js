import React from 'react'
import logo from './logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Translate Hub</a> */}
  <Link to={"home"}>
  <img src={logo} width="220" height="50"/>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Keyword Extractor <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Phrasebook<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Speak
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="texttospeech">Text to Speech</a>
          <a class="dropdown-item" href="#">Speech to Text</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Words
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Synonyms</a>
          <a class="dropdown-item" href="#">Antonyms</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <button type="button" class="btn btn-light">Sign in</button>&nbsp;&nbsp;
    <button type="button" class="btn btn-light">Sign up</button>
    </form>
  </div>
</nav>
    </div>
  )
}
