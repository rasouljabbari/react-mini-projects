import {renderHook, screen, render, act, waitFor} from '@testing-library/react'
import Users from "../components/users";
import UsersTable from "../components/users/UsersTable";
import {useFetch} from "../utils/custom-hooks/useFetch";

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
    },
];

global.fetch = jest.fn();

describe('useFetch', () => {
    it('fetches data from the API', async () => {
        const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/users', 'get'));
        console.log(result.current)
        expect(result.current).toEqual(null);
        await waitFor(() => expect(result.current).not.toEqual(null))
    });
});

describe('Users', function () {

    test('renders the users table with the expected data', async () => {
        render(<UsersTable filterData="" users={users}/>);

        const usersTable = screen.getByTestId('usersTable');

        const nameHeading = usersTable.querySelectorAll('th')[0];
        const usernameHeading = usersTable.querySelectorAll('th')[1];
        const emailHeading = usersTable.querySelectorAll('th')[2];
        const phoneHeading = usersTable.querySelectorAll('th')[3];
        const websiteHeading = usersTable.querySelectorAll('th')[4];
        const userRows = screen.getAllByTestId('userRow');

        // test th
        expect(nameHeading.textContent).toBe('Name');
        expect(usernameHeading.textContent).toBe('Username');
        expect(emailHeading.textContent).toBe('Email');
        expect(phoneHeading.textContent).toBe('Phone');
        expect(websiteHeading.textContent).toBe('Website');
        expect(userRows).toHaveLength(2);

        const firstUserName = userRows[0].querySelectorAll('td')[0];
        const secondUserName = userRows[1].querySelectorAll('td')[0];

        expect(firstUserName.textContent).toBe('Bret');
        expect(secondUserName.textContent).toBe('Antonette');
    });

    it('renders only filtered users if filterData is not empty', () => {
        render(<UsersTable users={users} filterData='Leanne Graham' />)
        const userRows = screen.getAllByTestId('userRow');

        expect(userRows).toHaveLength(1)
        const userSiteAddress = userRows[0].querySelectorAll('td')[3];

        expect(userSiteAddress.textContent).toBe('hildegard.org');
    })
});