// import React, { useContext, useEffect, useState } from 'react'
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
// import Delete from '../img/del.svg'
// import Edit from '../img/edit.svg'
// import Menu from '../components/Menu'
// import Blank from '../img/blankpfp.jpg'
// import { AuthContext } from './../context/authContext'
// import axios from 'axios'
// import moment from 'moment'
// import DOMPurify from "dompurify";

// export default function Account(){

//     const [file, setFile] = useState(null)

//     const {currentUser} = useContext(AuthContext)

//     const upload = async () => {
//         try {
//           const formData = new FormData()
//           formData.append('file', file)
//           const res = await axios.post('/api/upload', formData)
//           return res.data
//         } catch (err) {
//           console.log(err)
//         }
//       }
//       return(
//       {state? '' : <div><input
//             style={{ display: 'none' }}
//             type='file'
//             id='file'
//             name=''
//             onChange={e => {
//               setFile(e.target.files[0])
//               setImgName(e.target.files[0].name)
//             }}
//           />
//           <label className='upload' htmlFor='file'>
//             Upload image
//           </label></div>})

// }