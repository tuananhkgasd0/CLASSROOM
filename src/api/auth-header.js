export default function authHeader() {
    const userStr = JSON.parse(localStorage.getItem("user") || "[]");
    let user = null;
    if (userStr)
      user = userStr;
  
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }