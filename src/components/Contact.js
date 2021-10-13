import '../style/Contact.css'
function Contact() {
    return (
        <form>
            <input placeholder="Email" className="form_input_email" type="text" />
            <textarea placeholder="Message  " className="form_area_message" name="" id="" cols="30" rows="10"></textarea>
            <input className="form_input_submit" type="submit" value="Send" />
        </form>
    )
}

export default Contact