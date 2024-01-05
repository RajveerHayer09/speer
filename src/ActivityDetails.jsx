import React, { useState, useEffect } from 'react';

const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";
// const temp = '639a0f0a328500b1a0fa9bf7';

const ActivityDetails = ({ callid, isActivityFeed, onGoBack }) => {
    const [details, setDetails] = useState([]);
    const [detailsFetched, setDetailsFetched] = useState(false);

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = () => {
        fetch(`${API_BASE_URL}activities/${callid}`).then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDetails(data);
                setDetailsFetched(true);
            });
    }

    useEffect(() => {
        console.log(details);
        console.log(detailsFetched);
        console.log(details);
        if (details != []) {
            setDetailsFetched(true);
            console.log("heree");
        }
    }, [details]);

    const goBack = () => {
      console.log("goback lciked");
        onGoBack(); // Call the provided onGoBack callback to update the state in Body.jsx
    }
    const handleArchiveToggle = () => {
      
      fetch(`${API_BASE_URL}activities/${callid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_archived: !details.is_archived,
        }),
        
      })
        .then(() => fetchDetails())
        .catch((error) => {
          console.error("Error updating call:", error);
        });
    };

    return (
        <div>
            <div>
                {detailsFetched ? (
                    <div>
                        {Object.keys(details).map((key) => (
                            <div key={key}>
                                <strong>{key}:</strong> {typeof details[key] === 'boolean' ? details[key].toString() : details[key]}
                            </div>
                        ))}
                        <button onClick={()=>goBack()}>Go Back</button>
                        <button onClick={() => handleArchiveToggle()}>
                        {details.is_archived==true ? "Unarchive" : "Archive"}
                        </button>
                    </div>
                ) : (
                    <p>Loading details...</p>
                )}

            </div>
        </div>
    )
}

export default ActivityDetails;


// import React from 'react';
// import { useState,useEffect } from 'react';

// const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";
// const temp = '639a0f0a328500b1a0fa9bf7';

// const ActivityDetails = ({ callid, atHome, onGoBack }) => {
//   const [details,setDetails] = useState([]);
//   const [detailsFetched,setDetailsFetched] = useState(false);
//   useEffect(()=>{
//     fetchDetails();
//   },[]);

//   const fetchDetails = () =>{
//     fetch(`${API_BASE_URL}activities/${temp}`).then((response) => response.json())
//     .then((data)=>{
//       // console.log(data);
//       console.log(data.id);
//       setDetails(data);
//     })
//   }
//   useEffect(() => {
//     console.log(details);
//     console.log(detailsFetched);
//     console.log(details);
//     if(details!=[]){
//       setDetailsFetched(true);
//       console.log("heree");

//     }
//   }, [details]); 
//   const goBack = () => {
//     console.log("sda");
    
//     onGoBack(); // Call the provided onGoBack callback to update the state in Body.jsx
// }
//   return (
//     <div>ActivityDetails
//       <div>
//       {detailsFetched ? (
//         <div>
//           {Object.keys(details).map((key) => (
//             <div key={key}>
//               <strong>{key}:</strong> {typeof details[key] === 'boolean' ? details[key].toString() : details[key]}
//             </div>
//           ))}
//           <button onClick={goBack}>Go Back</button>
//         </div>
//       ) : (
//         <p>Loading details...</p>
//       )}

        
//       </div>
//     </div>
//   )
// }

// export default ActivityDetails


// {detailsFetched ? (
//   <div>
//     {/*  */}
//     <p>ID: {details.id}</p>
//     <div> duration: {details.duration}</div>
//     <div>  isArchieved : {details.is_archived==true? <span>true</span>:<span>false</span>}</div>
//     <div> created at: {details.created_at} </div>
//     <div> {/*here I need to check if details has details.from attribute, if yes then render here*/} </div>
//     {details.from && (
//       <div>
//         From: {details.from}
//       </div>
//     )}
//   </div>
// ) : (
//   <p>Loading details...</p>
// )}