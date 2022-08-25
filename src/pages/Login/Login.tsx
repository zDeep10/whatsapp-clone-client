import React from "react";
import Form from "../../components/Form/Form";
import { Background, Col } from "./style";

const Login = () => {

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