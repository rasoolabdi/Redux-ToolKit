import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../features/user/userSlice";
import { tableHeadUser } from "../constant/tableHead";


function UserList() {
    const state = useSelector((state) => state.users);
    const dispatch = useDispatch();
    console.log(state);

    useEffect(() => {
        dispatch(getAsyncUsers())
    } , [dispatch])

    if(state.loading) return <p>Loading ...</p>;
    if(state.error) return <p>{ state.error }</p>;

    return (
        <div>
            <h2>User List :</h2>
            {state.data && state.data.map((item) => {
                return (
                    <ul className="ul__table">
                        <table className="table">
                            <thead>
                                <tr>
                                    {tableHeadUser.map((item) => {
                                        return <th key={item.id}>{item.label}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody className="t__body">
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                )
            })}
        </div>
    )
};
export default UserList;