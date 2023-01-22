import {React, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/user.context';
import axios from 'axios';
import Vector from '../assets/angrywoman.png'

//FFB396

const LoginView = () => {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:8000/api/v1/userauth', {email: userEmail, password: userPassword})
        .then((response)=>{
            console.log(response.data);
            setCurrentUser(response.data);
            //console.log(currentUser)
        })
        .catch((err)=>{
            alert("There was an error :/");
            console.log(err)
        })
    }

    return(
        <>
            <div className='flex flex-col my-auto h-full w-full'>
                
                <div className='flex flex-row mx-auto'>
                    <div className='flex flex-col w-1/3 mx-auto my-auto'>
                        <div className=' border rounded-sm p-3'>
                            <div className='text-center text-3xl font-light py-2'>
                                <h1>Welcome Back!</h1>
                            </div>
                            <div className='flex flex-col mx-auto py-2'>
                                <input type='email' placeholder='Email' onChange={handleEmailChange}
                                className='border p-2 text-xl my-2'
                                 required/>
                                <input type='password' placeholder='Password' onChange={handlePasswordChange} 
                                className='border p-2 text-xl my-2'
                                required />
                            </div>
                            <div className='container mx-auto flex flex-col'>
                                <button className='border bg-angry-color hover:bg-angry-color-darkened duration-100 ease-in-out text-xl p-2' onClick={handleSubmit}>Sign In</button>
                                <p className='text-sm text-center underline'>New User?</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 mx-auto my-auto'>
                        <img 
                        alt='Angry Woman' 
                        src={Vector}
                        width={800} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginView;