import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return <button style ={{backgroundColor: color}}className = 'btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.PropTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClickj: PropTypes.func.isRequired,
}

export default Button
