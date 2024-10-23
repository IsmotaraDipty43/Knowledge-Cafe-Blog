import PropTypes from "prop-types";

const Bookmarkk = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white p-4 rounded-lg m-4">
            <h3 className="text-xl text-black font-semibold">
                {title}
            </h3>
        </div>
    );
};

Bookmarkk.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmarkk;
