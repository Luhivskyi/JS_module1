function formatMessage(message,maxLength) {
  let result;
  
    if (message.length > maxLength) {
        result = message.slice(0, maxLength) + '...';
    } else{ return message}
  
  return result;
}