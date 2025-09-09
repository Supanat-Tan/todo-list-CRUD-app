export const apiCall = async (type: string, payload?: unknown, addition?: string) => {
    let response

    switch (type) {
        case "get-all-todo":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/todo/${payload}`, {
                credentials: "include"
            });
            break;

        case "create-todo":
            response = await fetch('https://supanat-main-backend.onrender.com/api/todo', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case "update-todo":
            response = await fetch(`https://supanat-main-backend.onrender.comapi/todo/${addition}`, {
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case "delete-todo":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/todo/${payload}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })
            break;

        case "login":
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/login', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });
            break;

        case "logout":
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/logout', {
                method: "POST",
                credentials: "include"
            })
            break;
        
        case "signup":
            response = await fetch('https://supanat-main-backend.onrender.com/api/auth/signup', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            break;

        case "check-user":
            response = await fetch(`https://supanat-main-backend.onrender.com/api/auth/me`, {
                credentials: "include"
            });
            break;
        
        default:
            throw new Error(`Unknown API call type: ${type}`);
    }
    return response;
}