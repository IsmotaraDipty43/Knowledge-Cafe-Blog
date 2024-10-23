import PropTypes from "prop-types";
import Bookmarkk from "../Bookmarkk/Bookmarkk";

const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="w-1/3">
            <div className="bg-purple-50 border border-purple-500 text-purple-700  font-bold text-center p-4 mb-5">
                <h3>Spent Time on read: {readingTime}</h3>
            </div>
            <div className=" bg-gray-100">
            <div className="mb-5 p-4">
                <h2 className="text-xl font-bold text-black p-4">
                    Bookmarked Blog: {bookmarks.length}
                </h2>
                {
                    bookmarks.map((bookmark,idx) => (
                        <Bookmarkk key={idx} bookmark={bookmark} />
                    ))
                }
            </div>
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
};

export default Bookmarks;
