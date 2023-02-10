import {memo} from 'react';

function UsersTable({filterData,users}) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Website
                    </th>
                </tr>
                </thead>
                <tbody>

                    {
                        users &&
                        users
                            .filter(({name}) => name.toLowerCase().includes(filterData.toLowerCase()))
                            .map(({id,name,username,email,phone,website}) =>
                            <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {name}
                                </th>
                                <td className="px-6 py-4">
                                    {username}
                                </td>
                                <td className="px-6 py-4">
                                    {email}
                                </td>
                                <td className="px-6 py-4">
                                    {phone}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href={`https://www.${website}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{website}</a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default memo(UsersTable);
