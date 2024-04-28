import React, { useState } from 'react'
import "../../CSS/Auth/LogIn.css"
import { Navbar } from '../../components/Navbar'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import OtpInput from 'react-otp-input';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { apiConnector } from '../../services/apiConnector';
import { authEndPoint } from '../../services/api';
import toast from 'react-hot-toast';
import "../../Button Loader/ButtonLoader.css"
import { Link, useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const SignUp = () => {
    const [passwordEye, setPasswordEye] = useState(false)
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [otpSend, setOtpSend] = useState(false)
    const [otp, setOtp] = useState('');
    const [formData, setFormData] = useState({})
    const { SENDOTP_API, SIGNUP_API } = authEndPoint
    const [loading, setLoading] = useState(false)
    const navigate =  useNavigate()




    const handleInputChange = (event) => {
        const inputValue = event.target.value.slice(0, 10);
        setPhoneNumber(inputValue);
        setIsValid(validatePhoneNumber(inputValue));
    };

    const validatePhoneNumber = (number) => {
        // Regular expression for mobile number validation
        const regex = /^[0-9]{10}$/;
        return regex.test(number);
    };


    const changeHandler = (e) => {
        const copyFormData = formData
        if (e.target.name === "mobile") {
            const inputValue = e.target.value.slice(0, 10);
            setPhoneNumber(inputValue);
            setIsValid(validatePhoneNumber(inputValue));
            // copyFormData[e.target.name] = e.target.value
        }

        else {
            copyFormData[e.target.name] = e.target.value
        }
        setFormData(copyFormData)

        console.log(formData)
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("click")
        setLoading(true)
        if (formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
            try {
                const response = await apiConnector("POST", SENDOTP_API, {
                    email: formData.email
                })
                console.log("SENDOTP API RESPONSE............", response)

                console.log(response)
                if (response?.status === 200) {
                    toast.success("OTP Send Successfully.")
                    setOtpSend(true)

                }

                if (!response.data.success) {
                    throw new Error(response.data.message)
                }
                setLoading(false)
            }
            catch (error) {
                console.log("SENDOTP API ERROR............", error)
                toast.error(error.response.data.message)
                setLoading(false)
            }

        }
        else {
            toast.error("Password not same.")
        }

    }


    const submitOtpHandler = async () => {
        setLoading(true)
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                ...formData,
                otp: otp,
                mobile: phoneNumber
            })

            if (response.status===200) {
                toast.success("User Created.")
                navigate("/login")
                setLoading(false)
            }
            if (!response.data.success) {
                throw new Error(response.data.message)
            }

        }
        catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    return (

        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12'>
                <Navbar />

                <Modal
                    open={otpSend}
                    onClose={() => setOtpSend(!otpSend)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style} >
                        <div>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}

                            />
                            <div className=' w-full mt-5 flex justify-end items-end  '>
                                {
                                    loading ?
                                        <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                            <div className='loader'></div>
                                        </div>
                                        :
                                        <button
                                         className='py-2 border px-4 border-darkYellow rounded-xl bg-darkYellow'
                                         onClick={submitOtpHandler}
                                         >Submit</button>

                                }
                            </div>
                        </div>

                    </Box>



                </Modal>




                {/* {
                    otpSend && <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />
                } */}
                <div className='body '>

                    <div className='sm:w-[500px] w-[90%] flex flex-col justify-center items-center mt-[2rem]'>
                        <div class="glass-panel ">
                            <div className='text-4xl text-darkYellow'>Sign Up</div>
                            <form onSubmit={(e) => submitHandler(e)}>
                                <div className='flex flex-col gap-3  w-full justify-center items-center mt-[2rem]'>
                                    <div className='flex w-full gap-2 justify-center items-center'>
                                        <div className='flex flex-col w-full justify-start items-start gap-1'>
                                            <label htmlFor='firstName' className='text-darkYellow'>First Name</label>
                                            <input
                                                id='firstName'
                                                type='text'
                                                name='firstName'
                                                onChange={(e) => changeHandler(e)}
                                                required
                                                className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                            />
                                        </div>
                                        <div className='flex flex-col w-full justify-start items-start gap-1'>
                                            <label htmlFor='lastName' className='text-darkYellow'>Last Name</label>
                                            <input
                                                id='lastName'
                                                type='text'
                                                name='lastName'
                                                onChange={(e) => changeHandler(e)}
                                                required
                                                className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                                        <label htmlFor='email' className='text-darkYellow'>
                                            Email
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            onChange={(e) => changeHandler(e)}
                                            required
                                            className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'

                                        />
                                    </div>
                                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                                        <label htmlFor='mobile' className='text-darkYellow'>
                                            Mobile No.
                                        </label>
                                        <input
                                            type='number'
                                            id='mobile'
                                            value={phoneNumber}
                                            name='mobile'
                                            required
                                            onChange={(e) => changeHandler(e)}
                                            className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'

                                        />
                                        {!isValid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number.</p>}
                                    </div>
                                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                                        <label htmlFor='password' className='text-darkYellow'>
                                            Password
                                        </label>
                                        <div
                                            className='flex justify-between items-center px-2 w-full bg-transparent  text-darkYellow border rounded-xl  border-darkYellow outline-none'

                                        >
                                            <input
                                                type={`${passwordEye ? "text" : "password"}`}
                                                id='passowrd'
                                                name='password'
                                                onChange={(e) => changeHandler(e)}
                                                required
                                                className=' w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-none outline-none'

                                            />
                                            {
                                                !passwordEye ?
                                                    <FaEye
                                                        className='text-xl'
                                                        onClick={() => setPasswordEye(!passwordEye)}
                                                    />
                                                    : <FaEyeSlash
                                                        className='text-xl'
                                                        onClick={() => setPasswordEye(!passwordEye)}
                                                    />
                                            }

                                        </div>


                                    </div>

                                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                                        <label htmlFor='confirmPassword' className='text-darkYellow'>
                                            Confirm Password
                                        </label>
                                        <div
                                            className='flex justify-between items-center px-2 w-full bg-transparent  text-darkYellow border rounded-xl  border-darkYellow outline-none'

                                        >
                                            <input
                                                type={`${confirmPasswordEye ? "text" : "password"}`}
                                                id='confirmPassword'
                                                name='confirmPassword'
                                                onChange={(e) => changeHandler(e)}
                                                required

                                                className=' w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-none outline-none'

                                            />
                                            {
                                                !confirmPasswordEye ?
                                                    <FaEye
                                                        className='text-xl'
                                                        onClick={() => setConfirmPasswordEye(!confirmPasswordEye)}
                                                    />
                                                    : <FaEyeSlash
                                                        className='text-xl'
                                                        required
                                                        onClick={() => setConfirmPasswordEye(!confirmPasswordEye)}
                                                    />
                                            }

                                        </div>


                                    </div>


                                    <div className='flex justify-end w-full mt-4 items-end'>
                                        {
                                            loading ?
                                                <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                                    <div className='loader'></div>
                                                </div>
                                                :
                                                <input type='submit' className='bg-darkYellow py-2 px-5 rounded-xl ' />
                                        }



                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
