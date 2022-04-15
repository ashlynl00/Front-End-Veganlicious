const Contact = () => {
    return (
        <form>
            First Name: <input type='text' name='fname'></input>
            Last Name: <input type='text' name='lname'></input>
            Email: <input type='email' name='email'></input>
            Message: <textarea name='message'></textarea>
        </form>
    )
}

export default Contact;