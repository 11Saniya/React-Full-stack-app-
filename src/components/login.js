import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { useNavigate } from 'react-router-dom'


const Log = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);

    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value)

        const { value, name } = e.target;//object destructing
        // console.log(value,name)

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "") {
            alert("email field is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email address")
        } else if (password === "") {
            alert("password field is required")
        } else if (password.length < 5) {
            alert("password length greater five")
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                console.log(userdata);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                // console.log(userlogin);
                if (userlogin.length === 0) {
                    alert("Invalid details")
                } else {
                    console.log("user login succesfully");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }
    }
    return (
        <>
            <div className='container' style={{ backgroundColor: "rgba(0, 0,0.5)" }}>
                <div className='container mt-3'>
                    <section className='text-center'>
                        <h3 className='text-center mt-4' style={{ backgroundColor: "rgba(67, 185,127)" }}>SIGN IN</h3>
                        <div className='right_data mt-2' style={{ width: "100%" }}>
                            <div className='sign_img' >
                                <img src="data:image/png;base64,iV
                        BORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAA
                        AAv+uv7AAAAbFBMVEX///8AAADh4eH6+vrd
                        3d2Tk5PY2Njx8fHu7u4mJia7u7sbGxuXl5
                        f19fVQUFCzs7MVFRVWVlYxMTGsrKympqZpa
                        WnHx8dxcXF6enrBwcHo6OhjY2NbW1vS0tI3
                        NzednZ0+Pj6JiYlGRkYNDQ0QS1IzAAAEFEl
                        EQVR4nO1a6ZqiMBAcQG6VQ27BEef933EHG
                        BkVKoFOcHe/L/XbxCLpdFcfHx8KCgoKCgo
                        KCgoKCgoKClwYulWaUexrHfw4MktLN/4Cj
                        Wyfu9or3HyfvZWGbRX+hMUdfmHZb+JxOB0h
                        jQHH0+ENPJxkeilTuImzMQ8jwNfycknBpta7493L0x3tNuNhmCt4d
                        DA3OpbqvJKIpp2rLYh44WoimhZ6G
                        xAh8OggncpaE/mFKZfIJ5mIpiUyidBPRPKpUG3kDmm2IkpEGpWK8ny
                        fEUrxKwbHofnx5XqJOeHoLMPbMq013gdNp0bsJjBj1g8lWO2Osf01e4z9T
                        nZl/FY4HBo4+l7Lya89zOUoej8B3Dqds0I9hb8PxIg40BLRxbdogS+m4hK0bwuX
                        QCpCXv+ANGvBWFSANa6IzD6BTWNWHuGg53yiE7HBw/lip1fZ1/yyIz0PssDHpZx1y
                        CtbZCboxnk7oi9gWRcTBnjCF+7Ky/xCn8okA5/Gf47o8VPT9z15P/QNexoRIweXo3OX6
                        uB6clrw0YFbq/ke6lDPL3X5HzEH6hvugAIh7R2XYLd8wVpwsdpUSCwBEmsiTGjSLQK71Xyz
                        g9q3JjFBgezGF+rVDayNSUyQSAob7tIGJSY0Lws2W5JH4VxNLhP+ZSMTk81E4ylSBy+VzAS
                        L2AHt25i47DTKYlRsSUwYqS7bueGch/h2WHkuS6LAzESj+hP8AJiaGunpHjQfyy5poViG4u
                        YAWtxh7wnyXJxHM/mzgfTJHTMFaG4Zm6ZPkGYbEZvP6s1mF3M0smZDOvYBftpUdicSDLtqzvyGC1HHQm3/
                        hDAqzL1ZRIvKgkRtD3MFOsjtyqX9raUg54AwLx7x5R6LpLR0fdeczPrCY07OiznvOMw/X9Sb7plINvag1x9R/
                        aSDm8w2zJ0GuxSB+gmsKWlnhoKsWuCIBGpKqM7mB+yEVJ89F6E622yED3mS7RvNTIlYrOM0V4/
                        lJxnfqCYO2hWcNpjE1nRpgffzRaeI9nhe6/YrIsdz0hMJ91WeexmruuLZYyyS0Np/lG4rneSD1pLRlXzI+/
                        O173C0Mik9r98+4HV9N6IdVvqS5gvupkeQfkYk5d28UCF5pkoqkcFqae2zRJK1jujmCtr1VIyWepYY3akUa6kYhe
                        wT6dDZSrwo5IzIYrk2MlL5fszhmpPuAo+/AZGfBC9e+JSNpjuQbeaU7rNbxZI8bpevjlLr0M+zhSln5NPQ004RRNv
                        Ns32MM35pgB2/E/Q1JdfbekL1Z+4xTj1n+lcHxzv3WbqbvGMedJwFvbVB2ejDX9p6UwbtT7bznlnQ/m9/52Pdy+0Y
                        1dHxdrmnAX6xe9d87IB/Y2Z4QD9HXY9z1PVfmqNWUFBQUFBQUFBQUFBQ+P/wB0SvL+XUrTsKAAAAAElFTkSuQmCC"
                                    style={{ maxwidth: "100%", backgroundColor: 'black' }} alt="img" />
                            </div>

                            <div className='left_data mt-2 ' style={{ width: "100%" }}>

                                <Form >


                                    <Form.Group className="mb-3 col-s-6" controlId="formBasicEmail">
                                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Username" />
                                    </Form.Group>



                                    <Form.Group className="mb-3 col-s-6" controlId="formBasicPassword">

                                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                                    </Form.Group>
                                    <p style={{ color: 'white' }}>

                                        <div>Forgot Password?</div>

                                    </p>

                                    <Button variant="primary" className='col-lg-6' type="submit" onClick={addData} style={{ backgroundColor: "rgba(67, 185,127)" }}>
                                        LOGIN
                                    </Button>
                                </Form>
                                <p className='mt-3'>Already Have an Account</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Log