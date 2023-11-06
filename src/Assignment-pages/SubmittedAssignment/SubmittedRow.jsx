
import PropTypes from "prop-types"

const SubmittedRow = ({assignment}) => {
   
    return (
        <tr>
       <td>name</td>
        <td> hary jagaryt</td>
        <td>Zemlak, Daniel and Leannon</td>
        <td>Purple</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>

      </tr>
    );
};



SubmittedRow.propTypes = {
    assignment:PropTypes.object
}
export default SubmittedRow;