import PaginationArrowIcon from "@/assets/icons/paginationArrowIcon";
import { Pagination } from "antd";
import { useState } from "react";
import TestTime from "./components/testTime";

const Test = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="test">
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <Pagination
          pageSize={5}
          defaultCurrent={1}
          total={500}
          itemRender={(page, type) => {
            if (type === "next") {
              return (
                <a className="action__btn">
                  <PaginationArrowIcon />
                </a>
              );
            } else if (type === "prev") {
              return (
                <a className="action__btn">
                  <PaginationArrowIcon
                    style={{ transform: "rotate(-180deg)" }}
                  />
                </a>
              );
            }
            if (type === "page") {
              return <a>{page}-dars</a>;
            }
          }}
          current={currentPage}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
          }}
        />
        <div>{currentPage}-dars</div>
      </div>
      <p></p>
      <TestTime />
    </div>
  );
};

export default Test;
