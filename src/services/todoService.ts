export const apiCall = async (type: string, payload?: object) => {
    let response

    switch (type) {
        case "get-all-todo":
            response = await fetch('/api/todo/findall');
            break;

        case "create-todo":
            response = await fetch('/api/todo/create', payload)
            break;

        case "delete-todo":
            response = await fetch('/api/todo/delete/'+ payload)
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