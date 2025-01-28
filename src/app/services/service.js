const BACKEND_URL = "http://localhost:8000";

export async function createCustomerAccount(userInput) {
  const res = await fetch(`${BACKEND_URL}/api/auth/new-customer`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const data = await res.json();
  return data;
}
