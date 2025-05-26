import React from "react";
import usePhoneBookStore from "../stores/usePhonebookStore";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();

  return (
    <div>
      {phoneBook.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
