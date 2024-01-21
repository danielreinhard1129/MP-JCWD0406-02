import { getUsers } from "@/repositories/user/getUsers"


export const getUsersAction = async () => {
    try {
        const result = await getUsers()
        return {
            message: "get users success",
            status: 200,
            data: result
        }
    } catch (error) {
        throw error
    }
}