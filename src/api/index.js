export const fetchUserData = () => {
  fetch("http://localhost:8080/auth/success", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  });
};

export const logout = () => {
  fetch("http://localhost:8080/auth/logout", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  });
};
