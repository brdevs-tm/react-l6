const useLocation = () => {
  const { pathname, search } = window.location;
  
  return {
    pathname,
    search,
  };
};

export default useLocation;
