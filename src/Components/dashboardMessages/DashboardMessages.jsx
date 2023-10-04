import {useState} from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import UseFireStore from '../../firebase/UseFireStore';
import Pagination from "../Products/Pagination.jsx";
import PropTypes from "prop-types";

const DashboardMessages = ({messages}) => {
    const {DeleteMessage} = UseFireStore()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = messages.slice(firstPostIndex, lastPostIndex);
  
  return (
    <div className='container'>
    <MDBTable align='middle' responsive>
      <MDBTableHead style={{backgroundColor:"rgb(32, 61, 75)" , color:"white"}}>
        <tr>
          <th scope='col'>User Name</th>
          <th scope='col'>user email</th>
          <th scope='col'>message</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {currentPosts &&
          currentPosts.map((message) => (
            <tr key={message.id}>
              <td>
                <p className='fw-normal mb-1'>{message.name}</p>
              </td>
              <td>
                <p className='fw-normal mb-1'>{message.email}</p>
              </td>
              <td>
                <p className='fw-normal mb-1'>{message.message}</p>
              </td>
              <td className='d-flex align-items-center justify-content-around'>
                <i className='fa-solid fa-trash text-danger m-0 d-inline-block' onClick={()=>DeleteMessage(message.id)}></i>
              </td>
            </tr>
          ))}
      </MDBTableBody>
    </MDBTable>
    <Pagination
                totalPosts={messages.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                messagePosts={setPostsPerPage}
            />

  </div>
  )
}
DashboardMessages.propTypes = {
  messages: PropTypes.any.isRequired
}
export default DashboardMessages