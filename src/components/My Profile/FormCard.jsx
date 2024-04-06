import React, { useEffect, useRef, useState } from 'react'
import "../../CSS/Home/Score.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaCamera } from "react-icons/fa";
import { setUpdateData, setUser, setUserProfileGender, setUserProfilePic } from '../../slices/profileSlice';
import { authEndPoint } from '../../services/api';
import { apiConnector } from '../../services/apiConnector';
import toast from 'react-hot-toast';


export const FormCard = () => {
    const { user,userProfilePic } = useSelector(state => state.profile)
    const { token } = useSelector(state => state.auth)
    const inputRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({})
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isEditActive, setIsEditActive] = useState(false)
    const [gender, setGender] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const dispatch = useDispatch()
    const { UPDATEPROFILEPICTURE, UPDATEPROFILE_API } = authEndPoint




    const handleGenderChange = (event) => {
        setGender(event.target.value);
        dispatch(setUserProfileGender(event.target.value))
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        dispatch(setUpdateData(event))
    };

    const selectImage = () => {
        inputRef.current.click()
    }

    console.log(user)



    useEffect( ()=>{
        setGender(user?.additionalDetails?.gender)
        console.log(phoneNumber)
        setPhoneNumber(user?.mobile)
        },[user] )



    const imageSelectorHandler = async (e) => {
        console.log(e)
        const file = e.target.files[0]
        console.log(file)



        try {

            const formData = new FormData()
            formData.append("displayPicture", file)
            const response = await apiConnector("PUT", UPDATEPROFILEPICTURE, formData,
                {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                }
            )
            console.log(
                "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
                response
            )

            if(response.status === 200){
                toast.success("Profile Picture Updated.")
                localStorage.setItem("profilePic",response.data.data.image)
                dispatch(setUser(response.data.data))
                dispatch(setUserProfilePic(response.data.data.image))
            }

        }
        catch (error) {
            console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
            toast.error("Could not Update Profile Picture")

        }






    }

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
            console.log("mobile")
            const inputValue = e.target.value.slice(0, 10);
            setPhoneNumber(inputValue);
            setIsValid(validatePhoneNumber(inputValue));
           
            copyFormData.mobile = phoneNumber
        }

        else {
            copyFormData[e.target.name] = e.target.value
        }
        setFormData(copyFormData)

        console.log(formData)
        dispatch(setUpdateData(e))
    }

