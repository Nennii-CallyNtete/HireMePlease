import axios from "axios";
import {React, useContext, useState, useEffect} from "react";
import { UserContext } from "../contexts/user.context";
import { Link, redirect } from "react-router-dom";

const Applications = () => {
    const {currentUser} = useContext(UserContext);

    const userEmail = currentUser.email
    const [applicationData, setApplicationData] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState(applicationData);

    const getApplicationData = () => {
        const data = async () => {
            try{
                await axios.get('http://localhost:8000/api/v1/applicationData', {queryEmail: userEmail})
                .then(res=>{
                    console.log(res)
                })
            }
            catch{
                console.log()
            }
        }
        setApplicationData(data);
    }

    const filterApplicationData = (event) => {
        const {value} = event.target;
        const filteredApplicationData = applicationData.map(application => {
            return application.title.toLowerCase().contains(value.toLowerCase()) || application.company.toLowerCase().contains(value.toLowerCase()) || application.location.toLowerCase().contains(value.toLowerCase())
        })
        setFilteredApplications(filteredApplicationData);
    }

    useEffect(()=>{
        //getApplicationData()
        axios.get('http://localhost:8000/api/v1/applicationData', {queryEmail: userEmail})
        .then(res=>{
            console.log(res)
        })
    });

    return(
        <div>
            <div className="flex flex-row mb-2">
                <div className="w-2/3">
                    <div>
                        <h1 className="text-2xl font-bold">Application Hub</h1>
                    </div>
                    <div className="grid-cols-2 grid-flow-row">
                        <div className="my-1">
                            <Link to='/new_application'><button id="new-application" className="bg-black text-white px-2 py-2 rounded-md">New Application</button></Link>
                        </div>
                        <div className="col-span-1 my-1">
                            <input type='text' className="p-2 w-3/5 border" placeholder='Search Applications by Job Title, Company or Location' onChange={filterApplicationData} />
                        </div>
                    </div>
                </div>
                <div className="border w-1/3 rounded-md px-1">
                    <h1 className="text-2xl font-bold">Summary</h1>
                    <div>
                        <p>You have applied to {applicationData.length} jobs</p>
                        <p>You have been interviewed for {applicationData.length} jobs</p>
                        <p>You have been offered {applicationData.length} jobs</p>
                    </div>
                </div>
            </div>
            <div>
                <table className="border border-collapse w-full rounded-sm">
                    <thead>
                        <tr className="text-lg font-bold flex flex-row place-content-between p-3">
                            <td>Job Position</td>
                            <td>Company</td>
                            <td>Applied On</td>
                            <td>Resume Used</td>
                            <td>Cover Letter Used</td>
                            <td>Location</td>
                            <td>Notes</td>
                            <td>Status</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredApplications.map((application, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{application.title}</td>
                                        <td>{application.company}</td>
                                        <td>{application.platform}</td>
                                        <td>{application.resume}</td>
                                        <td>{application.cover_letter}</td>
                                        <td>{application.location}</td>
                                        <td>{application.notes}</td>
                                        <td>{application.status}</td>
                                        <td>{application.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Applications;