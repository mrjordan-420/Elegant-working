import { React, useState } from "react";



const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [formErr, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (event) => {
        const item = event.target.value
        if (item != "" && item.length < 3) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const emailValidation = (event) => {
        console.log("Email validtion")
    }
    const textValidation = (event) => {
        console.log("Text validtion")
    }

    return (
        <div>
            <h1 className="contact-div">Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={handleChange} />{formErr ? <span>Error</span> : ""}
                <br />
                <input type="email" placeholder="Email" onChange={emailValidation} />
                <br />
                <input type="textarea" placeholder="Message" onChange={textValidation} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;