import React from 'react'
import {useState, useEffect } from 'react'
import './css/bodynew.css';
import ActivityFeed from './ActivityFeed.jsx';
import Archived from './Archived.jsx';
import ActivityDetails from './ActivityDetails.jsx';




const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";



const BodyNew = () => {
    const [isActivityFeed,setIsActivityFeed] = useState(true);              //flag for archived page(normal activity feed)
    const [isUnArchivedCalls,setIsUnArchivedCalls] = useState(false);       // flag for unarchived calls
    const [isDetails,setIsDetails] = useState(false);                       //
    const [archivedCalls, setArchivedCalls] = useState([]);         //array for archived
    const [unArchivedCalls,setUnArchivedCalls] = useState([]); // array for unarchived
    const [calls,setCalls] = useState([]);
    const [selectedCall,setSelectedCall] = useState(null);

    
    useEffect(() => {
        fetchCalls();

      }, []);

      useEffect(()=>{
        const archived = calls.filter((call) => call.is_archived==true);
        const unarchived = calls.filter((call) => !call.is_archived==true);
        setArchivedCalls(archived);
        setUnArchivedCalls(unarchived);
    },[calls]);

      const fetchCalls = () => {
        fetch(`${API_BASE_URL}activities`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            setCalls(data);

          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };

      const handleArchiveToggle = (callId, isArchived) => {
        fetch(`${API_BASE_URL}activities/${callId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            is_archived: !isArchived,
          }),
        })
          .then(() => fetchCalls())
          .catch((error) => {
            console.error("Error updating call:", error);
          });
      };

      const handleGoBack = () => {
        console.log("start here")
        setIsUnArchivedCalls(false); 
        setSelectedCall(null);
        setIsUnArchivedCalls(false);
        setIsDetails(false);
        setIsActivityFeed(true);
        
        console.log("end here");
        console.log(archivedCalls);
        console.log(unArchivedCalls);
      };
      const showDetails = ( callid) =>{
        setSelectedCall(callid);
        setIsUnArchivedCalls(false);
        setIsActivityFeed(false);
        setIsDetails(true);
        console.log(callid);
      }
      const showActivityFeed = ()=>{
        setIsActivityFeed(true);
        setIsUnArchivedCalls(false);
        setIsDetails(false);
        setSelectedCall(null);
      }
      const showArchivedFeed = ()=>{
        setIsActivityFeed(false);
        setIsUnArchivedCalls(true);
        setIsDetails(false);
        setSelectedCall(null);
      }
  return (
    <div>
        <div className='navbar'>
            <div className='navbarText'>
                Activity
            </div>
            <div className='navbarTab' onClick={showActivityFeed} >
                INBOX
            </div>
            <div className='navbarTab' onClick={showArchivedFeed}>
                Archived Calls
            </div>
        </div>

        {isActivityFeed &&(
            <Archived calls={unArchivedCalls} handleClick={showDetails} /> 
        )}
        {isUnArchivedCalls &&(
            < Archived calls ={archivedCalls} handleClick={showDetails}  /> // need to add a onclick in both 
        )}
        {isDetails && (
            <ActivityDetails callid={selectedCall} isActivityFeed={isActivityFeed} onGoBack={handleGoBack}  />
        )}





    </div>
  )
}

export default BodyNew