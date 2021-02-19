import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    tresc:
      "Ipsum amet magna labore in sit proident fugiat reprehenderit aute et enim. Duis commodo sunt reprehenderit minim aliqua. Minim et dolore fugiat consectetur et reprehenderit ullamco Lorem ad ipsum ex occaecat laborum. Labore consequat tempor eiusmod eiusmod velit ipsum voluptate. Labore voluptate id veniam cupidatat nulla laboris aute culpa. Minim id magna ad laborum duis consequat est est nisi. Anim fugiat id laborum culpa exercitation enim quis. Irure veniam ullamco ipsum magna laboris voluptate labore irure consectetur amet cillum proident qui. Ut in reprehenderit cillum in. Aliqua excepteur ea est aute eu excepteur.Enim sunt eu incididunt aliquip magna irure. Esse occaecat esse aute fugiat. Nostrud commodo id tempor nisi. Lorem quis non nulla officia occaecat incididunt enim. Mollit dolore nisi enim aute tempor culpa duis non aliqua duis pariatur voluptate ipsum. Culpa enim aliqua aliquip nulla pariatur laboris cupidatat in minim adipisicing est amet occaecat voluptate.",
  },
  {
    id: 2,
    title: "Jedziemy z tematem",
    author: "Jan Nowak",
    tresc:
      "Ipsum amet magna labore in sit proident fugiat reprehenderit aute et enim. Duis commodo sunt reprehenderit minim aliqua. Minim et dolore fugiat consectetur et reprehenderit ullamco Lorem ad ipsum ex occaecat laborum. Labore consequat tempor eiusmod eiusmod velit ipsum voluptate. Labore voluptate id veniam cupidatat nulla laboris aute culpa. Minim id magna ad laborum duis consequat est est nisi. Anim fugiat id laborum culpa exercitation enim quis. Irure veniam ullamco ipsum magna laboris voluptate labore irure consectetur amet cillum proident qui. Ut in reprehenderit cillum in. Aliqua excepteur ea est aute eu excepteur.Enim sunt eu incididunt aliquip magna irure. Esse occaecat esse aute fugiat. Nostrud commodo id tempor nisi. Lorem quis non nulla officia occaecat incididunt enim. Mollit dolore nisi enim aute tempor culpa duis non aliqua duis pariatur voluptate ipsum. Culpa enim aliqua aliquip nulla pariatur laboris cupidatat in minim adipisicing est amet occaecat voluptate.",
  },
  {
    id: 3,
    title: "Kwestia smaku",
    author: "Jan Nowak",
    tresc:
      "Ipsum amet magna labore in sit proident fugiat reprehenderit aute et enim. Duis commodo sunt reprehenderit minim aliqua. Minim et dolore fugiat consectetur et reprehenderit ullamco Lorem ad ipsum ex occaecat laborum. Labore consequat tempor eiusmod eiusmod velit ipsum voluptate. Labore voluptate id veniam cupidatat nulla laboris aute culpa. Minim id magna ad laborum duis consequat est est nisi. Anim fugiat id laborum culpa exercitation enim quis. Irure veniam ullamco ipsum magna laboris voluptate labore irure consectetur amet cillum proident qui. Ut in reprehenderit cillum in. Aliqua excepteur ea est aute eu excepteur.Enim sunt eu incididunt aliquip magna irure. Esse occaecat esse aute fugiat. Nostrud commodo id tempor nisi. Lorem quis non nulla officia occaecat incididunt enim. Mollit dolore nisi enim aute tempor culpa duis non aliqua duis pariatur voluptate ipsum. Culpa enim aliqua aliquip nulla pariatur laboris cupidatat in minim adipisicing est amet occaecat voluptate.",
  },
  {
    id: 4,
    title: "Być albo nie byc",
    author: "Jan Nowak",
    tresc:
      "Ipsum amet magna labore in sit proident fugiat reprehenderit aute et enim. Duis commodo sunt reprehenderit minim aliqua. Minim et dolore fugiat consectetur et reprehenderit ullamco Lorem ad ipsum ex occaecat laborum. Labore consequat tempor eiusmod eiusmod velit ipsum voluptate. Labore voluptate id veniam cupidatat nulla laboris aute culpa. Minim id magna ad laborum duis consequat est est nisi. Anim fugiat id laborum culpa exercitation enim quis. Irure veniam ullamco ipsum magna laboris voluptate labore irure consectetur amet cillum proident qui. Ut in reprehenderit cillum in. Aliqua excepteur ea est aute eu excepteur.Enim sunt eu incididunt aliquip magna irure. Esse occaecat esse aute fugiat. Nostrud commodo id tempor nisi. Lorem quis non nulla officia occaecat incididunt enim. Mollit dolore nisi enim aute tempor culpa duis non aliqua duis pariatur voluptate ipsum. Culpa enim aliqua aliquip nulla pariatur laboris cupidatat in minim adipisicing est amet occaecat voluptate.",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
