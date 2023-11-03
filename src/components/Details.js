import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'


const Details = () => {

    const [logindata, setLoginData] = useState([]);
    console.log(logindata);

    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
    // console.log(todayDate);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {

        const getuser = localStorage.getItem("user_login")

        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            // console.log(user);
            setLoginData(user)

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    })
    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <h1>Details page</h1>
                        {/* <h1>{logindata[0].name}</h1>
                       <Button onClick={userlogout}>Logout</Button> */}


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Date Created</th>
                                    <th>Role</th>
                                    <th>status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Michael Holz</td>
                                    <td>04/10/2013</td>
                                    <td>Admin</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Paula Wilson</td>
                                    <td>05/08/2014</td>
                                    <td>Publisher</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Antonio Moreno</td>
                                    <td>11/05/2015</td>
                                    <td>Publisher</td>
                                    <td>Suspended</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mary Saveley</td>
                                    <td>06/09/2016</td>
                                    <td>Reviewer</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Martin Sommer</td>
                                    <td>12/08/2016</td>
                                    <td>Moderator</td>
                                    <td>Inactive</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td> Sam</td>
                                    <td>21/08/2016</td>
                                    <td>Moderator</td>
                                    <td>Inactive</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Martin</td>
                                    <td>12/09/2020</td>
                                    <td>HR</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Louis</td>
                                    <td>13/05/2015</td>
                                    <td>Admin</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Suzi</td>
                                    <td>16/09/2016</td>
                                    <td>Moderator</td>
                                    <td>Inactive</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Mark</td>
                                    <td>10/02/2022</td>
                                    <td>Publisher</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Mark</td>
                                    <td>16/12/2020</td>
                                    <td>Publisher</td>
                                    <td>inactive</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Mark</td>
                                    <td>11/06/2021</td>
                                    <td>HR</td>
                                    <td>Active</td>
                                    <td>
                                        <button style={{ width: "50px" }}>Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {
                            logindata[0].date === todayDate ?
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{logindata[0].name}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Welocme</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal> : ""
                        }
                    </>
            }
        </>
    )
}

export default Details