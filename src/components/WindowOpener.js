
import React from "react";
import "./Button.css"
// Main Window.
let browser = null;
// child window.
let popup = null;
// interval
let timer = null;

// This function is what the name says.
// it checks whether the popup still open or not
function watcher () {
    // if popup is null then let's clean the intervals.
    if (popup === null) {
        clearInterval(timer);
        timer = null;
        // if popup is not null and it is not closed, then let's set the focus on it... maybe...
    } else if (popup !== null && !popup.closed) {
        popup.focus();
        // if popup is closed, then let's clean errthing.
    } else if (popup !== null && popup.closed) {
        clearInterval(timer);
        browser.focus();
        // the onCloseEventHandler it notifies that the child has been closed.
        browser.onClose("child was closed");
        timer = null;
        popup = null;
    }
}

export class WindowOpener extends React.Component {
    // The properties of the component are the following
    // `url`: URI in which the new window will open in.
    // `name`: name of the popup.
    // `bridge`: this will be the function that we will use to communicate parent and son
    // `opts`: options that the window has. if you want to know all the options goto
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    constructor (props) {
        super(props);
        // binding
        this.onClickHandler = this.onClickHandler.bind(this);
        // browser is set to current window
        browser = window.self;
        // each time we send a message will use the `onSuccess`
        browser.onSuccess = (res) => {
            props.bridge(null, res);
        }

        // each time we failed we will use the `onError`
        browser.onError = (error) => {
            props.bridge(error);
        }

        // Tells when a child window is open
        browser.onOpen = (message) => {
            props.bridge(null, message);
        }
        // Tells when a child window is close
        browser.onClose = (message) => {
            props.bridge(null, message);
        }
    }
    // opens a child
    onClickHandler (evt) {


        const {  name, opts } = this.props;
        // if there is  already a child open, let's set focus on it
        if (popup && !popup.closed) {
            popup.focus();

            return ;
        }
        let url = `http://localhost:4006/editnote?id=${this.props.id}&content=${this.props.content}&title=${this.props.title}&tags=${this.props.tags}&fav=${this.props.fav}`
        // we open a new window.
        popup = browser.open(url, name, opts);


        setTimeout(() => {
            // The opener object is created once and only if a window has a parent
            popup.opener.onOpen("child was opened");
        }, 0);

        if (timer === null) {
            // each two seconds we check if the popup still open or not
            timer = setInterval(watcher, 200);
        }

        return;

    }

    render () {
        const { children } = this.props;
        return (
            <button className='buton small' type="button" onClick={this.onClickHandler}>
                {children}
            </button>
        );
    }
}

WindowOpener.defaultProps = {
    name: "Edit popup",
    opts: `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, width=${500}, height=${600}`
}

export default WindowOpener