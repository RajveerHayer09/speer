


// // import React, { useState, useEffect } from "react";
// // import Activityfeed, { ActivityFeed } from "./Activityfeed.jsx";
// // import ActivityDetails from "./ActivityDetails.jsx";

// // const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";

// // const Body = () => {
// //     const [calls, setCalls] = useState([]);

// //     useEffect(() => {
// //         fetchCalls();
// //     }, []);
// //     let temp;
// //     const fetchCalls = () => {
// //         fetch(`${API_BASE_URL}activities`)
// //             .then((response) => response.json())
// //             .then((data) => {
// //                 console.log(data);
// //                 setCalls(data);
// //                 temp = data[0].id;
// //                 // console.log(temp);
                
// //             })
// //             .catch((error) => {
// //                 console.error('Error fetching data:', error);
// //             });
// //     };

// //     const handleArchiveToggle = (callId, isArchived) => {
// //         fetch(`${API_BASE_URL}activities/${callId}`, {
// //             method: "PATCH",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 is_archived: !isArchived,
// //             }),
// //         })
// //             .then(() => fetchCalls())
// //             .catch((error) => {
// //                 console.error('Error updating call:', error);
// //             });
// //     };

// //     return (
// //         <div>
// //             {/* <Activityfeed calls = {calls}/> */}
// //             {/* <ActivityDetails callid={temp}/> */}
// //             {calls.map((call) => (
// //                 <div key={call.id}>
// //                     <span style>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}
// //                     </span>
// //                     {<button onClick={() => handleArchiveToggle(call.id, call.is_archived)}>
// //                         {call.is_archived ? "Unarchive" : "Archive"}
// //                     </button> }
// //                 </div>
// //             ))}

// //         </div>
// //     );
// // };

// // export default Body;



// // import React, { useState, useEffect } from "react";
// // import ActivityDetails from "./ActivityDetails.jsx";

// // const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";

// // const Body = () => {
// //     const [calls, setCalls] = useState([]);
// //     const [selectedCall, setSelectedCall] = useState(null);
// //     const [atHome,SetAthome] = useState(true);

// //     useEffect(() => {
// //         fetchCalls();
// //     }, []);

// //     const fetchCalls = () => {
// //         fetch(`${API_BASE_URL}activities`)
// //             .then((response) => response.json())
// //             .then((data) => {
// //                 console.log(data);
// //                 setCalls(data);
// //             })
// //             .catch((error) => {
// //                 console.error('Error fetching data:', error);
// //             });
// //     };

// //     const handleArchiveToggle = (callId, isArchived) => {
// //         fetch(`${API_BASE_URL}activities/${callId}`, {
// //             method: "PATCH",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 is_archived: !isArchived,
// //             }),
// //         })
// //             .then(() => fetchCalls())
// //             .catch((error) => {
// //                 console.error('Error updating call:', error);
// //             });
// //     };

// //     const handleCallClick = (callId) => {
// //         console.log("jer")
// //         setSelectedCall(callId);
// //         SetAthome(false);

// //     };

// //     const handleGoBack = () => {
// //         setAthome(true);
// //         setSelectedCall(null);
// //     };
// //     return (
// //         <div>
// //             <div style={{ marginBottom: '20px' }}>

// //                 {atHome && calls.map((call) => (
// //                     <div key={call.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleCallClick(call.id)}>
// //                         <span>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}</span>
// //                         <button onClick={() => handleArchiveToggle(call.id, call.is_archived)}>
// //                             {call.is_archived ? "Unarchive" : "Archive"}
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>

// //             {selectedCall !== null && (
// //                 <ActivityDetails callid={selectedCall}  atHome={atHome} onGoBack={handleGoBack} />
// //             )}
// //         </div>
// //     );
// // };

// // export default Body;


// // import React, { useState, useEffect } from "react";
// // import ActivityDetails from "./ActivityDetails.jsx";
// // import Archived from "./Archived.jsx";

// // const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";

// // const Body = () => {
// //     const [calls, setCalls] = useState([]);
// //     const [selectedCall, setSelectedCall] = useState(null);
// //     const [atHome, setAtHome] = useState(true);
// //     const [openArchived,setOpenArchived] = useState(true);

// //     useEffect(() => {
// //         fetchCalls();
// //     }, []);

