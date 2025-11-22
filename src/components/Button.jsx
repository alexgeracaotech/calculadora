
const Button = ({ backgroundColor, hover, type }) => {

  const style = `
    button
    ${backgroundColor}
    ${hover}
  `;

  return <button className={style}>{type}</button>
}

export default Button;
