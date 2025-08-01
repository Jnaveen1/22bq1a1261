const customLogger = (message, data = {}) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    message,
    data,
  };
  // For now, store logs in localStorage (simulate logging service)
  const logs = JSON.parse(localStorage.getItem("app_logs") || "[]");
  logs.push(logEntry);
  localStorage.setItem("app_logs", JSON.stringify(logs));
};

export default customLogger;
