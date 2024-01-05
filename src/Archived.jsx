import React from 'react'
//here what i can do is use this same component for both arch and unarch , just send diff state arrays as its props
const Archived = ( {calls , handleClick}) => {

    const handleCallClick = (callid) =>{
        handleClick(callid);

    }
  return (
    <div>
        <div>
            {calls.map((call) => (
                
              <div
                key={call.id}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
                onClick={() => handleCallClick(call.id)}
              >
                
                    
                <span>{`Direction: ${call.direction}, From: ${call.from}, To: ${call.to}, Duration: ${call.duration}, Type: ${call.call_type}`}</span>
                {/* <button
                onClick={() => handleArchiveToggle(call.id, call.is_archived)}
                >
                  {call.is_archived ? "Unarchive" : "Archive"}
                </button> */}
              </div>
            ))}
          </div>
    </div>
  )
}

export default Archived