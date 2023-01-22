import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Scroll from "../utils/Scroll";


const NewApplication = () => {

    const [resumeFile, setResumeFile] = useState(null);
    const [coverLetterFile, setCoverLetterFile] = useState(null);
    const [jobPosition, setJobPosition] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [company, setCompany] = useState('');
    const [appliedOn, setAppliedOn] = useState('');
    const [jobUrl, setJobUrl] = useState('');

    const [status, setStatus] = useState(null);

    const handleChange = (event) => {
        const {id} = event.target;
        if(id === "position"){
            setJobPosition(event.target.value);
            return
        }
        if(id === "location"){
            setJobLocation(event.target.value);
            return
        }
        if(id === "company"){
            setCompany(event.target.value);
            return
        }
        if(id === "platform"){
            setAppliedOn(event.target.value);
            return
        }
        if(id === "link"){
            setJobUrl(event.target.value);
            return
        }
    }

    const handleFileSelect = (event) => {
        if(event.target.id === 'resume-used'){
            setResumeFile(event.target.files[0])
            return
        }
        if(event.target.id === 'letter-used'){
            setCoverLetterFile(event.target.files[0])
            return
        }
    }

    const handleSubmit = async (event) => {
        
        const formData = new FormData();
        formData.append("resume", resumeFile);
        formData.append("position", jobPosition);
        formData.append("location", jobLocation);
        formData.append("company", company);
        formData.append("platform", appliedOn);
        formData.append("url", jobUrl);
        formData.append("coverLetter", coverLetterFile);
        
        try {
            const response = await axios.post("http://localhost:8000/api/v1/userApplication", 
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log(response.data)
                setStatus(response.data.ok);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div>
        {(!status &&
        <div>
            <div className="flex flex-row">
                <Link to={"/applications"} title='Go Back' className="pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg></Link>
                <h1 className="text-2xl font-bold">Add New Application</h1>
            </div>
            <div className="flex flex-col container mx-auto w-3/5">
            <Scroll>
                <h2 className="text-xl">Job Information</h2>
                <div className="flex flex-col h-20 place-content-evenly">
                    <label>Position</label>
                    <input id="position" onChange={handleChange} type='text' className="border p-1 w-1/2" required/>
                </div>
                <div className="flex flex-col h-20 place-content-evenly">
                    <label>Location</label>
                    <input id="location" onChange={handleChange} type='text' className="border p-1 w-1/2" required/>
                </div>
                <div className="flex flex-col h-20 place-content-evenly">
                    <label>Company</label>
                    <input id="company" onChange={handleChange} type='text' className="border p-1 w-1/2" required/>
                </div>
                <div className="flex flex-col h-20 place-content-evenly">
                    <label>Applied On</label>
                    <select id="platform" onChange={handleChange} className="border p-1 w-1/2" required>
                        <option value=''>Select One</option>
                        <option value='indeed'>Indeed</option>
                        <option value='glassdoor'>GlassDoor</option>
                        <option value='linkedin'>LinkedIn</option>
                        <option value='company-site'>Company Site</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className="flex flex-col h-20 place-content-evenly">
                    <label>Job Posting Link</label>
                    <input id="link" onChange={handleChange} type='url' className="border p-1 w-1/2" required/>
                </div>
                <div className="flex flex-col h-40 place-content-evenly">
                    <h4>Documents Used</h4>
                    <label>Resume</label>
                    <input type='file' onChange={handleFileSelect} id="resume-used" className="border p-1 w-1/2" required/>
                    <label>Cover Letter</label>
                    <input type='file' onChange={handleFileSelect} id="letter-used" className="border p-1 w-1/2" />
                </div>
                <div className="flex flex-row-reverse  w-1/2">
                    <button onClick={handleSubmit} className="w-1/4 border rounded-md bg-blue-500 font-bold text-white p-2 ml-3 mt-3">Submit</button>
                    <Link to='/applications'><button className="p-2 ml-3 mt-3">Cancel</button></Link>
                </div>
            </Scroll>
            </div> 
            </div>
            )}
        
            {(status === true &&
            <div>
                <div className="flex flex-row mx-auto">
                    <div className="flex flex-col mx-auto text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-48 h-48 animate-bounce text-green-500 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Submitted Successfully!</p>
                    <div className="flex flex-row">
                        <Link className="underline text-sm pr-3" to='/applications'>Back to Applications</Link>
                        <Link className="underline text-sm pl-3" to='/new_application'>New Applications</Link>
                    </div>
                    </div>
                </div> 
            </div>
            )}
            
        </div>
    )
}


export default NewApplication;