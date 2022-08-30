import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { Background, Col } from "./style";
import data from "../../data/users.json"

const Login = () => {

    // type UserType = {
    //     name: string
    //     email: string
    //     senha: string
    // }

    const [usersData, setUsersData] = useState(data);

    // useEffect(() => {

    //     function gettingData() {
    //         setUsersData(data)
    //     }

    //     gettingData();

    //     console.log(usersData)
    // }, []);


    return (
        <Background>
            <div className="container-fluid h-100  d-flex align-items-center justify-content-center text-center">
                <div className="row w-100 justify-content-center">
                    <Col className="col-12 p-4 py-5">
                        <Form />
                    </Col>
                </div>
            </div >
        </Background >
    )
}

export default Login;