import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Recaptcha = () => {
    const recaptchaRef = React.createRef();
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    function onChange(value) {
        // console.log("Captcha value:", value);
      }
    return (
        <div>
            <ReCAPTCHA
                sitekey={siteKey}
                ref={recaptchaRef}
                onChange={onChange}/>
        </div>
    )
} 

export default Recaptcha