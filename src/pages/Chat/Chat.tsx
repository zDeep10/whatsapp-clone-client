import React from "react";
import { Section, Form, Input, Ul } from "./style";

const Chat = () => {
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
                    <Form id="form" action="">
                        <Input id="input" placeholder="send messages" autoComplete="off" />
                        <button>Send</button>
                    </Form>
                </div>
            </div>
        </Section>
    )
}

export default Chat;