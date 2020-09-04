const contacts = [
  {
    id: 1,
    fName:"Mike",
    lName:"Lee",
    address:"Milky Way 10",
    phone: "+38569987415",
    email:"mike.lee@react.hr",
    slug: "1",
  },
  {
    id: 2,
    fName:"Anna",
    lName:"Bannana",
    address:"Maple Leaves 8",
    phone: "+1574875154",
    email:"ana.neka@react.hr",
    slug: "2",
  },
  {
    id: 3,
    fName:"Michael",
    lName:"Lord",
    address:"Avenue 13",
    phone: "+38597589647",
    email:"michael.lord@react.hr",
    slug: "3",
  },
]

const newContact = {
  id: null,
  fName: "",
  lName: "",
  address: "",
  phone: "",
  email: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newContact,
  contacts
};