// //     const fetchCalls = () => {
// //         fetch(`${API_BASE_URL}activities`)
// //             .then((response) => response.json())
// //             .then((data) => {
// //                 console.log(data);
// //                 setCalls(data);
// //             })
// //             .catch((error) => {
// //                 console.error('Error fetching data:', error);
// //             });
// //     };

// //     const handleArchiveToggle = (callId, isArchived) => {
// //         fetch(`${API_BASE_URL}activities/${callId}`, {
// //             method: "PATCH",
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({
// //                 is_archived: !isArchived,
// //             }),
// //         })
// //             .then(() => fetchCalls())
// //             .catch((error) => {
// //                 console.error('Error updating call:', error);
// //             });
// //     };

// //     const handleCallClick = (callId) => {
// //         setSelectedCall(callId);
// //         setAtHome(false);
// //     };

// //     const handleGoBack = () => {
// //         setAtHome(true);
// //         setSelectedCall(null);
// //     };
    

// //     return (
// //         <div>
            
// //             {openArchived && (
// //                 <Archived/>
// //             )}
// //             <div style={{ marginBottom: '20px' }}>
// //                 {atHome && calls.map((call) => (
// //                     <div key={call.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '25px', cursor: 'pointer'  }} onClick={() => handleCallClick(call.id)}>
// //                         <span>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}</span>
// //                         <button onClick={() => handleArchiveToggle(call.id, call.is_archived)}>
// //                             {call.is_archived ? "Unarchive" : "Archive"}
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>

// //             {selectedCall!==null && (
// //                 <ActivityDetails callid={selectedCall} atHome={atHome} onGoBack={handleGoBack} />
// //             )}
           
// //         </div>
// //     );
// // };

// // export default Body;
// import React, { useState, useEffect } from "react";
// import ActivityDetails from "./ActivityDetails.jsx";

// const API_BASE_URL = "https://cerulean-marlin-wig.cyclic.app/";

// const Body = () => {
//   const [calls, setCalls] = useState([]);
//   const [selectedCall, setSelectedCall] = useState(null);
//   const [atHome, setAtHome] = useState(true);

//   useEffect(() => {
//     fetchCalls();
//   }, []);

//   const fetchCalls = () => {
//     fetch(`${API_BASE_URL}activities`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setCalls(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };
  
//   const handleArchiveToggle = (callId, isArchived) => {
//     fetch(`${API_BASE_URL}activities/${callId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         is_archived: !isArchived,
//       }),
//     })
//       .then(() => fetchCalls())
//       .catch((error) => {
//         console.error("Error updating call:", error);
//       });
//   };

//   const handleCallClick = (callId) => {
//     setSelectedCall(callId);
//     setAtHome(false);
//   };

//   const handleGoBack = () => {
//     setAtHome(true);
//     setSelectedCall(null);
//   };

//   // Filter calls based on whether they are archived or not
//   const archivedCalls = calls.filter((call) => call.is_archived==true);

//   return (
//     <div>
//       <div style={{ marginBottom: "20px" }}>
//         <div>
//           <button onClick={() => setAtHome(true)}>Activity Feed</button>
//           <button onClick={() => setAtHome(false)}>Archived Calls</button>
//         </div>

//         {atHome ? (
//           // Render the Body content
//           <div>
//             {calls.map((call) => (
                
//               <div
//                 key={call.id}
//                 style={{
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleCallClick(call.id)}
//               >
                
                    
//                 <span>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}</span>
//                 <button
//                 onClick={() => handleArchiveToggle(call.id, call.is_archived)}
//                 >
//                   {call.is_archived ? "Unarchive" : "Archive"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Render the Archived Calls content
//           <div>
//             {archivedCalls.map((call) => (
//               <div
//                 key={call.id}
//                 style={{
//                   marginBottom: "10px",
//                   padding: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleCallClick(call.id)}
//               >
//                 <span>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}</span>
//                 <button
//                   onClick={() => handleArchiveToggle(call.id, call.is_archived)}
//                 >
//                   {call.is_archived ? "Unarchive" : "Archive"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {selectedCall!==null && (
//         <ActivityDetails callid={selectedCall} atHome={atHome} onGoBack={handleGoBack} />
//       )}
//     </div>
//   );
// };

// export default Body;
