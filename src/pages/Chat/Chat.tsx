import React, { useState } from "react";
import { Section, Form, Input, Ul } from "./style";

const Chat = () => {
    const [data, setData] = useState({
        message: '',
        pass: '',
    })

    const submitHandle: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const eventName = e.target.name

        setData({
            ...data,
            [eventName]: e.target.value
        })
    }

    return (
        <Section className="container">
            <div className="row h-100 w-100 align-items-center justify-content-center flex-column text-center g-5">

                {/* MESSAGES */}
                <div className="col-12">
                    <h1>Chat</h1>
                    <Ul id="messages"></Ul>
                </div>

                {/* SEND MESSAGES */}
                <div className="col-12">
                    <Form id="form" onSubmit={submitHandle}>
                        <Input id="input" onChange={handleChange} name="message" placeholder="send messages" autoComplete="off" />
                        <button>Send</button>
                    </Form>
                </div>
            </div>
        </Section>
    )
}

export default Chat;