import SceletonCard from "./SceletonCard";
function hockWithSceleton(Component) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (!isLoading) {
      return <SceletonCard/>;
    }
    return <Component {...restProps} />;
  };
}
export default hockWithSceleton;
