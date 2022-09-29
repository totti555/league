const SplitText = (props) => {
    const copy = props.copy;
    const role = props.role;
    return (
        <span aria-label={copy} role={role} className='content-letter-animation'>
            {copy.split("").map(function (char, index) {
                return <span
                    aria-hidden="true"
                    key={index}
                    style={{ animationDelay: (0.5 + index / 10) + "s" }}>
                    {char}
                </span>;
            })}
        </span>
    )
}

export default SplitText;