import axios from "axios";
import { useEffect, useState } from "react";

export default function Kontakdata() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/kontak/user').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    
    return (
        <>
        
        <div className="md:px-32 py-8 w-full">
            <h1 className="text-center text-2xl mb-20">LIST DATA STARTUP</h1>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">email</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">subject</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Message</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 ">
                        {users.map((user, key) => 
                            <tr key={key} className="text-center">
                                <td className="text-left py-3 px-4">{user.name}</td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >{user.email}</a></td>
                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" >{user.subject}</a></td>
                                <td className="text-left py-3 px-4">{user.message}</td>
                            </tr>

                        )}
                    
                    </tbody>
                </table>
            </div>
        </div>  
        </>
    )
}