const submitHandler = async(e) =>{
    e.preventDefault();
    try{
        const response = await apiConnector("PUT", UPDATEPROFILE_API, {...user},
        { Authorization: `Bearer ${token}`, }
        )

        console.log("PROFILE UPDATED",response)
        if(response.status === 200){
            toast.success("Profile Updated")
         
            console.log("updatedUserDetails",response.data.updatedUserDetails)
            localStorage.setItem("user", JSON.stringify(response.data.updatedUserDetails))
            setIsEditActive(false)
            dispatch(setUser(response.data.updatedUserDetails))
        }
    }
    catch(error){
console.log(error)
toast.error("Could not update profile.")
    }
}



    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[500px] '>
                <div className='flex flex-col  justify-end items-end h-[50px] '>
                    {
                        !isEditActive &&

                        <div className='max-w-max seeAllBtn' onClick={() => setIsEditActive(!isEditActive)}>Edit</div>

                    }
                </div>

                <div className='flex flex-col justify-center items-center mt-[3rem] gap-4'>
                    <div className='max-w-max relative' onClick={selectImage}>
                        {
                            isEditActive && <input type='file'
                                onChange={(e) => imageSelectorHandler(e)}
                                ref={inputRef}
                                style={{ display: "none" }}
                                accept="image/*"
                            />
                        }

                        <img
                            src={userProfilePic}

                            className='w-[120px] rounded-full opacity-80'
                        />
                        {
                            isEditActive && <FaCamera className=' absolute bottom-[-1px] right-3 text-4xl' />
                        }

                    </div>


                    <div>
                        <form onSubmit={submitHandler}>
                            <div className='flex flex-col gap-3  w-full justify-center items-center mt-[2rem]'>
                                <div className='flex w-full gap-2 justify-center items-center'>
                                    <div className='flex flex-col w-full justify-start items-start gap-1'>
                                        <label htmlFor='firstName' className='text-darkYellow'>First Name</label>
                                        <input
                                            id='firstName'
                                            type='text'
                                            name='firstName'
                                            onChange={(e) => changeHandler(e)}
                                            disabled={!isEditActive}
                                            value={user?.firstName}
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
                                            value={user?.lastName}
                                            disabled={!isEditActive}
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
                                        disabled
                                        value={user?.email}
                                        className='px-2 w-full bg-transparent  text-gray-500 border rounded-xl py-2 border-darkYellow outline-none'

                                    />
                                </div>
                                <div className='flex flex-col w-full justify-start items-start gap-1'>
                                    <label htmlFor='mobile' className='text-darkYellow'>
                                        Mobile No.
                                    </label>
                                    <input
                                        type='number'
                                        id='mobile'
                                        value={user?.mobile}
                                        name='mobile'
                                        disabled={!isEditActive}
                                        onChange={(e) => changeHandler(e)}
                                        className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'

                                    />
                                    {!isValid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number.</p>}
                                </div>

                                <div className='flex flex-col w-full justify-start items-start gap-1'>
                                    <label htmlFor='contactNumber' className='text-darkYellow'>
                                        Additional Mobile Number
                                    </label>
                                    <input
                                        type='number'
                                        id='contactNumber'
                                        value={user?.additionalDetails?.contactNumber}
                                        name='contactNumber'
                                        disabled={!isEditActive}
                                        onChange={(e) => changeHandler(e)}
                                        className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'

                                    />
                                    {!isValid && <p style={{ color: 'red' }}>Please enter a valid 10-digit phone number.</p>}
                                </div>

                                <div className='flex w-full justify-between items-center'>
                                    <div className='max-w-max text-darkYellow'>Gender</div>
                                    <div className='  w-full flex justify-evenly items-center'>
                                        <label className='text-darkYellow flex gap-2'>
                                            <input
                                                type="radio"
                                                value="Male"
                                                checked={gender === 'Male'}
                                                onChange={handleGenderChange}
                                                disabled={!isEditActive}
                                                className='text-darkYellow'
                                            />
                                            Male
                                        </label>
                                        <label className='text-darkYellow flex gap-2'>
                                            <input
                                                type="radio"
                                                value="Female"
                                                checked={gender === 'Female'}
                                                disabled={!isEditActive}
                                                onChange={handleGenderChange}
                                            />
                                            Female
                                        </label>
                                        <label className='text-darkYellow flex gap-2'>
                                            <input
                                                type="radio"
                                                value="Other"
                                                checked={gender === 'Other'}
                                                disabled={!isEditActive}
                                                onChange={handleGenderChange}
                                            />
                                            Other
                                        </label>
                                    </div>
                                </div>

                                <div className='flex flex-col w-full justify-start items-start gap-1'>
                                    <h2 className='text-darkYellow'>Date Of Birth</h2>
                                    {/* <div>
                                        {user?.additionalDetails?.dateOfBirth ?
                                            <div className='px-2 w-full bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'>{user?.additionalDetails?.dateOfBirth}</div>
                                            :
                                            <div></div>
                                        }
                                    </div> */}
                                    <input
                                        type="date"
                                        value={user?.additionalDetails?.dateOfBirth}
                                        onChange={handleDateChange}
                                        disabled={!isEditActive}
                                        name='dateOfBirth'
                                        className=' custom-date-input px-2 max-w-max bg-transparent  text-darkYellow border rounded-xl py-2 border-darkYellow outline-none'
                                    />
                                    {/* Display selected date */}

                                </div>


                                {/* <div className='flex flex-col w-full justify-start items-start gap-1'>
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


                                    </div> */}


                                {
                                    isEditActive ?
                                        <div className='flex justify-end w-full mt-4 items-end'>
                                            {
                                                loading ?
                                                    <div className='bg-darkYellow py-2 px-5 rounded-xl w-[84] flex justify-center items-center'>
                                                        <div className='loader'></div>
                                                    </div>
                                                    :
                                                    <button type='submit' className='bg-darkYellow py-2 px-5 rounded-xl '>Save</button>
                                            }



                                        </div>
                                        :
                                        <div></div>
                                }



                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
