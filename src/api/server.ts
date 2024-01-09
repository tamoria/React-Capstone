const token = 'ad801b7a1483c42a085b97d0ebf52d04f574f0cb28cb9312'

export const server_calls = {
    get: async (userId: string) => { 
        const response = await fetch(`https://green-thumb-pqsc.onrender.com/api/plants/${userId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (userId: string, data: any = {}) => {
        const response = await fetch(`https://green-thumb-pqsc.onrender.com/api/plants/${userId}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id: string, userId: string, data:any = {}) => {
        const response = await fetch(`https://green-thumb-pqsc.onrender.com/api/plants/${id}/${userId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string, userId: string) => {
        const response = await fetch(`https://green-thumb-pqsc.onrender.com/api/plants/${id}/${userId}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}

