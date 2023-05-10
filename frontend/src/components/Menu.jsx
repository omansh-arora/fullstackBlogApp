import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/?cat=${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     desc: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     img: 'https://picsum.photos/536/354'
  //   },
  //   {
  //     id: 2,
  //     title: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     desc: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     img: 'https://picsum.photos/536/354'
  //   },
  //   {
  //     id: 3,
  //     title: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     desc: 'lorem Ipsum sit amet dolor sit amet, consectetur adipiscing elit',
  //     img: 'https://picsum.photos/536/354'
  //   }
  // ]
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className='post' key={post.id}>
          <img src={post.imageUrl} alt=''></img>
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
