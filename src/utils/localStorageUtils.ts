// Function to store user information in localStorage
export const storeUser = (user: { username: string; email: string }) => {
    localStorage.setItem('user', JSON.stringify(user));
};

// Function to retrieve user information from localStorage
export const getUser = (): { username: string; email: string } | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

export const clearUser = () => {
  localStorage.removeItem('user');
};
