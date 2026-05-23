import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import './Loginform.css';

export function LoginForm()
{
    const [isButtonShow, setIsButtonHide] = useState(true);

    const [isTimeNow, setIsTimeNow] = useState(dayjs().format('HH:mm:ss'));

    useEffect(() => {
      setInterval(() => {
        console.log('run code');
        setIsTimeNow(dayjs().format('HH:mm:ss'));
        //root.render(paragraph)
      }, 1000);
    })

    function showPassword()
    {
        if (isButtonShow)
        {
            setIsButtonHide(false);
        }
        else
        {
            setIsButtonHide(true);
        }
    }

    return (
        <>
            <div>
                <input
                    className="input-box" 
                    placeholder="Email" 
                />
            </div>

            <div>
              <input
                className="input-box"  
                placeholder="Password"
                type={isButtonShow ? 'password' : 'text'}
              />

              <button
                className="show-button"
                onClick={showPassword}>{isButtonShow ? 'Show' : 'Hide'}</button>
            </div>

            <button
              className="sign-form-button"
              >Login</button>

            <button
              className="sign-form-button"
              >Sign up</button>

            <p>Current Time: {isTimeNow}</p>
        </>
    );
}