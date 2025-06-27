export const apiCall = async (type: string, payload?: any) => {
    let response

    switch (type) {
        case "getAllTodo":
            response = await fetch('/api/todo/findall');
            break;

        default:
            throw new Error(`Unknown API call type: ${type}`);
    }
    if (!response.ok) {
        const error = await response?.json();
        throw new Error(error.message || "Unknown error")
    }

    return await response.json();
}