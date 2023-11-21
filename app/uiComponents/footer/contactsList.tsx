import Link from "next/link";

const CONTACTS = [
  { id: "1", title: "Телефон", text: "+38 011 222 33 44", link: "tel:+380112223344" },
  { id: "2", title: "Імейл", text: "testnext@gmail.com", link: "mailto:testnext@gmail.com" },
];

const styleContactsTitle = "text-2xl text-txt-main-yellow leading-[1.6] flex flex-col gap-y-2 w-fit";
const styleContactsText = "text-base text-txt-main-white opacity-[0.6] hover:text-txt-main-yellow";

const ContactList = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[300px] md:w-[450px] lg:w-[500px] xl:w-full mx-auto mt-8 md:mt-5">
      {CONTACTS.map((el) => (
        <li className={styleContactsTitle} key={el.id}>
          {el.title}
          <Link href={el.link} className={styleContactsText}>
            {el.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
