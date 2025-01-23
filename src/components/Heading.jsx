
const Heading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className="text-4xl py-2">{title}</h1>
            <p className="text-lg py-2">{subtitle}</p>
        </div>
    );
};

export default Heading;