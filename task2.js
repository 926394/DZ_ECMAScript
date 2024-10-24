async function saveUserData(user) {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to save user data");
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}
