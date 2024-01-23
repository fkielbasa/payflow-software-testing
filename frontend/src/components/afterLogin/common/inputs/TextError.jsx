
const TextError = (props) => {
    const styles = {
        text : {
            fontSize: '32px',
            fontWeight: 'bold',
        },
        wrapper: {
            display: 'flex',
            justifyContent: 'center'
        }
    }
    return(
        <div style={styles.wrapper}>
            <p style={styles.text}>
                {props.text}
            </p>
        </div>
    )
}
export default TextError
