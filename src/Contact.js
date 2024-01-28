function Contact() {

    return(
        <div className="contactCont">
            <div className="contact-head">
            <h2 className="about-header">Contact us</h2>
            </div>
            <form
            action="https://formspree.io/f/xpzgpwan"
            method="POST"
            >
            <input type="hidden" name="_language" value="en"/>
           
              <div>
                <label>
                    Your email: <input type="email" placeholder="Enter your email..." name="_replyto" required=""/>
                </label>
              </div>
              <div>
                <label>
                    Your name: <input type="text" placeholder="Enter your name..." name="_replyto" required=""/>
                </label>
              </div>
              <div>
                <label>
                    Your message: 
                    <br/>
                    <textarea name="message" placeholder="Enter your message..." required=""></textarea>
                </label>
              </div>
              <div class="btnTwo">
                <button class="submit" type="submit">Send</button>
              </div>
            </form>
            
        </div>
    )
}

export default Contact;