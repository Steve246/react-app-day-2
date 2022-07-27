import  propTypes  from "prop-types";

// const HeaderComponenents = (props) => {
//   return (
//     <header>
//         <h1> {props.title} </h1>
//     </header>
//   )
// }

const HeaderComponenents = ({title}) => {
    return (
      <header>
          <h1> {title} </h1>
      </header>
    )
  }

HeaderComponenents.defaultProps = {
    title : "Default Props",
}

HeaderComponenents.propTypes = {
    title: propTypes.string.isRequired,
}

export default HeaderComponenents
