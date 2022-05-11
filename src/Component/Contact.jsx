import React, { useState } from "react";

const Contact = () => {

        const[data,setData] = useState({
            fullname:'',
            phone:'',
            email:'',
            msg:''

        });

        const InputEvent=(e)=>{
            const{name,value} = e.target;

            setData((preVal)=>{
                return {
                    ...preVal,
                    [name]:value
                }
            })
        }

        const formSubmit = (e)=>{
            e.preventDefault();
            alert(`My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`);

        }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input name="fullname" value={data.fullname} onChange={InputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone/Mobile</label>
                                <input name="phone" value={data.phone} onChange={InputEvent} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone/Mobile"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input name="email" value={data.email} onChange={InputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea name="msg" value={data.msg} onChange={InputEvent}className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;