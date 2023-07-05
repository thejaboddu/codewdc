type data = {
    items: any,
    pageSize: any,
    currentPage: any,
    onPageChange: any
}

const Pagination = ({ items, pageSize, currentPage, onPageChange }: data) => {
const pagesCount = Math.ceil(items / pageSize); // 100/10

if (pagesCount === 1) return null;
const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

 return (
  <div className="w-fit mx-auto mt-10">
    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm custom-pagination" aria-label="Pagination">
        {pages.map((page) => (
            <a key={page} onClick={() => onPageChange(page)} aria-current="page" className={`${page === currentPage ? 'active' : ''} bg-theme-light-grey cursor-pointer relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 first:rounded-l last:rounded-r`}>{page}</a>
        ))}
    </nav>
  </div>
);

}

export default Pagination;