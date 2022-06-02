import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import usePrevious from "../../hooks/usePrevious";
import "./sectionActionBar.scss";

const SectionHeader = ({
  label = "Sample Label",
  onPageChange,
  pageCount,
  onSearch,
}) => {
  const [search, setSearch] = useState("");
  const [searchTimeout, setSearchTimout] = useState(null);

  const prevSearchValue = usePrevious(search);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchTimout(
      setTimeout(() => {
        if (prevSearchValue && prevSearchValue !== search) {
          onSearch(search);
        }
      }, 500)
    );
    // eslint-disable-next-line
  }, [search]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="actionHeader">
      <p>{label}</p>
      <div>
        <ReactPaginate
          className="sectionPagination"
          pageCount={pageCount}
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          onPageChange={onPageChange}
          renderOnZeroPageCount={null}
        />
        <input placeholder="Search" value={search} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default SectionHeader;
