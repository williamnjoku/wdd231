
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const infoList = document.getElementById("submitted-info");

  const fields = {
    firstname: "First Name",
    lastname: "Last Name",
    email: "Email",
    phone: "Mobile Number",
    organization: "Organization",
    timestamp: "Submitted At"
  };

  Object.keys(fields).forEach(key => {
    const value = params.get(key);
    if (value) {
      const li = document.createElement("li");

      if (key === "timestamp") {
        const localTime = new Date(value).toLocaleString();
        li.innerHTML = `<strong>${fields[key]}:</strong> ${localTime}`;
      } else {
        li.innerHTML = `<strong>${fields[key]}:</strong> ${decodeURIComponent(value)}`;
      }

      infoList.appendChild(li);
    }
  });
});

