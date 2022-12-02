import {Form, Formik, Field} from "formik";
import React from "react";
// @ts-ignore
import classes from "../Messages.module.css";
import UserMessagesItem from "./messagespages/mesegeitem/UserMessagesItem";

const Message = (props: { messagesData: Array<any>; myId: number; authUserPhoto: { small: string, large: string }; postMessageInListThunkCreator: (arg0: number, arg1: string) => void; ChatId: number; }) => {
    let reverseMessData = JSON.parse(JSON.stringify(props.messagesData));
    reverseMessData.reverse()
    return (
        <div>
            <div className={classes.messages__block}>
                {reverseMessData.map((el: { addedAt: string; body: string; id: number; recipientId: number; senderId: number; senderName: string; translatedBody: any; viewed: boolean; }) => {

                    return (
                        <UserMessagesItem
                            addedAt={el.addedAt}
                            body={el.body}
                            id={el.id}
                            recipientId={el.recipientId}
                            senderId={el.senderId}
                            senderName={el.senderName}
                            translatedBody={el.translatedBody}
                            viewed={el.viewed}
                            myId={props.myId}
                            authUserPhoto={props.authUserPhoto.small}
                        />

                    );
                })}
            </div>
            <div>
                <Formik
                    initialValues={{
                        message: "",
                    }}
                    onSubmit={(value, {resetForm}) => {
                        if (value.message && value.message.replace(/\s/g, "") !== "") {
                            props.postMessageInListThunkCreator(props.ChatId, value.message.replace(/\n/g, " "))
                            resetForm({
                                values: {message: "",}
                            })
                        }
                    }}
                >
                    {(formik) => (
                        <Form className={classes.form}>
                            <Field
                                style={{
                                    all: "unset",
                                    display: "flex",
                                    width: "40em",
                                    height: "4em",
                                    border: "2px solid teal",
                                    margin: "1em auto",
                                    wordWrap: "break-word",

                                }}
                                name="message"
                                as="textarea"
                            ><p></p></Field>
                            <button type="submit">Send Message</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Message;
