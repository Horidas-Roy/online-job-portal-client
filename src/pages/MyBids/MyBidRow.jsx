/* eslint-disable react/prop-types */



const MyBidRow = ({bid,idx,handleComplete}) => {


    return (
        <tr key={bid._id} className="font-bold">
            <th>{idx+1}</th>
            <td>{bid.job_title}</td>
            <td>{bid.employer}</td>
            <td>{bid.deadline}</td>
            <td>{bid.status}</td>
            {console.log(bid.status)}
            <td><button 
            onClick={()=>handleComplete(bid.status,bid._id)}
            disabled={bid.status !== 'in progress'}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white
             ${bid.status !== 'in progress' && 'bg-[#4f9582] hover:bg-[#4f9582]'}`}>Complete</button></td>
          </tr>
    );
};

export default MyBidRow;