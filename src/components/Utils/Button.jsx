import "./Button.scss"

const Button = ({ name, click }) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <symbol id="arrow" viewBox="0 0 100 100">
                        <path d="M12.5 45.83h64.58v8.33H12.5z" />
                        <path d="M59.17 77.92l-5.84-5.84L75.43 50l-22.1-22.08 5.84-5.84L87.07 50z" />
                    </symbol>
                </defs>
            </svg>

            <div className="container">

                <div className="content">

                    <div className="button" onClick={() => click()}>
                        <span className="title">{name}</span>
                        <span>
                            <svg>
                                <use xlinkHref="#arrow" href="#arrow"></use>
                            </svg>
                        </span>
                    </div>

                </div>

            </div>
        </div>)
};


export default Button;