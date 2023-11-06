const usersLs = JSON.parse(localStorage.getItem('users')) || []

if (usersLs.length === 0) {
    const users = [
        {
            id: 1,
            user: 'Cesar Hermida',
            pass: 'Cesar123456',
            role: 'admin',
            login: false,
            deleted: false
        },
        {
            id: 2,
            user: 'Juan Consentino',
            pass: 'Juan123456',
            role: 'admin',
            login: false,
            deleted: false
        },
    ]

    localStorage.setItem('users', JSON.stringify(users))
}
