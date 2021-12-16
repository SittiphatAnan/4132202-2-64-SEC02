import React from "react";

function genTable(peoples) {
    return peoples.map((people)=>{
    const {id, name:rname, age} = people;
    return(
        <tr>
            <td>{id}</td>
            <td>{rname}</td>
            <td>{age}</td>
        </tr>
    );
});
}

function DataTable(){
    const students = [
        {
            id: 1,
            name: "Uta",
            age: 29,
        },
        {
            id: 2,
            name: "Beta",
            age: 39,
        },
    ];
    return (
        <table>
            <tbody>{genTable(students)}</tbody>
        </table>

    );

}
export default DataTable;