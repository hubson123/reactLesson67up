import React from "react";
const Article = ({ author, title, tresc }) => {
    const styles = {
        marginTop: 40,
    };
    return ( <article style = { styles } >
        <h3 style = {
            {
                marginBottom: 3,
                textTransform: "uppercase",
            }
        } > { title } </h3> <h4 > { author } </h4> <p> { tresc } </p> </article>
    );
};


export default Article;