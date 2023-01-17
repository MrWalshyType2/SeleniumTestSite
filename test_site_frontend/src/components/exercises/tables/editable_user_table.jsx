import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import userData from "../../../resources/users.json";
import { IoTrashBin, IoPencil, IoSave, IoClose } from "react-icons/io5";

export default function EditableUserTableExercise(props) {

    const [users, setUsers] = useState(userData);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isEditingUser, setEditingUser] = useState(false);
    const [userForEditing, setUserForEditing] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    // update width on resize
    useEffect(() => {
        const updateWidth = () => screenWidth !== window.innerWidth && setScreenWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [screenWidth]);

    const generateUserTableData = () => users.map(userToTableRow);
    const userToTableRow = user => (
        <tr key={user.username} id={user.username}>
            {isEditingUser && user === userForEditing.user ?
                <>
                    <td>{editedUser.username}</td>
                    <td><input style={{ width: "100px" }} type="text" onChange={handleEditUser} name="forename" value={editedUser.forename} /></td>
                    <td><input style={{ width: "100px" }} type="text" onChange={handleEditUser} name="surname" value={editedUser.surname} /></td>
                    <td><input style={{ width: "100px" }} type="text" onChange={handleEditUser} name="age" value={editedUser.age} /></td>
                    <td><input style={{ width: "300px" }} type="text" onChange={handleEditUser} name="email" value={editedUser.email} /></td>
                </>
                :
                <>
                    <td>{user.username}</td>
                    <td>{user.forename}</td>
                    <td>{user.surname}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </>
            }

            <td style={screenWidth > 1024 ? { minWidth: "350px" } : { minWidth: "150px" }}>
                <button className="btn bg-danger fg-light" onClick={() => deleteUser(user)}>
                    {screenWidth > 1024 ? <>Delete <IoTrashBin /></> : <IoTrashBin />}
                </button>
                {(!isEditingUser || user !== userForEditing.user) && <button className="btn bg-warning fg-dark" onClick={() => editUser(user)}>
                    {screenWidth > 1024 ?
                        <>Edit <IoPencil /></> : <IoPencil />}
                </button>}
                {isEditingUser && user === userForEditing.user && <button className="btn bg-warning fg-dark save-user-btn" onClick={saveUserEdit}>
                    {screenWidth > 1024 ? <>Save <IoSave /></> : <IoSave />}
                </button>}
                {isEditingUser && user === userForEditing.user && <button className="btn bg-warning fg-dark cancel-edit-user-btn" onClick={cancelUserEdit}>
                    {screenWidth > 1024 ? <>Cancel <IoClose /></> : <IoClose />}
                </button>}
            </td>
        </tr>
    );
    const deleteUser = user => setUsers(previous => previous.filter(prevUser => prevUser !== user));
    const editUser = user => {
        // if already editing a user, cancel those changes
        setEditingUser(true);
        setUserForEditing({ index: users.indexOf(user), user: user });
        setEditedUser(Object.assign({}, user));
    };
    const cancelUserEdit = () => {
        setEditingUser(false);
        setUserForEditing(null);
        setEditedUser(null);
    };
    const saveUserEdit = () => {
        const arr = users.filter(user => user !== userForEditing.user);
        arr.splice(userForEditing.index, 0, editedUser);
        setUsers(arr);
        cancelUserEdit();
    };
    const handleEditUser = (event) => setEditedUser(prev => {
        const update = {};
        update[event.target.name] = event.target.value;
        return Object.assign({}, prev, update);
    });

    return (
        <article className="exercise">
            <header className="exercise-header">
                <h2 className="exercise-title">Exercise 1) Editable users table</h2>
                <p className="exercise-lead">The first exercise uses an editable table generated from JSON data.</p>
            </header>
            <div className="table-wrapper exercise-candidate">
                {/* table-fw-la fullWidth-leftAlign */}
                <table className="text-left w-100" id="users-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Forename</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateUserTableData()}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
            <section className="exercise-task">
                <h3>Task 1) Deleting users</h3>
                <p>
                    Create a Selenium test which verifies that a deleted user is removed
                    from the DOM.
                </p>
            </section>
            <section className="exercise-task">
                <h3>Task 2) Editing users</h3>
                <p>
                    Create a Selenium test which verifies that changes made to a users
                    details are saved to the DOM when the 'Save' button is pressed. To make the 'Save' button
                    appear, you first have to press the 'Edit' button.
                </p>
            </section>
            <section className="exercise-task">
                <h3>Task 3) Canceling a user edit - method 1</h3>
                <p>
                    Create a Selenium test which verifies that changes made to a users
                    details are not saved to the DOM when the 'Cancel' button is pressed. To make the 'Cancel' button
                    appear, you first have to press the 'Edit' button.
                </p>
            </section>
            <section className="exercise-task">
                <h3>Task 4) Canceling a user edit - method 2</h3>
                <p>
                    Create a Selenium test which verifies that changes made to a users
                    details are not saved to the DOM when the 'Edit' button of another user is selected.
                </p>
            </section>
        </article>
    );
}