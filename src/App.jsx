import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Header title='My image gallery' />
      <Content />
      <Footer author='Saku Sarajärvi'/>
    
    
    </>
  );
}
function Header({title}){
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
function Footer () {
  return (
    <footer>
      <span>copyright: Saku Sarajärvi</span>
    </footer>
  )
}

function Content() {
  return (
    <div className='content'>
      <Card imageUrl='https://picsum.photos/id/0/300/200' title='Computer' text='Such a great appliance for coding'/>
      <Card imageUrl='https://picsum.photos/id/12/300/200' title='Beach' text='Take a deep breath, it will be allright!'/>
      <Card imageUrl='https://picsum.photos/id/23/300/200' title='Forks' text='Luke, use the fork!!!'/>
    </div>
  );
}

function Card( {imageUrl, title, text}) {
  return (
    <div className='card'>
      <img src={imageUrl} className='card-img-top' alt="..." />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
}

  

export default App
