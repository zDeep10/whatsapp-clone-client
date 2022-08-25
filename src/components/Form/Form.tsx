import React, { useState } from "react";
import { Button, Input, SmButtons } from "../../pages/Login/style";

const Form = () => {

    // STATES
    const [formType, setFormType] = useState('Sign In')

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // HANDLE FORM
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    // HANDLE INPUTS
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="" className="d-flex flex-column">
                <div className="row justify-content-end mb-5">
                    <SmButtons color=" #b3b3b3;" className="col-3 p-0" onClick={() => setFormType('Sign Up')}>Sign Up</SmButtons>
                    <SmButtons color="#7e7e7e;" className="col-3 p-0" onClick={() => setFormType('Sign In')}>Sign In</SmButtons>
                </div>
                <h1 className="mb-5 h2 text-white">{formType}</h1>
                <Input type="email" placeholder="E-mail" name="email" className="mb-4" onChange={handleChange} />
                <Input type="password" placeholder="Password" name="password" className="mb-4" onChange={handleChange} />
                <Button className="p-2 fw-bolder col-11 m-auto">{formType}</Button>
            </form>
        </>
    )
}

export default Form;