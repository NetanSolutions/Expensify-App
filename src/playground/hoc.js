// higher order component (HOC) - A component (HOC) that renders another component
// the aim is;
// re-use code
// render hijacking
// prop manipulation
// abstract state


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <div> 
                    <p>Your are authenticed and allowed to see this message.</p>
                    <WrappedComponent {...props}/>
                </div>
            ) : (
                <p>Your are not authenticated and not allowed to see this message.</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} isAdmin={true} info="This is the detail" />, document.getElementById('app'))