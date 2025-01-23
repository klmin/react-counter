const numbers = [-1, -10, -100, 100, 10, 1];

const Button = ({value, clickEvent}) => {
    const handleClick = () => clickEvent(value);

    return (
        <button value={value} onClick={handleClick}>
          {value > 0 ? `+${value}` : value}
        </button>
      );
};

const Controller = ({handleSetCount}) => {
    return (
        <div>
            {numbers.map(v => (
                <Button key={v} value={v} clickEvent={handleSetCount} />
            ))}
        </div>
    );
};

export default Controller;