import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import Head from 'next/head'
import React from 'react'
import iptracker from '../../public/images/iptracker.png'
import chatapp from '../../public/images/chatapp.jpg'
import todolist from '../../public/images/todolist.png'
import weather from '../../public/images/weather.png'
const chat = chatapp;
const projects = () => {
  return (
    <>
    <div>
    <Head>
      <title>
        Projects - Ishan Kumar
      </title>
    </Head>
    <Navbar/>
    <main className='"w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-3 p-10'>
    <Product title="Chat App" githref="https://github.com/4ddx/chat-app-netlify" href="https://go-chat-2.vercel.app/" image={chat} desc="A simple chatroom made in Typescript and Firebase(storage)"/>
    <Product title="Todo List" githref="https://github.com/4ddx/todoList" href="https://todo-list-4ddx.vercel.app/" image={todolist} desc="A Local TodoList. Never forget a task again!"/>
    <Product title='Klic-Weather' githref="https://github.com/4ddx/weather-app" href="https://weather-app-4ddx.vercel.app/" image={weather} desc="Wanna know the weather in a city? Just Klic it!"/>
    <Product title="SmusiK" githref="" href="/" image="" desc="A full stack music app made with Spotify API for users to discover new songs."/>
    <Product title="IP Tracker" githref="https://github.com/4ddx/I.P-Tracker/tree/main" href="https://ip-tracker-steel.vercel.app/" image={iptracker} desc="A basic I.P Address tracker. On first render, user's I.P is displayed."/>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default projects