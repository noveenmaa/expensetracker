const getdata = document.getElementById("namehold");
const getdate = document.getElementById("birthday");
const getamount = document.getElementById("amount");
const addkey = document.getElementById("pressbtn");
const tablebody = document.getElementById("rowcontent");

addkey.addEventListener("click", () => {
  const namedata = getdata.value;
  const datedata = getdate.value;
  const amountdata = getamount.value;

  if (
    namedata.trim() === "" ||
    datedata.trim() === "" ||
    amountdata.trim() === ""
  ) {
    return;
  }
  const valuerow = document.createElement("tr");
  valuerow.className = "rowval";
  valuerow.innerHTML = `
<td>${namedata}</td>
<td>${datedata}</td>
<td>${amountdata}</td>
<td><button id="delbtn">delete</button></td>
`;
  const delrow = valuerow.querySelector("button");
  tablebody.appendChild(valuerow);

  getdata.value = "";
  getdate.value = "";
  getamount.value = "";

  delrow.addEventListener("click", () => {
    console.log("the console is working");
    tablebody.removeChild(valuerow);
  });
});
