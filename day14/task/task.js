// ==================Task-1=================
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
// এখানে ReferenceError দিচ্ছে কারন p ডিফাইন্ড করা নেই।
// ==================Task-2=================
function processPayment(amount) {
  try {
    let balance = 1737;
    if (amount <= 0) {
      throw new Error("Amount must be a positive number.");
    }
    if (amount > balance) {
      throw new Error("ammount can't less from Payment amount");
    }

    console.log("Payment proccesing done");
  } catch (error) {
    console.log("Erros here, is:", error);
  }
}

processPayment(87);

// ==================Task-3=================

function UserError(message) {
  const error = new Error(message);
  error.name = "UserError";
  return error;
}

function PaymentError(message) {
  const error = new Error(message);
  error.name = "PaymentError";
  return error;
}

function ServerError(message) {
  const error = new Error(message);
  error.name = "ServerError";
  return error;
}

function EmailError(message) {
  const error = new Error(message);
  error.name = "EmailError";
  return error;
}

function dataSubmitForm(formData) {
  try {
    if (!formData.name) {
      throw UserError("User name missing.");
    }

    if (!formData.email.includes("@")) {
      throw EmailError("Invalid email address.");
    }

    if (!formData.server) {
      throw ServerError("Server not responding.");
    }

    if (!formData.payment) {
      throw PaymentError("Payment info missing.");
    }

    console.log("User created successfully.");
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

dataSubmitForm({
  name: "John",
  email: "hello.com",
  server: false,
  payment: true,
});
