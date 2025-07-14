export const apiCall = async (type: string, payload?: string | object, addtion?: string) => {
    let response

    const token = localStorage.getItem("token");

    switch (type) {
        case "get-all-todo":
            response = await fetch(`/api/todo/${payload}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            break;

        case "create-todo":
            response = await fetch('/api/todo', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            break;

        case "update-todo":
            response = await fetch(`api/todo/${addtion}`, {
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            break;

        case "delete-todo":
            response = await fetch(`/api/todo/${payload}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            break;

        case "login":
            response = await fetch('/api/auth/login', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            break;
        
        case "signup":
            response = await fetch('/api/auth/signup', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            break;
        
        default:
            throw new Error(`Unknown API call type: ${type}`);
    }
    if (response.status === 401 || response.status === 400) {
        return { error: "Please Login or Signup to use"}
    }

    if (!response.ok) {
        const error = await response?.json();
        throw new Error(error.error || error.message || "Unknown error")
    }

    return await response.json();
}