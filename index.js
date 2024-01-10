// Add your code here
function submitData(userName,userEmail){
  const formData = {
    name:userName,
    email:userEmail
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  fetch("http://localhost:3000/users", configurationObject)
  .then( response =>  response.json())
  .then(object => console.log(object))
  .catch(function (error) {
    alert("There is an Error");
    console.log(error.message);
  });
}
 submitData ("Steve","steve@steve.com")
 submitData("Sam","sam@sam.com")