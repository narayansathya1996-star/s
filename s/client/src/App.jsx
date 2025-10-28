import React,{useState} from 'react'
import Header from './components/Header'
import Configurator3D from './components/Configurator3D'
export default function App(){ const [route,setRoute]=useState('home'); return (<div className='app-root'><Header route={route} onNav={setRoute}/><main>{route==='home'&&<section className='container'><h1>LABIFIX — 3D Configurator</h1><div className='config-wrap'><Configurator3D/></div></section>}{route==='products'&&<section className='container'><h2>Products</h2></section>}{route==='blog'&&<section className='container'><h2>Blog</h2></section>}{route==='contact'&&<section className='container'><h2>Request Quote</h2></section>}</main></div>)}
