import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Socials from "../socials/socials"
import "./form.scss"

// emailJs init
import { init, sendForm } from 'emailjs-com';
init("user_WKLNel7ISyJbuSEDM7p6o");

const ContactForm = () => {

    // enquiry number
    let formatTwoDigits = (digit) => ("0" + digit).slice(-2);
    var tempDate = new Date();
    var date = `${tempDate.getDate()}-${formatTwoDigits(tempDate.getMonth()+1)}-${(tempDate.getFullYear())}`;
    const [enquiryNumber, setEnquiryName] = useState('');

    // form submitted message
    const [submitted, setSubmitted] = useState(false);

    // form submit get username to success message
    const [successMessageUserName, setName] = useState('');

    // form validation
    const { register, handleSubmit, errors, reset, watch } = useForm({ mode: "onBlur" });
    const message = watch('message') || "";
    const messageCharsLeft = 500 - message.length;

    // set valid 'bar' className to select when option is selected
    const [value, setValue] = React.useState();

    // form onSubmit (send form, clear fields, generate enquiry number, and show success message with the users name in it + console log)
    const onSubmit = (data) => {
        console.log(data);
        setName(`${data.user_name}`);
        setEnquiryName(`${data.user_surname}-${date}`);
        setSubmitted(true);
        sendForm('contact_form', 'template_5d4g139', '#contact-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            reset();
        }, function(error) {
            console.log('FAILED', error);
        });
    }

    return(
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

        <input type="hidden" name='enquiry_number' value={enquiryNumber} />

        <div className="container">
            <div className="row">
                
                {submitted ? <div className="success-message"><h3>Thanks {successMessageUserName}!</h3><p>A member of the team will be in touch shortly.</p><Socials /></div> : null}

                <div className="col-sm-6">
                    <div className="input-wrapper">
                        <input id="user_name" type="text" name="user_name" placeholder="Your name" ref={register({required: true, maxLength: 80, validate: value => value !== "admin" || "Nice try!"})} aria-invalid={errors.user_name ? "true" : "false"} className={errors.user_name ? 'error' : '' }/>
                        <label htmlfor="user_name">Name<sup>*</sup></label>
                        {errors.user_name && <span>Please let us know your name</span>}
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="input-wrapper">
                        <input id="user_surname" type="text" name="user_surname" placeholder="Your surname" ref={register({required: true, maxLength: 80, validate: value => value !== "admin" || "Nice try!"})} aria-invalid={errors.user_surname ? "true" : "false"} className={errors.user_surname ? 'error' : '' }/>
                        <label htmlfor="user_surname">Surname<sup>*</sup></label>
                        {errors.user_surname && <span>Please let us know your surname</span>}
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-wrapper">
                        <input id="user_email" type="Email" name="user_email" placeholder="Your email" ref={register({required: true, pattern: /^\S+@\S+$/i})} aria-invalid={errors.user_email ? "true" : "false"} className={errors.user_email ? 'error' : '' }/>
                        <label htmlfor="user_email">Email<sup>*</sup></label>
                        {errors.user_email && <span>Please enter a valid email address</span>}                        
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-wrapper">
                        <input type="tel" id="phone_number" name="phone_number" placeholder="Your phone number" pattern="[0-9]*" inputMode="numeric" autoComplete="tel" />
                        <label htmlfor="phone_number">Request a call back</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-wrapper">
                        <select id="package" name="package" ref={register({required: true})} aria-invalid={errors.package ? "true" : "false"} className={errors.package ? 'error' : `${value}` } onBlur={e => setValue(e.currentTarget.value)}>
                            <option value="" hidden disabled selected>-Please select-</option>
                            <option value="Payed bar" className="selected">Payed bar</option>
                            <option value="Tab bar">Tab bar</option>
                            <option value="Open bar">Open bar</option>
                            <option value="Other - themed bar">Other - Gin, Craft beer, cocktail, Wine bar etc</option>
                        </select>
                        <label htmlFor="Package">What package are you interested in?<sup>*</sup></label>
                        {errors.package && <span>Please select an option</span>}     
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-wrapper">
                        <input type="number" name="number" placeholder="75 minimum" pattern="[0-9]*" inputMode="numeric" />
                        <label htmlfor="number">Approximate number of guests</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-wrapper">
                        <textarea id="message" name="message" placeholder="Tell us more about your event" ref={register({required: true, maxLength: 500})} aria-invalid={errors.message ? "true" : "false"} className={errors.message ? 'error' : '' }></textarea>
                        <label htmlfor="message">Message<sup>*</sup></label>
                        {errors.message && errors.message.type === "required" && <span className="textarea-error">Message is required</span>}
                        {errors.message && errors.message.type === "maxLength" && <span className="textarea-error">500 word max length exceeded</span>} 
                        <small className='message-chars-left'>{messageCharsLeft}</small>                       
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-checkbox">
                        <label htmlfor="gdpr_consent">
                            <input type="checkbox" id="gdpr_consent" name="gdpr_consent" value="" ref={register({required: true})} aria-invalid={errors.gdpr_consent ? "true" : "false"} className={errors.gdpr_consent ? 'error' : '' } />
                            I've read and accept the <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                        </label>
                        {errors.gdpr_consent && <span>Please confirm you have read and accept our Privacy Policy</span>}
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit">Send</button>
                </div>
            </div>
        </div>

        </form>

    )
}

export default ContactForm