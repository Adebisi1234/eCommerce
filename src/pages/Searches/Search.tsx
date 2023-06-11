import Header from "../../components/Header";
const Search = ({ query, num }: { query: string; num: number }) => {
  return (
    <>
      <Header leftIcon="left" rightIcon="filter" title={query} item={0} />
      <h4>{num} items..</h4>
      {/* Cards */}
    </>
  );
};

export default Search;
