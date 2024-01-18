import {Toaster} from "react-hot-toast";

const Alert = () => {

    return(
        <div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        padding: '16px',
                        backgroundColor: 'var(--darkBlue)',
                        color: 'var(--white)',
                    },
                }}
            />
        </div>
    )
}
export default Alert
