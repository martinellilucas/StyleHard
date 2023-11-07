import style from "./Pagination.module.css";
const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className={style.container}>
      <button className={style.button} display={true} onClick={handlePrevious}>
        ⬅
      </button>

      {pages?.map((nPage) => (
        <div key={nPage}>
          <button
            onClick={() => onSpecificPage(nPage)}
            className={currentPage === nPage ? style.isActive : style.noActive}
          >
            {nPage}
          </button>
        </div>
      ))}

      <button className={style.button} onClick={handleNext}>
        ➡
      </button>
    </div>
  );
};

export default Pagination;
